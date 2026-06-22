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
  const activeClients = clients.filter((client) => client.active === true)
  const nonActiveClients = clients.filter((client) => client.active === false)

  return (
    <main className="m-8">
      <div className="flex flex-row items-center justify-between gap-4">
        <div>
          <p className="text-main-500 text-sm">
            {activeClients.length} CLIENTS ACTIFS
          </p>
          <em className="text-gray-400 text-sm">
            {nonActiveClients.length} CLIENTS Archivés
          </em>
          <h1 className="text-4xl font-bold text-main-900 mt-4">Tes clients</h1>
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
        {activeClients.map((client) => (
          <ClientCard
            key={client.id}
            id={client.id}
            name={`${client.firstname} ${client.lastname}`}
            level={client.level}
            registrationDate={client.registrationDate}
            notes={client.notes}
            active={client.active}
          />
        ))}
      </div>

      <h2 className="text-xl font-bold text-main-900 mt-4">Archivés</h2>
      <div className="flex flex-row row-auto items-center justify-center mt-5 gap-4">
        {nonActiveClients.map((client) => (
          <ClientCard
            key={client.id}
            id={client.id}
            name={`${client.firstname} ${client.lastname}`}
            level={client.level}
            registrationDate={client.registrationDate}
            notes={client.notes}
            active={client.active}
          />
        ))}
      </div>
    </main>
  )
}

export default ClientList
