'use client'

import { useClientsStore } from '@/store/useClientsStore'
import ClientCard from './client-card'

function ClientList() {
  const clients = useClientsStore((state) => state.clients)
  const addClient = useClientsStore((state) => state.addClient)
  return (
    <main className="flex flex-col col-auto items-center justify-center mt-5">
      <p>Client List</p>
      {clients.map((client) => (
        <ClientCard
          key={client.id}
          name={`${client.firstname} ${client.lastname}`}
          phone={client.phone}
          email={client.email}
          level={client.level}
          registrationDate={client.registrationDate}
        />
      ))}

      <button
        onClick={() =>
          addClient({
            id: crypto.randomUUID(),
            lastname: 'Gea',
            firstname: 'Seb',
            email: 'seb@example.com',
            phone: '0600000000',
            level: 'intermediaire',
            registrationDate: new Date().toISOString(),
            notes: '',
            active: true,
          })
        }
      >
        Ajouter un client test
      </button>
    </main>
  )
}

export default ClientList
