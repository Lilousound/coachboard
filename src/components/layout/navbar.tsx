import Link from 'next/link'
import { ClipboardPen } from 'lucide-react'

function Navbar() {
  return (
    <nav className=" text-main-500 p-4 border-b border-main-500/30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <ClipboardPen size={30} />
          <h1 className="text-2xl font-bold text-center">CoachBoard</h1>
        </div>
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-bold">
            Dashboard
          </Link>
          <Link href="/clients" className="text-xl">
            Clients
          </Link>
          <Link href="/sessions" className="text-xl">
            Sessions
          </Link>
          <Link href="/planning" className="text-xl">
            Calendrier
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
