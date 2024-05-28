import { NextResponse } from 'next/server';
import { clerkClient, auth } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  try {
    const currentUser = auth();
    const { userId, role } = await req.json();
    if (!currentUser.userId) {
      return NextResponse.json({ status: 401 });
    }

    const user = await clerkClient.users.getUser(currentUser?.userId);

    if (
      user.privateMetadata?.role !== 'admin' &&
      user.privateMetadata?.role !== 'owner'
    ) {
      return NextResponse.json({ status: 401 });
    }

    await clerkClient.users.updateUserMetadata(userId, {
      privateMetadata: {
        role: role,
      },
    });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const currentUser = auth();
    const { userId } = await req.json();
    if (!currentUser.userId) {
      return NextResponse.json({ status: 401 });
    }

    const user = await clerkClient.users.getUser(currentUser?.userId);

    if (
      user.privateMetadata?.role !== 'admin' &&
      user.privateMetadata?.role !== 'owner'
    ) {
      return NextResponse.json({ status: 401 });
    }
    
    await clerkClient.users.deleteUser(userId);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
