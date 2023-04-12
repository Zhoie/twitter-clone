import { useCallback } from "react";
import { IconType } from "react-icons";
import { useRouter } from "next/router";

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType;
    onClick?: () => void;
}

export default function SidebarItem({ label, href, icon: Icon, onClick }: SidebarItemProps) {

    const router = useRouter();
    const handleClick = useCallback(() => {
        if (onClick) {
            return onClick();
        }
        if (href) {
            router.push(href);
        }
    }, [router, onClick, href])

    return (
        <div onClick={handleClick} className="flex flex-row items-center">
            {/* middle size page */}
            <div className="relative rounded-full w-14 h-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
                <Icon size={28} color="white" />
            </div>
            {/* End of middle size page */}

            {/* large size page */}
            <div className="relative hidden lg:flex gap-4 p-4 rounded-full hover:bg-slate-400 hover:bg-opaciity-10 cursor-pointer ">
                <Icon size={24} color="white" />
                <p className="hidden lg:block text-white text-xl">
                    {label}
                </p>
            </div>
            {/* End of large size page */}

        </div>
    )

}