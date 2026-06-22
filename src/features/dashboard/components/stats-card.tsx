import Link from 'next/link'
import Card from '@/components/ui/card'

function StatsCard() {
  return (
    <Card>
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
    </Card>
  )
}

export default StatsCard
