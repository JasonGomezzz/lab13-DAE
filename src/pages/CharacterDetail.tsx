import { useParams, useNavigate } from "react-router-dom"
import { useCharacterDetail } from "@/hooks/useCharacterDetail"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function CharacterDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { character, loading, error } = useCharacterDetail(id ?? "")

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">

      {/* Volver */}
      <Button
        variant="outline"
        onClick={() => navigate("/characters")}
        className="mb-8 border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800 cursor-pointer"
      >
        ← Volver
      </Button>

      {/* Error */}
      {error && (
        <p className="text-center text-red-400">⚠️ {error}</p>
      )}

      {/* Skeleton */}
      {loading && (
        <div className="flex gap-8">
          <div className="w-64 h-80 animate-pulse rounded-xl bg-zinc-800/60 shrink-0" />
          <div className="flex-1 flex flex-col gap-4">
            <div className="h-8 w-48 animate-pulse rounded bg-zinc-800/60" />
            <div className="h-4 w-32 animate-pulse rounded bg-zinc-800/60" />
            <div className="h-24 animate-pulse rounded bg-zinc-800/60" />
          </div>
        </div>
      )}

      {/* Detalle */}
      {!loading && !error && character && (
        <>
          <div className="flex flex-col sm:flex-row gap-8 mb-10">

            {/* Imagen */}
            <div className="w-full sm:w-64 shrink-0">
              <div className="rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-3">
                {character.name}
              </h1>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="border-[#c8972a]/40 text-[#e8b84b]">
                  {character.race}
                </Badge>
                <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                  {character.gender}
                </Badge>
                <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                  {character.affiliation}
                </Badge>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {character.description}
              </p>

              <Separator className="bg-zinc-800 mb-6" />

              {/* Stats ki */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    Ki base
                  </p>
                  <p className="text-lg font-bold text-[#e8b84b]">
                    {character.ki}
                  </p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    Ki máximo
                  </p>
                  <p className="text-lg font-bold text-[#e8b84b]">
                    {character.maxKi}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Transformaciones */}
          {character.transformations.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-white mb-4">
                ⚡ Transformaciones
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {character.transformations.map((t) => (
                  <div
                    key={t.id}
                    className="bg-zinc-900 border border-zinc-800 hover:border-[#c8972a]/40 transition-colors rounded-xl overflow-hidden"
                  >
                    <div className="aspect-square bg-zinc-800 overflow-hidden">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-white truncate">
                        {t.name}
                      </p>
                      <p className="text-xs text-[#e8b84b] mt-0.5">
                        Ki: {t.ki}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </main>
  )
}