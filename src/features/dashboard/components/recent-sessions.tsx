function RecentSessions() {
  return (
    <main className="flex flex-col col-auto items-center justify-center text-white bg-main-500 rounded-3xl p-8 m-8 gap-4 mt-6 border-2 border-white/10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-[#1d33b3]/30 hover:scale-[1.01]">
      <h3 className="text-4xl font-bold text-center pb-6">Sessions récentes</h3>
      <p>Session 12-06-2026 - Nom du client</p>
      <p>Session 10-06-2026 - Nom du client</p>
      <p>Session 03-06-2026 - Nom du client</p>
    </main>
  )
}

export default RecentSessions
