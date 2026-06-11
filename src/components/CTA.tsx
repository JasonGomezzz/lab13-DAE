import { ArrowRight, Sparkles, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { scrollToSection } from "@/lib/dragonball"

const featureCards = [
  {
    icon: Sparkles,
    title: "UI premium",
    description: "Glow sutil y profundidad visual",
  },
  {
    icon: Zap,
    title: "Motion suave",
    description: "Animación controlada y microinteracciones",
  },
]

function CTA() {
  return (
    <section id="contacto" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="relative overflow-hidden border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.22),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_28%),linear-gradient(135deg,rgba(2,6,23,1),rgba(15,23,42,1))] shadow-[0_45px_130px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_42%)]" />
          <CardContent className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.08fr_0.92fr] lg:p-12">
            <div className="space-y-6">
              <Badge className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-slate-200">Final CTA</Badge>
              <h2 className="max-w-2xl text-3xl font-black tracking-tight text-white sm:text-5xl">
                ¿Estás listo para convertirte en un Super Saiyan?
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Una experiencia visual con fondo energético, jerarquía clara y un cierre a la altura del resto de la landing.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  type="button"
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 px-7 text-slate-950 hover:brightness-110"
                  onClick={() => scrollToSection("inicio")}
                >
                  Comenzar aventura
                  <ArrowRight />
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/15 bg-white/5 px-7 text-white hover:bg-white/10"
                  onClick={() => scrollToSection("sagas")}
                >
                  Ver sagas
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:self-end">
              {featureCards.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-200">
                    <Icon className="size-5" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTA