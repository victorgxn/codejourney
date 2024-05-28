import { NavBar } from '@/app/(home)/_components/(Side-BarNav)/NavBar';
import { Aside } from '@/app/(home)/_components/(Side-BarNav)/Aside';
import { currentUser } from '@clerk/nextjs/server';

export const MainEstructure = async () => {
  const user = await currentUser();
  const admin =
    user?.privateMetadata?.role === 'admin' ||
    user?.privateMetadata?.role === 'owner';
  return (
    <div>
      <div className="h-[80px] fixed inset-y-0 w-full z-[49]">
        <NavBar admin={admin} />
      </div>
      <Aside admin={admin} />
    </div>
  );
};
