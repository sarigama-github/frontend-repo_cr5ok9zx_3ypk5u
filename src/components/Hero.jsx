import { motion } from 'framer-motion'
import { Check, Sparkles, Shield, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -left-40 top-40 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:pt-24 lg:pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Supercharge your Discord with an AI‑powered bot
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg text-white/70 max-w-xl"
          >
            Smart moderation, instant utilities, music, levels and customizable commands — all in one elegant bot.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white/90">
              Invite the bot
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/10 ring-1 ring-inset ring-white/20 text-white px-5 py-3 text-sm font-semibold hover:bg-white/20">
              Explore features
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 grid grid-cols-2 gap-4 max-w-md text-white/80"
          >
            {[
              { icon: Shield, text: 'Auto‑moderation' },
              { icon: Zap, text: 'Blazing fast' },
              { icon: Sparkles, text: 'AI utilities' },
              { icon: Check, text: '1‑click setup' },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-indigo-300" />
                <span className="text-sm">{text}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative mx-auto w-full max-w-lg">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-4 ring-1 ring-white/10 shadow-2xl">
              <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.25),rgba(217,70,239,0.25)_40%,transparent_60%)]" />
            </div>
            <div className="absolute -bottom-6 -left-6 right-6 mx-auto max-w-lg rounded-xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/5">
              <p className="text-sm text-white/80">
                “Setup took 2 minutes. Moderation and welcome flows just work — our community loves it.”
              </p>
              <p className="mt-2 text-xs text-white/50">— Server admin at PixelCraft</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
