import { useState, useEffect } from "react"
import type { Character } from "@/types/dragonball"

const BASE_URL = "https://dragonball-api.com/api"

interface UseCharacterDetailReturn {
  character: Character | null
  loading: boolean
  error: string | null
}

export function useCharacterDetail(id: string): UseCharacterDetailReturn {
  const [character, setCharacter] = useState<Character | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchCharacter() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(`${BASE_URL}/characters/${id}`)
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

        const data: Character = await res.json()

        if (!cancelled) setCharacter(data)
      } catch (err) {
        if (!cancelled)
          setError(err instanceof Error ? err.message : "Error desconocido")
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchCharacter()
    return () => { cancelled = true }
  }, [id])

  return { character, loading, error }
}