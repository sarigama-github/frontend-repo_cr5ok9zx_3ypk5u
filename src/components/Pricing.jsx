export default function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      features: ['Basic moderation', 'Utility commands', 'Music (standard quality)'],
      cta: 'Add to server'
    },
    {
      name: 'Pro',
      price: '$4.99',
      features: ['Advanced moderation', 'Reaction roles & levels', 'Music (HQ)'],
      highlighted: true,
      cta: 'Start free trial'
    },
    {
      name: 'Team',
      price: '$14.99',
      features: ['All Pro features', 'Dashboards & logs', 'Priority support'],
      cta: 'Contact sales'
    }
  ]

  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free. Upgrade anytime as your community grows.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl p-6 ring-1 ring-white/10 ${tier.highlighted ? 'bg-white/10' : 'bg-white/5'}`}>
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
              )}
              <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
              <p className="mt-2 text-3xl font-bold text-white">{tier.price}<span className="text-sm font-normal text-white/60">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {tier.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold ${tier.highlighted ? 'bg-white text-slate-900 hover:bg-white/90' : 'bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/20'}`}>{tier.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
