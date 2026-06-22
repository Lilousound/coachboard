'use client'

import Card from '@/components/ui/card'
import Link from 'next/link'
import { useSessionsStore } from '@/store/useSessionsStore'
import { CalendarClock } from 'lucide-react'

function UpcomingSessions() {
  const sessions = useSessionsStore((state) => state.sessions)
  return (
    <Link href="/sessions">
      <Card>
        <h3 className="text-4xl font-bold text-center pb-6">Séances à venir</h3>
        <div className="flex flex-col flex-wrap justify-center gap-5">
          {sessions.map((session) => (
            <div key={session.id} className="flex flex-row gap-2 items-center ">
              <CalendarClock size={30} />
              <p>
                JM Leclient le{' '}
                {new Date(session.date).toLocaleDateString('fr-FR')} à{' '}
                {session.time}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </Link>
  )
}

export default UpcomingSessions
