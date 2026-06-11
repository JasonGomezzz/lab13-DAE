import { ArrowRight, Play, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import DragonBalls from "@/components/DragonBalls"
import { scrollToSection } from "@/lib/dragonball"

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.3),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.22),_transparent_28%),linear-gradient(180deg,_rgba(2,6,23,0.8),_rgba(2,6,23,1))]" />
      <div className="absolute inset-x-0 top-8 mx-auto h-96 max-w-6xl rounded-full bg-amber-400/10 blur-3xl" />

      <DragonBalls />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="rounded-full border border-amber-300/20 bg-amber-400/10 px-4 py-1.5 text-amber-100 shadow-[0_0_24px_rgba(245,158,11,0.12)]">
              Experiencia anime premium
            </Badge>
            <Badge variant="outline" className="rounded-full border-white/10 bg-white/5 px-4 py-1.5 text-slate-200">
              React 19 + Tailwind v4 + shadcn/ui
            </Badge>
          </div>

          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.55em] text-amber-200/85">Dragon Ball universe</p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              EL UNIVERSO DRAGON BALL
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Una landing premium con energía cinematográfica, brillo controlado y diseño de nivel portafolio.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              type="button"
              size="lg"
              className="rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 px-7 text-slate-950 shadow-[0_0_30px_rgba(251,191,36,0.35)] hover:brightness-110"
              onClick={() => scrollToSection("personajes")}
            >
              Explorar personajes
              <ArrowRight />
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 px-7 text-white hover:bg-white/10"
              onClick={() => scrollToSection("transformaciones")}
            >
              <Play />
              Ver transformaciones
            </Button>
          </div>

          <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              { value: "500+", label: "episodios" },
              { value: "100+", label: "personajes" },
              { value: "20+", label: "transformaciones" },
            ].map((metric) => (
              <Card key={metric.label} className="border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-400/10 text-amber-200">
                      <Zap className="size-5" />
                    </span>
                    <div>
                      <p className="text-2xl font-bold text-white">{metric.value}</p>
                      <p className="text-sm text-slate-300">{metric.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-10 top-16 h-40 w-40 rounded-full bg-orange-500/25 blur-3xl" />
          <div className="absolute -right-8 bottom-14 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />

          <Card className="relative overflow-hidden border-white/10 bg-white/5 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_35%)]" />
            <CardContent className="relative space-y-5 p-4 sm:p-6">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/50">
                <img
                  src="https://dragonball-api.com/transformaciones/goku_ultra.webp"
                  alt="Goku en Ultra Instinct"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Energy level</p>
                  <p className="mt-2 text-3xl font-black text-white">Over 9000</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Un hero panel grande, brillante y con presencia cinematográfica.</p>
                </div>
                <div className="rounded-3xl border border-amber-300/15 bg-gradient-to-br from-orange-500/20 via-amber-400/10 to-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-100">Live aura</p>
                  <p className="mt-2 text-2xl font-bold text-white">Modo batalla</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Glow effects, glassmorphism y microinteracciones suaves.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-4">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-200">
                  <Shield className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-slate-300">Diseño premium listo para producción</p>
                  <p className="text-sm font-medium text-white">Responsivo, accesible y visualmente intenso</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Hero