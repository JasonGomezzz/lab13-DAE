import { useCharacters } from "@/hooks/useCharacters"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const raceColor: Record<string, string> = {
  Saiyan: "border-[#c8972a]/40 text-[#e8b84b]",
  Human: "border-blue-500/40 text-blue-400",
  Namekian: "border-emerald-500/40 text-emerald-400",
  Android: "border-cyan-500/40 text-cyan-400",
  Frieza: "border-purple-500/40 text-purple-400",
  Majin: "border-pink-500/40 text-pink-400",
  God: "border-red-500/40 text-red-400",
}

function getRaceColor(race: string): string {
  for (const key of Object.keys(raceColor)) {
    if (race.toLowerCase().includes(key.toLowerCase())) return raceColor[key]
  }
  return "border-zinc-700 text-zinc-400"
}

export default function Characters() {
  const { characters, totalPages, currentPage, loading, error, setPage } =
    useCharacters()
  const navigate = useNavigate()

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">

      {/* Header */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          ⚔️ Personajes
        </h2>
        <p className="mt-1 text-sm text-zinc-500">
          Explora los guerreros del universo Dragon Ball.
        </p>
      </section>

      {/* Error */}
      {error && (
        <p className="text-center text-red-400 mb-8">⚠️ {error}</p>
      )}

      {/* Skeleton */}
      {loading && (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-64 animate-pulse rounded-xl bg-zinc-800/60"
            />
          ))}
        </div>
      )}

      {/* Grid */}
      {!loading && !error && (
        <>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {characters.map((char) => (
              <Card
                key={char.id}
                onClick={() => navigate(`/characters/${char.id}`)}
                className="border-zinc-800 bg-zinc-900 cursor-pointer hover:border-[#c8972a]/40 transition-colors overflow-hidden"
              >
                <div className="aspect-square overflow-hidden bg-zinc-800">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover object-top transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-3">
                  <p className="text-sm font-semibold text-white truncate mb-1">
                    {char.name}
                  </p>
                  <div className="flex items-center justify-between gap-1">
                    <Badge
                      variant="outline"
                      className={`text-xs ${getRaceColor(char.race)}`}
                    >
                      {char.race}
                    </Badge>
                    <span className="text-xs text-zinc-500 truncate">
                      {char.affiliation}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Paginación */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setPage(currentPage - 1)}
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 cursor-pointer disabled:opacity-30"
            >
              ← Anterior
            </Button>
            <span className="text-sm text-zinc-400">
              {currentPage} / {totalPages}
            </span>
            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => setPage(currentPage + 1)}
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 cursor-pointer disabled:opacity-30"
            >
              Siguiente →
            </Button>
          </div>
        </>
      )}
    </main>
  )
}