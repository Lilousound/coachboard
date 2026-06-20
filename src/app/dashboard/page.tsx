import UpcomingSessions from '@/features/dashboard/components/upcoming-sessions'
import RecentSessions from '@/features/dashboard/components/recent-sessions'
import StatsCard from '@/features/dashboard/components/stats-card'
import Card from '@/components/ui/card'

function Dashboard() {
  return (
    <main className="flex flex-col col-auto border-2 border-gray-300 rounded-lg p-8 m-8 text-gray-700">
      <h1 className="text-4xl font-bold pb-6">Bonjour John Doe</h1>
      <h2 className="text-4xl font-bold text-center pb-6">DASHBOARD</h2>

      <div className="flex flex-row gap-8 items-center justify-center">
        <StatsCard />
        <UpcomingSessions />
        {/* <RecentSessions /> */}
        <Card>
          <h3 className="text-4xl font-bold text-center pb-6">
            Sessions récentes
          </h3>
          <p>Session 12-06-2026 - Nom du client</p>
          <p>Session 10-06-2026 - Nom du client</p>
          <p>Session 03-06-2026 - Nom du client</p>
        </Card>
      </div>
    </main>
  )
}

export default Dashboard
