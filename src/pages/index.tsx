import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '../components/sidebar/Sidebar'
import Side from '../components/sidebar/Side'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Sidebar />
    <Side />
    </>
  )
}
