import { useMemo, useState } from "react"
import { Eye } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { galleryItems } from "@/lib/dragonball"

function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeItem = activeIndex !== null ? galleryItems[activeIndex] : null
  const carouselItems = useMemo(() => galleryItems, [])

  return (
    <section id="galeria" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <Badge className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-slate-200">Galería épica</Badge>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Una mesa visual estilo portfolio premium</h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Grid tipo masonry con imágenes reales y un lightbox en diálogo para navegar las piezas más potentes de la saga.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-6 space-y-6 sm:columns-2 xl:columns-3">
          {galleryItems.map((item, index) => (
            <Tooltip key={item.title}>
              <TooltipTrigger>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group block w-full break-inside-avoid text-left"
                  aria-label={`Abrir galería de ${item.title}`}
                >
                  <Card className="overflow-hidden border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
                    <div className="relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-t ${item.accent} opacity-80`} />
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 flex items-end p-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
                          <Eye className="size-4" />
                          Abrir lightbox
                        </span>
                      </div>
                    </div>
                    <CardContent className="space-y-1 p-4">
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-slate-300">{item.subtitle}</p>
                    </CardContent>
                  </Card>
                </button>
              </TooltipTrigger>
              <TooltipContent>{item.title}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="max-w-6xl border-white/10 bg-slate-950/95 text-white backdrop-blur-2xl sm:p-6">
          {activeItem ? (
            <>
              <DialogHeader className="mb-4 pr-10">
                <DialogTitle className="text-2xl font-bold text-white">{activeItem.title}</DialogTitle>
                <DialogDescription className="text-slate-300">Lightbox premium con carrusel interno y navegación suave.</DialogDescription>
              </DialogHeader>

              <Carousel opts={{ loop: true, align: "start", startIndex: activeIndex ?? 0 }} className="w-full">
                <CarouselContent>
                  {carouselItems.map((slide) => (
                    <CarouselItem key={slide.title}>
                      <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                          <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6">
                          <div className="space-y-4">
                            <Badge className="rounded-full border border-white/10 bg-white/5 text-slate-200">{slide.subtitle}</Badge>
                            <div className="space-y-2">
                              <h4 className="text-2xl font-bold text-white">{slide.title}</h4>
                              <p className="text-sm leading-7 text-slate-300">
                                Una selección de imágenes reales de Dragon Ball para dar identidad, escala y presencia de portafolio.
                              </p>
                            </div>
                          </div>
                          <div className="mt-8 flex items-center justify-between gap-3">
                            <DialogClose render={<Button variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10" />}>Cerrar</DialogClose>
                            <div className="flex gap-2">
                              <CarouselPrevious variant="outline" size="icon-sm" className="relative left-0 top-0 translate-y-0 border-white/10 bg-white/5 text-white" />
                              <CarouselNext variant="outline" size="icon-sm" className="relative right-0 top-0 translate-y-0 border-white/10 bg-white/5 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Gallery