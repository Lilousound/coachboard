import PageHeader from '../components/layout/page-header'
import Dashboard from './dashboard/page'
import NavBar from '../components/layout/navbar'

export default function Home() {
  return (
    <main className="flex flex-col col-auto min-h-screen bg-main-50/30">
      <NavBar />
      <Dashboard />
    </main>
  )
}
