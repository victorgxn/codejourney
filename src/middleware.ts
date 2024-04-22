import { authMiddleware } from '@clerk/nextjs';
import { NextResponse, NextRequest, NextFetchEvent } from 'next/server';
import { rateLimiter } from '@/lib/rate-limiter';

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {

  const authResult = await authMiddleware({
    publicRoutes: ['/'],
  })(req, ev);

  if (authResult) {
    return authResult;
  }

  const ip = req.ip ?? '127.0.0.1';

  try {
    const { success } = await rateLimiter.limit(ip);

    if (!success) return new NextResponse('You are writing messages too fast.');
    return NextResponse.next();
  } catch (error) {
    return new NextResponse(
      'Sorry, something went wrong processing your message. Please try again later.'
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
