import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { sagas } from "@/lib/dbz"

function Sagas() {
  return (
    <section id="sagas" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <Badge className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-slate-200">Timeline de sagas</Badge>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">De los inicios terrestres al choque multiversal</h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Accordion limpio y jerárquico para recorrer los arcos más recordados con resumen, personajes y evento clave.
          </p>
        </div>

        <Card className="mt-12 border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
          <CardContent className="p-2 sm:p-4">
            <Accordion>
              {sagas.map((saga, index) => (
                <AccordionItem key={saga.value} value={saga.value} className="border-white/10 px-2 first:border-t-0">
                  <AccordionTrigger className="px-3 py-5 text-left hover:no-underline">
                    <div className="flex w-full flex-col gap-2 pr-4 text-left">
                      <div className="flex items-center gap-3">
                        <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-amber-400/10 text-sm font-semibold text-amber-100">
                          0{index + 1}
                        </span>
                        <h3 className="text-lg font-semibold text-white">{saga.title}</h3>
                      </div>
                      <p className="max-w-4xl text-sm leading-6 text-slate-300">{saga.summary}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-6">
                    <Separator className="mb-5 bg-white/10" />
                    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                      <div className="space-y-3">
                        <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Evento importante</p>
                        <p className="text-base leading-7 text-slate-200">{saga.event}</p>
                        <p className="text-sm leading-6 text-slate-400">
                          Bloque narrativo pensado para marcar ritmo, tensión y expansión del universo Dragon Ball.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Personajes principales</p>
                        <div className="flex flex-wrap gap-2">
                          {saga.characters.map((character) => (
                            <Badge key={character} variant="outline" className="rounded-full border-white/10 bg-slate-950/50 text-slate-200">
                              {character}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Sagas