import Link from 'next/link'

function StatsCard() {
  return (
    <div className="flex flex-col col-auto items-center justify-center text-white bg-sky-600 rounded-3xl p-8 m-8 gap-4 mt-6 border-2 border-white/10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-[#1d33b3]/30 hover:scale-[1.01]">
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
    </div>
  )
}

export default StatsCard
