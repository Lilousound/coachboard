'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useClientsStore } from '@/store/useClientsStore'
import ClientForm from './client-form'
import Button from '@/components/ui/button'

function ClientDetail({ id }: { id: string }) {
  const router = useRouter() // Hook de navigation de Next.js pour rediriger l'utilisateur après l'archivage
  const client = useClientsStore((state) => state.getClientById(id)) // Récupère le client correspondant à l'ID fourni
  const updateClient = useClientsStore((state) => state.updateClient) // Récupère la fonction pour mettre à jour un client
  const archiveClient = useClientsStore((state) => state.archiveClient) // Récupère la fonction pour archiver un client
  const [isEditing, setIsEditing] = useState(false) // État local pour gérer l'affichage du formulaire de modification

  if (!client) {
    return <p className="text-center mt-10">Ce client n&apos;existe pas.</p> // Affiche un message si le client n'existe pas
  }

  if (isEditing) {
    // Si l'utilisateur est en mode édition, affiche le formulaire de modification avec champs préremplis (grâce à initialData)
    return (
      <main className="flex flex-col items-center mt-10 gap-4">
        <ClientForm
          initialData={client}
          onSubmit={(updatedMember) => {
            updateClient(client.id, updatedMember)
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
    <main className="flex flex-col items-center mt-10 gap-4 border-2 border-gray-300 rounded-lg p-8 m-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">
        {client.firstname} {client.lastname}
      </h1>
      <p>Email : {client.email}</p>
      <p>Téléphone : {client.phone}</p>
      <p>Niveau : {client.level}</p>
      <p>
        Inscrit le :{' '}
        {new Date(client.registrationDate).toLocaleDateString('fr-FR')}{' '}
        {/* Formate la date d'inscription au format français */}
      </p>
      <p>Notes : {client.notes || 'Aucune note'}</p>
      {/* Affiche "Aucune note" si le champ notes est vide */}
      <p>Statut : {client.active ? 'Actif' : 'Archivé'}</p>
      <div className="flex gap-3">
        <Button onClick={() => setIsEditing(true)}>Modifier</Button>
        {client.active && ( // Affiche le bouton "Archiver" uniquement si le client est actif
          <Button
            variant="secondary"
            onClick={() => {
              archiveClient(client.id) // Appelle la fonction d'archivage du client dans le store
              router.push('/clients') // Redirige l'utilisateur vers la liste des clients après l'archivage
            }}
          >
            Archiver
          </Button>
        )}
      </div>
    </main>
  )
}

export default ClientDetail
