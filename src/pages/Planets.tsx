import { usePlanets } from "@/hooks/usePlanets"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Planets() {
  const { planets, totalPages, currentPage, loading, error, setPage } =
    usePlanets()

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">

      {/* Header */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          🪐 Planetas
        </h2>
        <p className="mt-1 text-sm text-zinc-500">
          Los mundos que dan forma al universo Dragon Ball.
        </p>
      </section>

      {/* Error */}
      {error && (
        <p className="text-center text-red-400 mb-8">⚠️ {error}</p>
      )}

      {/* Skeleton */}
      {loading && (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-72 animate-pulse rounded-xl bg-zinc-800/60"
            />
          ))}
        </div>
      )}

      {/* Grid */}
      {!loading && !error && (
        <>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {planets.map((planet) => (
              <Card
                key={planet.id}
                className="border-zinc-800 bg-zinc-900 hover:border-[#c8972a]/40 transition-colors overflow-hidden"
              >
                {/* Imagen */}
                <div className="aspect-video overflow-hidden bg-zinc-800">
                  <img
                    src={planet.image}
                    alt={planet.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>

                <CardContent className="p-4">
                  {/* Nombre + estado */}
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-white truncate">
                      {planet.name}
                    </p>
                    <Badge
                      variant="outline"
                      className={
                        planet.isDestroyed
                          ? "border-red-500/40 text-red-400 text-xs"
                          : "border-emerald-500/40 text-emerald-400 text-xs"
                      }
                    >
                      {planet.isDestroyed ? "Destruido" : "Existente"}
                    </Badge>
                  </div>

                  {/* Descripción */}
                  <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">
                    {planet.description}
                  </p>
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