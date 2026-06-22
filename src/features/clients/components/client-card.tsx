import Link from 'next/link'
import { Level } from '../types'
import Card from '@/components/ui/card'
import { CircleUser } from 'lucide-react'

function ClientCard({
  id,
  name,
  level,
  registrationDate,
  notes,
  active,
}: {
  id: string
  name: string
  level: Level
  registrationDate: string
  notes: string
  active: boolean
}) {
  return (
    <Link href={`/clients/${id}`}>
      <Card className="w-96 flex flex-col col-auto items-start justify-start gap-4 p-6">
        <div className="flex flex-row items-center gap-4">
          <CircleUser size={40} strokeWidth={1.75} />
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-sm text-gray-500">
              Inscrit•e le{' '}
              {new Date(registrationDate).toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>

        <div className=" flex items-center justify-around">
          <p className="text-sm bg-main-500 text-white px-1.5 py-0.5 rounded-lg inline-block mb-2">
            {level}
          </p>
          <p className="italic text-sm bg-main-900/30 text-main-50 px-1.5 py-0.5 rounded-lg inline-block mb-2">
            {active ? '' : 'Archivé'}
          </p>
        </div>
        <p>{notes || 'Aucune note'}</p>
      </Card>
    </Link>
  )
}

export default ClientCard
