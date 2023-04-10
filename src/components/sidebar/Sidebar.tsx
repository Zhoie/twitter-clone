import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'

export default function Sidebar() {
    const items = [
        { label: 'Home', href: '/', icon: BsHouseFill },
        { label: 'Notifications', href: '/notifications', icon: BsBellFill },
        { label: 'Profile', href: '/use/123', icon: FaUser },
    ]

    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg-w-[320px]">
                    <SidebarLogo />
                    {items.map((item, index) => (

                        <SidebarItem key={index} label={item.label} href={item.href} icon={item.icon} />

                    ))}
                </div>
            </div>
        </div>
    )
}