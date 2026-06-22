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
    <main className="m-5">
      <div className="flex flex-row items-center justify-between gap-4">
        <div>
          <p className="text-main-500 text-sm">
            {clients.length} CLIENTS ACTIFS
          </p>
          <h1 className="text-4xl font-bold text-main-900">Tes clients</h1>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Annuler' : ' + Ajouter un client'}
        </Button>
      </div>
      {showForm && ( // Affiche le formulaire d'ajout de client si showForm est vrai
        <ClientForm
          onSubmit={(member) => {
            addClient(member)
            setShowForm(false)
          }}
        />
      )}

      <div className="flex flex-row row-auto items-center justify-center mt-5 gap-4">
        {clients.map((client) => (
          <ClientCard
            key={client.id}
            id={client.id}
            name={`${client.firstname} ${client.lastname}`}
            level={client.level}
            registrationDate={client.registrationDate}
            notes={client.notes}
          />
        ))}
      </div>
    </main>
  )
}

export default ClientList
