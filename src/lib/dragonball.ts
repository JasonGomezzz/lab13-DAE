export type NavLink = {
  label: string
  id: string
}

export type CharacterCard = {
  name: string
  transformation: string
  race: string
  power: string
  description: string
  image: string
  badge: string
  aura: string
}

export type TransformationTab = {
  value: string
  label: string
  history: string
  description: string
  power: string
  features: string[]
  image: string
}

export type TimelineEntry = {
  title: string
  era: string
  summary: string
  highlight: string
}

export type GalleryItem = {
  title: string
  subtitle: string
  image: string
  accent: string
}

export type StatCard = {
  label: string
  value: string
  description: string
  icon: "spark" | "users" | "zap" | "clock"
}

export type DragonBallOrb = {
  number: number
  wish: string
}

const API = "https://dragonball-api.com"

export function asset(path: string) {
  return `${API}${path}`
}

export const navLinks: NavLink[] = [
  { label: "Inicio", id: "inicio" },
  { label: "Personajes", id: "personajes" },
  { label: "Transformaciones", id: "transformaciones" },
  { label: "Saga Roadmap", id: "timeline" },
  { label: "Galería", id: "galeria" },
  { label: "Estadísticas", id: "estadisticas" },
  { label: "Contacto", id: "contacto" },
]

export const dragonBalls: DragonBallOrb[] = [
  { number: 1, wish: "Heroísmo" },
  { number: 2, wish: "Velocidad" },
  { number: 3, wish: "Poder" },
  { number: 4, wish: "Energía" },
  { number: 5, wish: "Legado" },
  { number: 6, wish: "Transformación" },
  { number: 7, wish: "Destino" },
]

export const featuredCharacters: CharacterCard[] = [
  {
    name: "Goku",
    transformation: "Ultra Instinct",
    race: "Saiyan",
    power: "90 Septillion",
    description: "Instinto, velocidad y una lectura de combate que convierte cada movimiento en pura precisión.",
    image: asset("/transformaciones/goku_ultra.webp"),
    badge: "Saiyan legendario",
    aura: "Ultra Instinct",
  },
  {
    name: "Vegeta",
    transformation: "Ultra Ego",
    race: "Saiyan",
    power: "19.84 Septillion",
    description: "Orgullo absoluto, destrucción controlada y presión visual extrema en cada escena.",
    image: asset("/transformaciones/vegeta%20mega%20instinto.webp"),
    badge: "Pride of the Prince",
    aura: "Destruction Drive",
  },
  {
    name: "Gohan",
    transformation: "Beast",
    race: "Saiyan-Human",
    power: "25.6 Septillion",
    description: "Potencial liberado con una presencia monstruosa y un aura que domina la pantalla.",
    image: asset("/transformaciones/beast_gohan___dragon_ball_super_super_hero_by_rmrlr2020_dfbqvta-pre.webp"),
    badge: "Bestia despierta",
    aura: "Beast Mode",
  },
  {
    name: "Trunks",
    transformation: "Future Blade",
    race: "Saiyan-Human",
    power: "17.5 Quintillion",
    description: "Línea temporal, filo futurista y una composición que siempre llega con impacto.",
    image: asset("/characters/Trunks_Buu_Artwork.webp"),
    badge: "Futuro activo",
    aura: "Future Edge",
  },
  {
    name: "Piccolo",
    transformation: "Orange",
    race: "Namekian",
    power: "41.25 Quintillion",
    description: "Presencia táctica, madurez de guerrero y un diseño que transmite protección total.",
    image: asset("/transformaciones/picolo%20orange.webp"),
    badge: "Guardián Namekiano",
    aura: "Guardian Pulse",
  },
  {
    name: "Freezer",
    transformation: "Black era",
    race: "Frieza Race",
    power: "100 Quintillion",
    description: "Elegancia cruel, escala galáctica y una lectura oscura del dominio absoluto.",
    image: asset("/transformaciones/freezer_gold.webp"),
    badge: "Emperador cósmico",
    aura: "Black Frieza",
  },
]

export const transformations: TransformationTab[] = [
  {
    value: "ssj",
    label: "SSJ",
    history: "La forma que redefinió la identidad visual de Dragon Ball y convirtió el oro en una firma universal.",
    description: "La explosión que marcó la primera gran metamorfosis del héroe Saiyan.",
    power: "x50",
    features: ["Aumento explosivo", "Aura dorada", "Icono eterno"],
    image: asset("/transformaciones/goku_ssj.webp"),
  },
  {
    value: "ssj2",
    label: "SSJ2",
    history: "Más tensión, electricidad y una sensación de presión que hizo escalar la serie a otra dimensión.",
    description: "La versión más afilada y eléctrica del poder clásico.",
    power: "x100",
    features: ["Descargas eléctricas", "Combate más agresivo", "Precisión extrema"],
    image: asset("/transformaciones/goku_ssj2.webp"),
  },
  {
    value: "ssj3",
    label: "SSJ3",
    history: "La forma más dramática, salvaje y desgastante de la era clásica del anime.",
    description: "Una forma de presencia enorme y desgaste brutal.",
    power: "x400",
    features: ["Cabello extendido", "Presión visual", "Consumo brutal de ki"],
    image: asset("/transformaciones/goku_ssj3.webp"),
  },
  {
    value: "ssj-god",
    label: "SSJ God",
    history: "Ki divino, fluidez y una lectura más limpia del combate, con energía de otro nivel.",
    description: "El salto a una energía más ligera, ceremonial y divina.",
    power: "Divino",
    features: ["Ki refinado", "Movimiento ligero", "Presencia ceremonial"],
    image: asset("/characters/goku_normal.webp"),
  },
  {
    value: "ssj-blue",
    label: "SSJ Blue",
    history: "La fusión entre disciplina divina y poder Saiyajin en una silueta fría y precisa.",
    description: "Energía azul controlada con una lectura limpia y muy moderna.",
    power: "9 Quintillion",
    features: ["Control de ki", "Aura azul", "Sincronía total"],
    image: asset("/transformaciones/goku_ssjb.webp"),
  },
  {
    value: "ultra-instinct",
    label: "Ultra Instinct",
    history: "El cuerpo actúa antes que la intención, alcanzando un flujo casi imposible de tocar.",
    description: "La cima del instinto y la evasión perfecta.",
    power: "90 Septillion",
    features: ["Esquiva automática", "Neutralidad mental", "Movimiento perfecto"],
    image: asset("/transformaciones/goku_ultra.webp"),
  },
  {
    value: "ultra-ego",
    label: "Ultra Ego",
    history: "Una forma construida sobre el orgullo, la destrucción y la resistencia absoluta al daño.",
    description: "Poder destructivo alimentado por la batalla misma.",
    power: "19.84 Septillion",
    features: ["Más poder al recibir daño", "Aura destructiva", "Actitud dominante"],
    image: asset("/transformaciones/vegeta%20mega%20instinto.webp"),
  },
  {
    value: "beast",
    label: "Beast",
    history: "El despertar más salvaje de Gohan: una furia elegante, violenta y descomunal.",
    description: "Instinto salvaje y poder de impacto inmediato.",
    power: "25.6 Septillion",
    features: ["Potencial liberado", "Aura plateada", "Presencia de depredador"],
    image: asset("/transformaciones/beast_gohan___dragon_ball_super_super_hero_by_rmrlr2020_dfbqvta-pre.webp"),
  },
]

