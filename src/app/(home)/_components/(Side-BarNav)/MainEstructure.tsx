import { NavBar } from '@/app/(home)/_components/(Side-BarNav)/NavBar';
import { Aside } from '@/app/(home)/_components/(Side-BarNav)/Aside';

export const MainEstructure = () => {
  return (
    <div>
      <div className="h-[80px] fixed inset-y-0 w-full z-[49]">
        <NavBar />
      </div>
      <Aside />
    </div>
  );
};
