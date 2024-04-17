import {LeftLogo} from "@/components/top-menu/logo";
import {NavigationBar} from "@/components/top-menu/navigation-bar";
import {RightSideButtons} from "@/components/top-menu/righ-side-buttons";

export const TopMenu = () => {
    return (
        <div className="
    flex
    justify-between
    items-center px-10 border-b h-28">
            <LeftLogo/>
            <NavigationBar/>
            <RightSideButtons/>
        </div>
    );
}