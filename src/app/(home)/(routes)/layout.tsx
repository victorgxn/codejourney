import {SideBarNav} from "@/app/(home)/_components/SideBarNav";

export default function HomeLayout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <div>
                <div>
                    <SideBarNav/>
                </div>
                {children}
            </div>
    )
}