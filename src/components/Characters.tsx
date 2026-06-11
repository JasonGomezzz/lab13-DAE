import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { featuredCharacters } from "@/lib/dragonball"

function Characters() {
  return (
    <section id="personajes" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <Badge className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-slate-200">Personajes destacados</Badge>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Iconos que sostienen la energía de la franquicia</h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Cards premium con imágenes reales, jerarquía clara y un hover que eleva el conjunto sin romper la composición.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredCharacters.map((character) => (
            <Card
              key={character.name}
              className="group overflow-hidden border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-amber-300/30 hover:bg-white/10 hover:shadow-[0_35px_90px_rgba(251,146,60,0.14)]"
            >
              <div className="overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                <img
                  src={character.image}
                  alt={`${character.name} en ${character.transformation}`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardContent className="space-y-5 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Avatar size="lg" className="ring-1 ring-white/10 shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                      <AvatarImage src={character.image} alt={character.name} />
                      <AvatarFallback>{character.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{character.name}</h3>
                      <p className="text-sm text-slate-300">{character.race}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="rounded-full border-amber-300/20 bg-amber-400/10 text-amber-100">
                    {character.power}
                  </Badge>
                </div>

                <p className="text-sm leading-6 text-slate-300">{character.description}</p>

                <div className="flex flex-wrap gap-2">
                  <Badge className="rounded-full bg-white/10 text-white hover:bg-white/10">{character.aura}</Badge>
                  <Badge variant="outline" className="rounded-full border-white/10 bg-slate-950/50 text-slate-200">
                    Power level visual
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Characters