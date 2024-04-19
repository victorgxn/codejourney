import {NavBar} from "@/app/(home)/_components/(Side-BarNav)/NavBar";
import {Aside} from "@/app/(home)/_components/(Side-BarNav)/Aside";
import {GridCourses} from "@/app/(home)/_components/(Side-BarNav)/GridCourses";

export const SideBarNav = () => {
    return (
        <div>
            <NavBar/>
            <Aside/>
            <GridCourses/>
        </div>
    );

}
