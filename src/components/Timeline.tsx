import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { timelineEntries } from "@/lib/dragonball"

function Timeline() {
  return (
    <section id="timeline" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <Badge className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-slate-200">Saga roadmap</Badge>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Una línea visual de la evolución de Dragon Ball</h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Un roadmap premium con estructura clara, lectura rápida y expansión progresiva del universo.
          </p>
        </div>

        <Card className="mt-12 border-white/10 bg-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.28)]">
          <CardContent className="p-2 sm:p-4">
            <div className="relative pl-1 sm:pl-3">
              <div className="absolute top-5 bottom-5 left-6 hidden w-px bg-gradient-to-b from-amber-400/70 via-white/10 to-transparent sm:block" />
              <Accordion>
                {timelineEntries.map((entry, index) => (
                  <AccordionItem key={entry.title} value={entry.title} className="border-white/10 px-2">
                    <AccordionTrigger className="relative py-5 pl-10 pr-3 text-left hover:no-underline sm:pl-14">
                      <span className="absolute left-3 top-6 flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-300 text-xs font-black text-slate-950 shadow-[0_0_25px_rgba(249,115,22,0.25)] sm:left-1">
                        {index + 1}
                      </span>
                      <div className="flex w-full flex-col gap-2 pr-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
                          <Badge variant="outline" className="rounded-full border-white/10 bg-slate-950/50 text-slate-200">
                            {entry.era}
                          </Badge>
                        </div>
                        <p className="max-w-4xl text-sm leading-6 text-slate-300">{entry.summary}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-10 sm:pl-14">
                      <Separator className="mb-5 bg-white/10" />
                      <p className="max-w-4xl text-sm leading-7 text-slate-200">{entry.highlight}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Timeline