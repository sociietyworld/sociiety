export default function BetaDashboardOverview({ vaultSchedule, countdown, alerts }) {
  return (
    <div className="bg-black text-white px-6 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">🧪 SOCIIETY Beta Control Panel</h1>
{typeof window !== 'undefined' && localStorage.getItem('mirrorWelcomeShown') === 'true' && (
  <div className="bg-green-900 border border-green-500 text-green-300 p-4 rounded-lg mb-6">
    🧠 Mirror AI: Welcome to the vault, Founder. All systems are live.
  </div>
)}

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-yellow-500 p-4 rounded-xl text-center">
          <h2 className="text-lg text-yellow-300 font-semibold mb-1">⏱ Onboarding Countdown</h2>
          <p className="text-2xl font-bold text-white">{countdown}</p>
          <p className="text-xs text-zinc-400 mt-1">Until next vault rotation</p>
        </div>

        <div className="bg-zinc-900 border border-yellow-500 p-4 rounded-xl">
          <h2 className="text-lg text-yellow-300 font-semibold mb-3">📦 Upcoming Vault Drops</h2>
          <ul className="text-sm space-y-1">
            {vaultSchedule.map((drop, i) => (
              <li key={i} className="text-zinc-300">
                <strong>{drop.title}</strong> — {new Date(drop.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-zinc-900 border border-yellow-500 p-4 rounded-xl">
          <h2 className="text-lg text-yellow-300 font-semibold mb-3">🧠 Mirror AI Alerts</h2>
          <ul className="text-sm space-y-2">
            {alerts.map((note, i) => (
              <li key={i} className="text-zinc-400">🔔 {note}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
