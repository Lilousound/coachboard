import Card from '@/components/ui/card'
import { CalendarCheck } from 'lucide-react'
import { SessionType } from '../types'

function SessionCard({
  id,
  date,
  time,
  duration,
  type,
  location,
  comments,
}: {
  id: string
  date: string
  time: string
  duration: number
  type: SessionType
  location: string
  comments: string
}) {
  return (
    <Card className="w-96 flex flex-col col-auto items-start justify-start gap-4 p-6">
      <div className="flex flex-row items-center gap-4">
        <CalendarCheck size={40} strokeWidth={1.75} />
        <div>
          <p className="font-bold">Séance avec Jean-Mich LeClient</p>
          <p className="text-sm text-gray-500">
            Prévue le {new Date(date).toLocaleDateString('fr-FR')} à {time}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-sm bg-main-500 text-white px-1.5 py-0.5 rounded-lg">
          {type}
        </p>
        <p className="text-sm text-gray-500">{duration} min</p>
      </div>
      {location && <p className="text-sm text-gray-500">📍 {location}</p>}
      <p>{comments || ''}</p>
    </Card>
  )
}

export default SessionCard
