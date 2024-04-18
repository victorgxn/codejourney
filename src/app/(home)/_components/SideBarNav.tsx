import {NavBar} from "@/app/(home)/_components/NavBar";
import {Aside} from "@/app/(home)/_components/Aside";
import {GridCourses} from "@/app/(home)/_components/GridCourses";

export const SideBarNav = () => {
    return (
        <div>
            <NavBar/>
            <Aside/>
            <GridCourses/>
        </div>
    );

}
