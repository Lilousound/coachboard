import ClientCard from './client-card'

function ClientList() {
  const clients = [
    {
      id: 1,
      FirstName: 'Seb',
      LastName: 'Gea',
      phone: '1234567890',
      email: 'seb.gea@example.com',
    },
    {
      id: 2,
      FirstName: 'Jane',
      LastName: 'Smith',
      phone: '0987654321',
      email: 'jane.smith@example.com',
    },
    {
      id: 3,
      FirstName: 'Bob',
      LastName: 'Johnson',
      phone: '1122334455',
      email: 'bob.johnson@example.com',
    },
  ]

  return (
    <main className="flex flex-col col-auto items-center justify-center mt-5">
      <p>Client List</p>
      {clients.map((client) => (
        <ClientCard
          key={client.id}
          name={`${client.FirstName} ${client.LastName}`}
          phone={client.phone}
          email={client.email}
        />
      ))}
    </main>
  )
}

export default ClientList
