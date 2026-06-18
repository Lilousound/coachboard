import Link from 'next/link'

function StatsCard() {
  return (
    <main className="flex flex-col col-auto items-center justify-center border-2 border-gray-300 rounded-lg p-8 m-8 gap-4">
      <h3 className="text-4xl font-bold text-center pb-6 ">Stats</h3>
      <Link href="/clients">
        <p className="cursor-pointer">Nombre de clients : 10</p>
      </Link>
      <Link href="/upcoming-sessions">
        <p className="cursor-pointer">Nombre de sessions à venir : 5</p>
      </Link>
      <Link href="/invoices">
        <p className="cursor-pointer">Factures à éditer : 2</p>
      </Link>
    </main>
  )
}

export default StatsCard
