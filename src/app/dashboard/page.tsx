import UpcomingSessions from '@/features/dashboard/components/upcomming-sessions'
import RecentSessions from '@/features/dashboard/components/recent-sessions'
import StatsCard from '@/features/dashboard/components/stats-card'

function DashBoard() {
  return (
    <main className="flex flex-col col-auto min-h-screen items-center justify-center border-2 border-gray-300 rounded-lg p-8 m-8">
      <h1 className="text-4xl font-bold text-center pb-6">Bonjour John Doe</h1>
      <h2 className="text-4xl font-bold text-center pb-6">DASHBOARD</h2>

      <div className="flex flex-row gap-8 items-center justify-center">
        <StatsCard />
        <UpcomingSessions />
        <RecentSessions />
      </div>
    </main>
  )
}

export default DashBoard
