export default function FAQ() {
  const faqs = [
    {
      q: 'How do I add the bot to my server?',
      a: 'Click the invite button and authorize the permissions. The bot will guide you through a quick setup.'
    },
    {
      q: 'Is there a dashboard?',
      a: 'Yes! Manage settings, roles, and automations with a clean web dashboard.'
    },
    {
      q: 'Does the bot support multiple languages?',
      a: 'Absolutely. The interface and commands can be localized for your community.'
    },
    {
      q: 'What about privacy and security?',
      a: 'We only request necessary permissions and never store message content without consent.'
    }
  ]

  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Frequently asked questions</h2>
          <p className="mt-3 text-white/70">Quick answers to common questions.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="text-base font-semibold text-white">{item.q}</h3>
              <p className="mt-2 text-sm text-white/70">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
