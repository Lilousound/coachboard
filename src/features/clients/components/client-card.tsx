import Link from 'next/link'
import { Level } from '../types'

function ClientCard({
  id,
  name,
  level,
  registrationDate,
  notes,
}: {
  id: string
  name: string
  level: Level
  registrationDate: string
  notes: string
}) {
  return (
    <Link href={`/clients/${id}`}>
      <main className="flex col-auto items-center justify-center text-white bg-sky-600 rounded-3xl p-8 m-8 gap-4 mt-6 border-2 border-white/10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-[#1d33b3]/30 hover:scale-[1.01]">
        <p className="font-bold">{name}</p>
        <p>{level}</p>
        <p>{new Date(registrationDate).toLocaleDateString('fr-FR')}</p>
        <p>{notes || 'Aucune note'}</p>
      </main>
    </Link>
  )
}

export default ClientCard
