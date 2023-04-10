import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import SidebarLogo from './SidebarLogo'

export default function Sidebar() {
    const items = [
        { label: 'Home', href: '/', BsHouseFill },
        { label: 'Notifications', href: '/notifications', BsBellFill },
        { label: 'Profile', href: '/use/123', FaUser },
    ]

    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg-w-[320px]">
                    <SidebarLogo />
                    {/* <p className='text-white'>Sidebar</p> */}
                </div>
            </div>
        </div>
    )
}