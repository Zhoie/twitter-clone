import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'
import SidebarTweetButton from './SidebarTweetButton'

import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'

import useCurrentUser from '../../../hooks/useCurrentUser'
import { signOut } from 'next-auth/react'


export default function Sidebar() {

    const { data: ccurrentUser } = useCurrentUser()
    const items = [
        { label: 'Home', href: '/', icon: BsHouseFill },
        { label: 'Notifications', href: '/notifications', icon: BsBellFill },
        { label: 'Profile', href: '/use/123', icon: FaUser },
    ]

    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-full">
                    <SidebarLogo />
                    {/* Side bar Items */}
                    {items.map((item, index) => (

                        <SidebarItem key={index} label={item.label} href={item.href} icon={item.icon} />

                    ))}

                    {ccurrentUser && (<SidebarItem onClick={() => signOut()} label="Logout" icon={BiLogOut} />)}
                    <SidebarTweetButton />
                    {/* End of Side bar Items */}

                </div>
            </div>
        </div>
    )
}