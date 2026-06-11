export interface Transformation {
  id: number
  name: string
  image: string
  ki: string
}

export interface Character {
  id: number
  name: string
  ki: string
  maxKi: string
  race: string
  gender: string
  description: string
  image: string
  affiliation: string
  transformations: Transformation[]
}

export interface Planet {
  id: number
  name: string
  isDestroyed: boolean
  description: string
  image: string
}

export interface PaginationMeta {
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}

export interface CharactersResponse {
  items: Character[]
  meta: PaginationMeta
}

export interface PlanetsResponse {
  items: Planet[]
  meta: PaginationMeta
}