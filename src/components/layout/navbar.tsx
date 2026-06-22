import Link from 'next/link'
import { ClipboardPen } from 'lucide-react'

function Navbar() {
  return (
    <nav className="bg-main-900 text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <ClipboardPen size={40} />
        <h1 className="text-5xl font-bold text-center">CoachBoard</h1>
        <Link href="/" className="text-xl font-bold">
          Dashboard
        </Link>
        <Link href="/clients" className="text-xl font-bold">
          Clients
        </Link>
        <Link href="/sessions" className="text-xl font-bold">
          Sessions
        </Link>
        <Link href="/planning" className="text-xl font-bold">
          Calendrier
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
