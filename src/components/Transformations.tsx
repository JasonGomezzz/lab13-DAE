import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { transformations } from "@/lib/dragonball"

function Transformations() {
  const [firstTransformation] = transformations

  return (
    <section id="transformaciones" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <Badge className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-slate-200">Transformaciones</Badge>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Evoluciones que cambiaron la historia visual del anime</h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Tabs limpias, imágenes potentes y una lectura rápida del poder, la historia y las características de cada forma.
          </p>
        </div>

        <Tabs defaultValue={firstTransformation.value} className="mt-12 flex flex-col gap-6">
          <TabsList variant="line" className="w-full flex-wrap gap-2 rounded-none border-b border-white/10 bg-transparent p-0">
            {transformations.map((transformation) => (
              <TabsTrigger
                key={transformation.value}
                value={transformation.value}
                className="rounded-full px-4 py-3 text-sm text-slate-300 data-active:bg-white/10 data-active:text-white"
              >
                {transformation.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {transformations.map((transformation) => (
            <TabsContent key={transformation.value} value={transformation.value}>
              <Card className="overflow-hidden border-white/10 bg-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
                <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="relative overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_40%)]" />
                    <img
                      src={transformation.image}
                      alt={`${transformation.label} de Dragon Ball`}
                      className="h-full min-h-[300px] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <CardContent className="space-y-6 p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge className="rounded-full border border-amber-300/20 bg-amber-400/10 text-amber-100">
                        Poder {transformation.power}
                      </Badge>
                      <Badge variant="outline" className="rounded-full border-white/10 bg-slate-950/50 text-slate-200">
                        Forma icónica
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-3xl font-bold text-white">{transformation.label}</h3>
                      <p className="max-w-2xl text-base leading-7 text-slate-300">{transformation.description}</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {transformation.features.map((feature) => (
                        <div key={feature} className="rounded-2xl border border-white/10 bg-slate-950/65 p-4 text-sm leading-6 text-slate-200">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default Transformations