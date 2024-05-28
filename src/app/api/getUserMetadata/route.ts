import { NextResponse } from 'next/server';
import { clerkClient, auth } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  try {
    const currentUser = auth();
    const { userId } = await req.json();
    if (!currentUser.userId) {
      return NextResponse.json({ status: 401 });
    }

    const currUser = await clerkClient.users.getUser(currentUser?.userId);

    if (
      currUser.privateMetadata?.role !== 'admin' &&
      currUser.privateMetadata?.role !== 'owner'
    ) {
      return NextResponse.json({ status: 401 });
    }
    const user = await clerkClient.users.getUser(userId);
    return NextResponse.json(user.privateMetadata);
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
