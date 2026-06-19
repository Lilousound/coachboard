'use client'

import { useState } from 'react'
import { useClientsStore } from '@/store/useClientsStore'
import ClientCard from './client-card'
import ClientForm from './client-form'
import Button from '@/components/ui/button'

function ClientList() {
  const clients = useClientsStore((state) => state.clients)
  const addClient = useClientsStore((state) => state.addClient)
  const [showForm, setShowForm] = useState(false) //affiche ou masque le formulaire d'ajout de client

  return (
    <main className="flex flex-col col-auto items-center justify-center mt-5 gap-4">
      <p>Client List</p>

      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Annuler' : 'Ajouter un client'}
      </Button>

      {showForm && ( // Affiche le formulaire d'ajout de client si showForm est vrai
        <ClientForm
          onSubmit={(member) => {
            addClient(member)
            setShowForm(false)
          }}
        />
      )}

      {clients.map((client) => (
        <ClientCard
          key={client.id}
          id={client.id}
          name={`${client.firstname} ${client.lastname}`}
          phone={client.phone}
          email={client.email}
          level={client.level}
          registrationDate={client.registrationDate}
          notes={client.notes}
        />
      ))}
    </main>
  )
}

export default ClientList
