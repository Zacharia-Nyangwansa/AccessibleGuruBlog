
import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
        <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
            <Image src="/accessibleguru.png" alt="AccessibleGuru" className="w-full h-auto rounded-full"/>
        </div>
        <span className="font-bold text-xl">AccessibleGuru</span>

    </Link>
  )
}

export default Logo