export const timelineEntries: TimelineEntry[] = [
  {
    title: "Saga Saiyan",
    era: "Inicio de la leyenda",
    summary: "La escala de la serie explota y se establece el lenguaje visual de amenaza total.",
    highlight: "Goku, Vegeta y Piccolo establecen la primera gran frontera de poder.",
  },
  {
    title: "Saga Freezer",
    era: "Combate cósmico",
    summary: "Namek eleva la dirección de arte con tensión, sacrificio y el primer Super Saiyan.",
    highlight: "El universo entiende por primera vez lo que significa el poder Saiyajin.",
  },
  {
    title: "Saga Cell",
    era: "Tensión y precisión",
    summary: "El diseño del conflicto se vuelve más técnico y emocional, con una de las cimas de la franquicia.",
    highlight: "Gohan rompe el techo narrativo y visual del arco.",
  },
  {
    title: "Saga Majin Buu",
    era: "Caos y reinvención",
    summary: "Una fase impredecible que mezcla humor, horror y recursos de poder muy cinematográficos.",
    highlight: "La fusión y la desesperación marcan el ritmo del clímax.",
  },
  {
    title: "Dragon Ball Super",
    era: "Multiverso",
    summary: "El tono se vuelve divino, técnico y más estilizado con torneos y formas nuevas.",
    highlight: "Ultra Instinct y Ultra Ego reescriben la conversación del fandom.",
  },
  {
    title: "Daima",
    era: "Nueva era",
    summary: "La franquicia vuelve a reinventar su imaginario con una lectura más fantástica y fresca.",
    highlight: "La identidad de Dragon Ball se mantiene viva y flexible.",
  },
]

export const galleryItems: GalleryItem[] = [
  { title: "Goku Ultra Instinct", subtitle: "Calma absoluta en movimiento", image: asset("/transformaciones/goku_ultra.webp"), accent: "from-amber-400/30 to-blue-500/10" },
  { title: "Vegeta Ultra Ego", subtitle: "Orgullo y destrucción", image: asset("/transformaciones/vegeta%20mega%20instinto.webp"), accent: "from-indigo-500/30 to-orange-500/10" },
  { title: "Gohan Beast", subtitle: "Furia elegante", image: asset("/transformaciones/beast_gohan___dragon_ball_super_super_hero_by_rmrlr2020_dfbqvta-pre.webp"), accent: "from-emerald-400/30 to-amber-500/10" },
  { title: "Trunks", subtitle: "Filo del futuro", image: asset("/characters/Trunks_Buu_Artwork.webp"), accent: "from-violet-500/30 to-sky-500/10" },
  { title: "Piccolo Orange", subtitle: "Protección táctica", image: asset("/transformaciones/picolo%20orange.webp"), accent: "from-emerald-500/30 to-orange-500/10" },
  { title: "Freezer Black", subtitle: "Dominio galáctico", image: asset("/transformaciones/freezer_gold.webp"), accent: "from-slate-400/30 to-violet-500/10" },
  { title: "Goku SSJ Blue", subtitle: "Disciplina divina", image: asset("/transformaciones/goku_ssjb.webp"), accent: "from-sky-500/30 to-cyan-400/10" },
  { title: "Vegetto SSJB", subtitle: "Fusión perfecta", image: asset("/transformaciones/VEGITO%20SSJB.webp"), accent: "from-fuchsia-500/30 to-indigo-500/10" },
]

export const stats: StatCard[] = [
  { label: "Episodios", value: "500+", description: "Un legado enorme de historia y combate", icon: "spark" },
  { label: "Personajes", value: "100+", description: "Un universo vivo y reconocible", icon: "users" },
  { label: "Transformaciones", value: "20+", description: "Evoluciones que se sienten icónicas", icon: "zap" },
  { label: "Años", value: "40+", description: "Una franquicia que sigue creciendo", icon: "clock" },
]

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "X", href: "https://x.com" },
  { label: "Facebook", href: "https://facebook.com" },
]

export function scrollToSection(id: string) {
  if (typeof document === "undefined") {
    return
  }

  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}
