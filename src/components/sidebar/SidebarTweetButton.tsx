import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { FaFeather } from 'react-icons/fa'
import { useLoginModal } from '../../../hooks/useLoginModal'

export default function SidebarTweetButton() {

    const router = useRouter()
    const loginModal = useLoginModal()

    const tweetBtnClick = useCallback(() => {
        loginModal.onOpen()
    },[loginModal])

    return (
        <div onClick={tweetBtnClick} >
            {/* middle size page */}
            <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:opacity-90 transition cursor-pointer">
                <FaFeather size={28} color='white' />
            </div>
            {/* End of middle size page */}
            {/* large size page */}
            <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500  hover:opacity-90 cursor-pointer transition">
                <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
                    Tweet
                </p>
            </div>
            {/* End of large size page */}
        </div>
    )
}