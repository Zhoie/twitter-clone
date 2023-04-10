import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'

export default function Sidebar() {
    const items = [
        { label: 'Home', href: '/' , BsHouseFill},
        { label: 'Notifications', href: '/notifications', BsBellFill },
        { label: 'Profile', href: '/use/123', FaUser },
        
    ]
    return (
        <div className="text-white">I am sidebar</div>
    )
}