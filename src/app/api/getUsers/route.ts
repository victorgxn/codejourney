import { NextResponse } from 'next/server';
import { clerkClient, auth } from '@clerk/nextjs/server';

export async function POST() {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ status: 401 });
    }

    const user = await clerkClient.users.getUser(userId);

    if (
      user.privateMetadata?.role !== 'admin' &&
      user.privateMetadata?.role !== 'owner'
    ) {
      return NextResponse.json({ status: 401 });
    }

    const users = await clerkClient.users.getUserList({
      limit: 500,
    });
    const filteredUsers = users.data.filter(
      (user: any) => user.privateMetadata.role !== 'owner' && user.id !== userId
    );
    const data = JSON.parse(JSON.stringify(filteredUsers));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 500, body: error });
  }
}
