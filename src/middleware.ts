import { authMiddleware } from '@clerk/nextjs';
import { NextResponse, NextRequest, NextFetchEvent } from 'next/server';
import { rateLimiter } from '@/lib/rate-limiter';

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {

  const authResult = await authMiddleware({
    publicRoutes: ['/', '/codejourney-empresas', '/preguntas-y-respuestas', '/programas-estudio'],
  })(req, ev);

  if (authResult) {
    return authResult;
  }

  const ip = req.ip ?? '127.0.0.1';

  try {
    const { success } = await rateLimiter.limit(ip);

    if (!success) return new NextResponse('Estas escribiendo muy rapido, por favor espera unos segundos antes de enviar otro mensaje.');
    return NextResponse.next();
  } catch (error) {
    return new NextResponse(
      'Algo salió mal, por favor intenta de nuevo en unos minutos.'
    );
  }
}

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/(api|trpc)(.*)',
    '/api/message/:path',
  ],
};
