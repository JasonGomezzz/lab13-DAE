import { useState, useEffect } from "react"
import type { Planet, PlanetsResponse } from "@/types/dragonball"

const BASE_URL = "https://dragonball-api.com/api"

interface UsePlanetsReturn {
  planets: Planet[]
  totalPages: number
  currentPage: number
  loading: boolean
  error: string | null
  setPage: (page: number) => void
}

export function usePlanets(): UsePlanetsReturn {
  const [planets, setPlanets] = useState<Planet[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchPlanets() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `${BASE_URL}/planets?limit=12&page=${currentPage}`
        )
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

        const data: PlanetsResponse = await res.json()

        if (!cancelled) {
          setPlanets(data.items)
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

    fetchPlanets()
    return () => { cancelled = true }
  }, [currentPage])

  return { planets, totalPages, currentPage, loading, error, setPage: setCurrentPage }
}