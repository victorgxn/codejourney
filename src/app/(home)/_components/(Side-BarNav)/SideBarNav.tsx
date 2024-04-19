import {NavBar} from "@/app/(home)/_components/(Side-BarNav)/NavBar";
import {Aside} from "@/app/(home)/_components/(Side-BarNav)/Aside";

export const SideBarNav = () => {
    return (
        <div>
            <div className='h-[80px] fixed inset-y-0 w-full z-[49]'>
                <NavBar/>
            </div>
            <div className='className="hidden lg:flex pt-[80px] h-full w-72 flex-col fixed inset-y-0 z-[48]"'>
                <Aside/>
            </div>
        </div>
    );

}
