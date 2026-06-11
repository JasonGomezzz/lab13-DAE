import { useState, useEffect } from "react"
import type { Character, CharactersResponse } from "@/types/dragonball"

const BASE_URL = "https://dragonball-api.com/api"

interface UseCharactersReturn {
  characters: Character[]
  totalPages: number
  currentPage: number
  loading: boolean
  error: string | null
  setPage: (page: number) => void
}

export function useCharacters(): UseCharactersReturn {
  const [characters, setCharacters] = useState<Character[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchCharacters() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `${BASE_URL}/characters?limit=12&page=${currentPage}`
        )
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

        const data: CharactersResponse = await res.json()

        if (!cancelled) {
          setCharacters(data.items)
          setTotalPages(data.meta.totalPages)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Error desconocido")
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchCharacters()
    return () => { cancelled = true }
  }, [currentPage])

  return { characters, totalPages, currentPage, loading, error, setPage: setCurrentPage }
}