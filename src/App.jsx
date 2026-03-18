import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'

// ── EDIT THESE ──────────────────────────────────────────────
const SUBTITLE = 'The adventure of Bebe and Bebecin'
const IMAGE_URL = '/flipdown-dc/B2-29.png'
const IMAGE_ALT = 'Dennis and Cindy'
const COUNTDOWN_DATE = new Date('2026-07-18T00:00:00').getTime()
// ────────────────────────────────────────────────────────────

export default function App() {
  return (
    <main className="page">
      <div className="layout">

        {/* LEFT — Image Card */}
        <div className="image-card">
          <img src={IMAGE_URL} alt={IMAGE_ALT} />
        </div>

        {/* RIGHT — Subtitle, Title, Countdown */}
        <div className="right-panel">
          <p className="subtitle">{SUBTITLE}</p>
          <h1 className="title">Dennis &amp; Cindy</h1>
          <div className="countdown-section">
            <FlipClockCountdown
              to={COUNTDOWN_DATE}
              labels={['Days', 'Hours', 'Minutes', 'Seconds']}
              labelStyle={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: '#888' }}
              digitBlockStyle={{ width: 50, height: 68, fontSize: '2.4rem', background: '#1a1a1a' }}
              separatorStyle={{ color: '#1a1a1a', size: '6px' }}
              duration={0.5}
            />
          </div>
        </div>

      </div>
    </main>
  )
}