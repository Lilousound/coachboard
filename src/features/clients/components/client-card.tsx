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
}: {
  id: string
  name: string
  level: Level
  registrationDate: string
  notes: string
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

        <div className="">
          <p className="text-sm bg-main-500 text-white px-1.5 py-0.5 rounded-lg inline-block mb-2">
            {level}
          </p>

          <p>{notes || 'Aucune note'}</p>
        </div>
      </Card>
    </Link>
  )
}

export default ClientCard
