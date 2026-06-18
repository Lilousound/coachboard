function ClientCard({
  name,
  phone,
  email,
}: {
  name: string
  phone: string
  email: string
}) {
  return (
    <main className="flex col-auto items-center justify-center mt-5 border-2 border-gray-300 rounded-lg p-8 m-8 gap-5">
      <p className="font-bold">{name}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </main>
  )
}

export default ClientCard
