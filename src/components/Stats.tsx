import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock3, Sparkles, Users, Zap } from "lucide-react"
import { stats } from "@/lib/dragonball"

const icons = {
  spark: Sparkles,
  users: Users,
  zap: Zap,
  clock: Clock3,
}

function Stats() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <Badge className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-slate-200">Estadísticas</Badge>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Magnitud real de una franquicia histórica</h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Cuatro métricas visuales en cards limpias, preparadas para impactar sin perder claridad ni jerarquía.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = icons[stat.icon]

            return (
              <Card
                key={stat.label}
                className="overflow-hidden border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-amber-200">
                      <Icon className="size-5" />
                    </span>
                    <div className="h-2 w-24 rounded-full bg-gradient-to-r from-orange-500/60 via-amber-300/40 to-transparent" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-black tracking-tight text-white">{stat.value}</p>
                    <p className="text-lg font-semibold text-amber-100">{stat.label}</p>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats