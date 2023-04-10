import { useRouter } from 'next/router'
import { BsTwitter } from 'react-icons/bs'

export default function SidebarLogo() {
    const router = useRouter()
    return (
        <div className="rounded-full w-14 h-14 p-4 flex items-center justify-center hover:bg-blue-400 hover:bg-opacity-10 cursor-pointer transition">
            <BsTwitter size={28} color='white'/> 
        </div>
    )
}