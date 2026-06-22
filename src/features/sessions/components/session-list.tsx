'use client'

import { useState } from 'react'
import { useSessionsStore } from '@/store/useSessionsStore'
import SessionCard from './session-card'
import SessionForm from './session-form'
import Button from '@/components/ui/button'

function SessionList() {
  const sessions = useSessionsStore((state) => state.sessions)
  const addSession = useSessionsStore((state) => state.addSession)
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="m-8">
      <div className="flex flex-row items-center justify-between gap-4">
        <div>
          <p className="text-main-500 text-sm">
            {sessions.length} SÉANCES PRÉVUES
          </p>
          <h1 className="text-4xl font-bold text-main-900 mt-4">
            Tes séances à venir
          </h1>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Annuler' : '+ Ajouter une séance'}
        </Button>
      </div>

      {showForm && (
        <SessionForm
          onSubmit={(session) => {
            addSession(session)
            setShowForm(false)
          }}
        />
      )}

      <div className="flex flex-row flex-wrap items-start justify-center mt-5 gap-4">
        {sessions.map((session) => (
          <SessionCard
            key={session.id}
            id={session.id}
            date={session.date}
            time={session.time}
            duration={session.duration}
            type={session.type}
            location={session.location}
            comments={session.comments}
          />
        ))}
      </div>
    </main>
  )
}

export default SessionList
