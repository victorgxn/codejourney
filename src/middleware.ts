import {
  clerkMiddleware,
  clerkClient,
  createRouteMatcher,
} from '@clerk/nextjs/server';

import { NextResponse, NextRequest, NextFetchEvent } from 'next/server';
import { rateLimiter } from '@/lib/rate-limiter';

const isPublicRoute = createRouteMatcher([
  '/',
  '/codejourney-empresas',
  '/preguntas-y-respuestas',
  '/programas-estudio',
  '/sign-in',
  '/sign-up',
  '/api/getUsers',
]);

const isAdminRoute = createRouteMatcher(['/administracion']);

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const clerkAuth = clerkMiddleware(async (auth, req) => {
    try {
      const { userId } = auth();
      if (userId) {
        try {
          const user = await clerkClient.users.getUser(userId);
          const admin =
            user?.privateMetadata?.role === 'admin' ||
            user?.privateMetadata?.role === 'owner';

          if (!admin && isAdminRoute(req)) {
            const url = new URL('/dashboard', req.url);
            return NextResponse.redirect(url);
          }
        } catch (error) {
          const url = new URL('/', req.url);
          return NextResponse.redirect(url);
        }
      }
      if (!isPublicRoute(req)) {
        auth().protect();
      }
    } catch (error) {
      const url = new URL('/', req.url);
      return NextResponse.redirect(url);
    }
  })(req, ev);
  if (clerkAuth) {
    return clerkAuth;
  }
  const ip = req.ip ?? '127.0.0.1';

  try {
    const { success } = await rateLimiter.limit(ip);

    if (!success) {
      return new NextResponse(
        'Estas escribiendo muy rapido, por favor espera unos segundos antes de enviar otro mensaje.'
      );
    }

    return NextResponse.next();
  } catch (error) {
    return new NextResponse(
      'Algo salió mal, por favor intenta de nuevo en unos minutos.',
      { status: 500 }
    );
  }
}

// export default async function middleware(req: NextRequest, ev: NextFetchEvent) {

//   const ip = req.ip ?? '127.0.0.1';

//   try {
//     const { success } = await rateLimiter.limit(ip);

//     if (!success) {
//       return new NextResponse(
//         'Estas escribiendo muy rapido, por favor espera unos segundos antes de enviar otro mensaje.'
//       );
//     }

//     return NextResponse.next();
//   } catch (error) {
//     return new NextResponse(
//       'Algo salió mal, por favor intenta de nuevo en unos minutos.',
//       { status: 500 }
//     );
//   }
// }

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)',
    '/',
    '/(api|trpc)(.*)',
    '/api/message/:path',
  ],
};
