import { useState } from 'react'
import Card from '@/components/ui/card'
import { CalendarCheck } from 'lucide-react'
import { SessionType } from '../types'
import Button from '@/components/ui/button'
import SessionForm from './session-form'
import { useSessionsStore } from '@/store/useSessionsStore'

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
  const session = useSessionsStore((state) => state.getSessionById(id)) // Récupère la session correspondante à l'ID fourni
  const updateSession = useSessionsStore((state) => state.updateSession) // Récupère la fonction pour mettre à jour un client
  const [isEditing, setIsEditing] = useState(false) // État local pour gérer l'affichage du formulaire de modification

  if (!session) {
    return <p className="text-center mt-10">Cette séance n&apos;existe pas.</p> // Affiche un message si le client n'existe pas
  }

  if (isEditing) {
    // Si l'utilisateur est en mode édition, affiche le formulaire de modification avec champs préremplis (grâce à initialData)
    return (
      <main className="flex flex-col items-center mt-10 gap-4">
        <SessionForm
          initialData={session}
          onSubmit={(editSession) => {
            updateSession(session.id, editSession)
            setIsEditing(false)
          }}
        />
        <Button variant="secondary" onClick={() => setIsEditing(false)}>
          Annuler
        </Button>
      </main>
    )
  }
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
      <Button onClick={() => setIsEditing(true)}>Modifier</Button>
    </Card>
  )
}

export default SessionCard
