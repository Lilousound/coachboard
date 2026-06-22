'use client'

import Link from 'next/link'
import Card from '@/components/ui/card'
import { useClientsStore } from '@/store/useClientsStore'
import { useSessionsStore } from '@/store/useSessionsStore'
import { ContactRound, CalendarDays, ReceiptEuro } from 'lucide-react'

function StatsCard() {
  const clients = useClientsStore((state) => state.clients)
  const sessions = useSessionsStore((state) => state.sessions)
  return (
    <Card>
      <h3 className="text-4xl font-bold text-center pb-6 ">Stats</h3>
      <div className="flex flex-col flex-wrap justify-center gap-5">
        <Link href="/clients">
          <div className="flex flex-row gap-2 items-center ">
            <ContactRound size={30} />
            <p className="cursor-pointer">
              Nombre de clients : <strong>{clients.length}</strong>
            </p>
          </div>
        </Link>
        <Link href="/upcoming-sessions">
          <div className="flex flex-row gap-2 items-center ">
            <CalendarDays size={30} />
            <p className="cursor-pointer">
              Nombre de séances à venir : <strong>{sessions.length}</strong>
            </p>
          </div>
        </Link>
        <Link href="/invoices">
          <div className="flex flex-row gap-2 items-center ">
            <ReceiptEuro size={30} />
            <p className="cursor-pointer">
              Factures à éditer : <strong>2</strong>
            </p>
          </div>
        </Link>
      </div>
    </Card>
  )
}

export default StatsCard
