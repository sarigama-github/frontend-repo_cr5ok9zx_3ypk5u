import { ShieldCheck, Music, Activity, MessageSquare, Wand2, SlidersHorizontal } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Smart Moderation',
      desc: 'Auto-moderation, anti-spam, filters and automations to keep your server safe and friendly.'
    },
    {
      icon: MessageSquare,
      title: 'Engagement Tools',
      desc: 'Welcome cards, levels, reaction roles, reminders and giveaway utilities.'
    },
    {
      icon: Music,
      title: 'High Quality Music',
      desc: 'Stable, low-latency audio with playlists, filters and premium sources.'
    },
    {
      icon: Wand2,
      title: 'AI Utilities',
      desc: 'Ask questions, summarize threads, auto-tag channels and detect toxicity.'
    },
    {
      icon: Activity,
      title: 'Dashboards & Logs',
      desc: 'Clean logs, audit trails and a web dashboard for full control.'
    },
    {
      icon: SlidersHorizontal,
      title: 'Fully Customizable',
      desc: 'Prefix, permissions, roles and granular toggles per channel.'
    }
  ]

  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Everything you need</h2>
          <p className="mt-3 text-white/70">Designed for modern communities — fast, reliable and delightful to use.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/10 transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 ring-1 ring-inset ring-indigo-400/30">
                <Icon className="h-5 w-5 text-indigo-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
