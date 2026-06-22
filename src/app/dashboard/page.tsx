import UpcomingSessions from '@/features/dashboard/components/upcoming-sessions'
import RecentSessions from '@/features/dashboard/components/recent-sessions'
import StatsCard from '@/features/dashboard/components/stats-card'

function Dashboard() {
  return (
    <main className="flex flex-col col-auto p-8 m-8 text-gray-700">
      <h1 className="text-4xl font-bold pb-6">Bonjour John Doe</h1>
      <h2 className="text-4xl font-bold text-center pb-6">DASHBOARD</h2>

      <div className="flex flex-row gap-8 items-center justify-center">
        <StatsCard />
        <UpcomingSessions />
        <RecentSessions />
      </div>
    </main>
  )
}

export default Dashboard
