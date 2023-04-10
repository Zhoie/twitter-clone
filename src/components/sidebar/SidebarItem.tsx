import { IconType } from "react-icons";

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType;
    onClick?: () => void;
}

export default function SidebarItem({ label, href, icon: Icon, onClick }: SidebarItemProps) {
    return (
        <div className="flex flex-row items-center">
            {/* middle size page */}
            <div className="relative rounded-full w-14 h-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
                <Icon size={28} color="white" />
            </div>
            {/* large size page */}
            <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-400 hover:bg-opaciity-10 cursor-pointer ">

            </div>

        </div>
    )

}