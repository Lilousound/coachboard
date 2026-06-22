'use client'

import { useState } from 'react'
import { Session, SessionType } from '../types'
import Input from '@/components/ui/input'
import Button from '@/components/ui/button'
import Card from '@/components/ui/card'

type SessionFormProps = {
  initialData?: Session
  onSubmit: (session: Session) => void
}

function SessionForm({ initialData, onSubmit }: SessionFormProps) {
  const [date, setDate] = useState(initialData?.date ?? '')
  const [time, setTime] = useState(initialData?.time ?? '')
  // duration est un number dans ton type, donc on stocke une string dans l'input
  // et on convertit au moment de soumettre
  const [duration, setDuration] = useState(
    initialData?.duration?.toString() ?? '',
  )
  const [type, setType] = useState<SessionType>(
    initialData?.type ?? 'Individuelle',
  )
  const [location, setLocation] = useState(initialData?.location ?? '')
  const [comments, setComments] = useState(initialData?.comments ?? '')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const session: Session = {
      id: initialData?.id ?? crypto.randomUUID(),
      date,
      time,
      duration: Number(duration), // on convertit la string en number ici
      type,
      location,
      comments,
      memberId: initialData?.memberId ?? '', // on laisse vide pour l'instant, on liera au client plus tard
    }

    onSubmit(session)
  }

  return (
    <main className="flex flex-col items-center mt-6 gap-4">
      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-75">
          <Input
            label="Date"
            value={date}
            onChange={setDate}
            type="date"
            required
          />
          <Input
            label="Heure"
            value={time}
            onChange={setTime}
            type="time"
            required
          />
          <Input
            label="Durée (minutes)"
            value={duration}
            onChange={setDuration}
            type="number"
            required
          />
          <Input label="Lieu" value={location} onChange={setLocation} />

          <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium">Type</span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as SessionType)}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              {/* on liste toutes les options de ton type SessionType */}
              <option value="Individuelle">Individuelle</option>
              <option value="Collective">Collective</option>
              <option value="En salle">En salle</option>
              <option value="En extérieur">En extérieur</option>
              <option value="En ligne">En ligne</option>
              <option value="Rééducation">Rééducation</option>
              <option value="Renfo">Renfo</option>
              <option value="Perfectionnement">Perfectionnement</option>
              <option value="Perte de poids">Perte de poids</option>
              <option value="Prise de masse">Prise de masse</option>
              <option value="Mobilité">Mobilité</option>
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium">Commentaires</span>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
              rows={3}
            />
          </label>

          <Button type="submit">Enregistrer</Button>
        </form>
      </Card>
    </main>
  )
}

export default SessionForm
