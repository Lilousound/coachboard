function ClientCard({
  name,
  phone,
  email,
  level,
  registrationDate,
}: {
  name: string
  phone: string
  email: string
  level: string
  registrationDate: string
}) {
  return (
    <main className="flex col-auto items-center justify-center mt-5 border-2 border-gray-300 rounded-lg p-8 m-8 gap-5">
      <p className="font-bold">{name}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{level}</p>
      <p>{registrationDate}</p>
    </main>
  )
}

export default ClientCard
