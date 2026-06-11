export type NavLink = {
  label: string
  id: string
}

export type Character = {
  name: string
  race: string
  power: string
  description: string
  aura: string
  image: string
}

export type Transformation = {
  value: string
  label: string
  power: string
  description: string
  features: string[]
  image: string
}

export type Saga = {
  value: string
  title: string
  summary: string
  characters: string[]
  event: string
}

export type Stat = {
  label: string
  value: string
  description: string
  accent: string
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

export function createArtwork({
  title,
  subtitle,
  accentA,
  accentB,
}: {
  title: string
  subtitle: string
  accentA: string
  accentB: string
}) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200" fill="none">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="900" y2="1200" gradientUnits="userSpaceOnUse">
          <stop stop-color="#050816" />
          <stop offset="0.45" stop-color="${accentA}" stop-opacity="0.92" />
          <stop offset="1" stop-color="${accentB}" stop-opacity="0.82" />
        </linearGradient>
        <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(620 320) rotate(110) scale(520 420)">
          <stop stop-color="#fff3c4" stop-opacity="0.9" />
          <stop offset="1" stop-color="#fff3c4" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="stroke" x1="0" y1="0" x2="900" y2="1200" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ffffff" stop-opacity="0.95" />
          <stop offset="1" stop-color="#ffffff" stop-opacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="900" height="1200" rx="72" fill="url(#bg)" />
      <circle cx="620" cy="320" r="250" fill="url(#glow)" />
      <circle cx="190" cy="960" r="180" fill="#ff9f1c" fill-opacity="0.24" />
      <circle cx="770" cy="980" r="120" fill="#ffe066" fill-opacity="0.18" />
      <path d="M90 310C190 210 304 168 452 168C614 168 732 228 824 330" stroke="url(#stroke)" stroke-opacity="0.18" stroke-width="8" stroke-linecap="round" />
      <path d="M120 902C250 776 388 706 548 706C672 706 766 744 846 824" stroke="url(#stroke)" stroke-opacity="0.14" stroke-width="8" stroke-linecap="round" />
      <g opacity="0.92">
        <text x="74" y="164" fill="white" font-family="Inter, Arial, sans-serif" font-size="34" letter-spacing="8" font-weight="700">DRAGON BALL</text>
        <text x="74" y="282" fill="white" font-family="Inter, Arial, sans-serif" font-size="76" font-weight="800">${escapeXml(title)}</text>
        <text x="74" y="346" fill="white" opacity="0.9" font-family="Inter, Arial, sans-serif" font-size="28">${escapeXml(subtitle)}</text>
      </g>
      <g>
        <rect x="74" y="948" width="220" height="70" rx="35" fill="white" fill-opacity="0.16" stroke="white" stroke-opacity="0.22" />
        <text x="118" y="992" fill="white" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="700">ENERGY MODE</text>
      </g>
      <circle cx="760" cy="140" r="72" fill="#ffd43b" fill-opacity="0.9" />
      <circle cx="760" cy="140" r="24" fill="#fff7cc" />
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export const navLinks: NavLink[] = [
  { label: "Inicio", id: "inicio" },
  { label: "Personajes", id: "personajes" },
  { label: "Transformaciones", id: "transformaciones" },
  { label: "Sagas", id: "sagas" },
  { label: "Contacto", id: "contacto" },
]

export const featuredCharacters: Character[] = [
  {
    name: "Goku",
    race: "Saiyajin",
    power: "9.9 / 10",
    description: "Instinto puro, energía imparable y un espíritu de combate que nunca se apaga.",
    aura: "Ultra Instinct",
    image: createArtwork({
      title: "Goku",
      subtitle: "El guerrero que rompe los límites",
      accentA: "#ff8a00",
      accentB: "#1d4ed8",
    }),
  },
  {
    name: "Vegeta",
    race: "Saiyajin",
    power: "9.8 / 10",
    description: "Orgullo, disciplina y una presión constante por superar cualquier techo.",
    aura: "Príncipe del combate",
    image: createArtwork({
      title: "Vegeta",
      subtitle: "Voluntad real de combate",
      accentA: "#1d4ed8",
      accentB: "#ffb703",
    }),
  },
  {
    name: "Gohan",
    race: "Saiyajin-Humano",
    power: "9.4 / 10",
    description: "Poder latente, enfoque táctico y una evolución marcada por cada batalla.",
    aura: "Beast Mode",
    image: createArtwork({
      title: "Gohan",
      subtitle: "Potencial que despierta cuando importa",
      accentA: "#0f766e",
      accentB: "#f97316",
    }),
  },
  {
    name: "Piccolo",
    race: "Namekiano",
    power: "8.9 / 10",
    description: "Estratega, mentor y muro defensivo con una presencia icónica.",
    aura: "Guardian Pulse",
    image: createArtwork({
      title: "Piccolo",
      subtitle: "La calma antes del impacto",
      accentA: "#0f766e",
      accentB: "#14532d",
    }),
  },
  {
    name: "Trunks",
    race: "Saiyajin-Humano",
    power: "9.1 / 10",
    description: "Velocidad, precisión y una energía futurista que siempre entra en escena.",
    aura: "Future Edge",
    image: createArtwork({
      title: "Trunks",
      subtitle: "La línea temporal se dobla con su llegada",
      accentA: "#7c3aed",
      accentB: "#2563eb",
    }),
  },
  {
    name: "Freezer",
    race: "Emperador galáctico",
    power: "9.7 / 10",
    description: "Elegancia letal, control absoluto y una amenaza que siempre regresa más fuerte.",
    aura: "Galactic Tyrant",
    image: createArtwork({
      title: "Freezer",
      subtitle: "Amenaza de escala universal",
      accentA: "#4c1d95",
      accentB: "#0f172a",
    }),
  },
]

export const transformations: Transformation[] = [
  {
    value: "super-saiyan",
    label: "Super Saiyan",
    power: "x50",
    description: "El despertar clásico que convirtió la energía dorada en una firma legendaria del anime.",
    features: ["Aumento explosivo de velocidad", "Aura dorada instantáneamente reconocible", "Base histórica de todas las evoluciones"],
    image: createArtwork({
      title: "Super Saiyan",
      subtitle: "El punto de inflexión de toda una saga",
      accentA: "#ea580c",
      accentB: "#facc15",
    }),
  },
  {
    value: "super-saiyan-2",
    label: "Super Saiyan 2",
    power: "x100",
    description: "Más tensión, más enfoque y un nivel de precisión que se siente más agresivo y eléctrico.",
    features: ["Descarga eléctrica visible", "Reacción más rápida", "Versión más afilada del poder Saiyajin"],
    image: createArtwork({
      title: "Super Saiyan 2",
      subtitle: "Control y electricidad en perfecta sincronía",
      accentA: "#1d4ed8",
      accentB: "#f59e0b",
    }),
  },
  {
    value: "super-saiyan-3",
    label: "Super Saiyan 3",
    power: "x400",
    description: "Una forma extrema, dramática y de desgaste enorme, pero visualmente inolvidable.",
    features: ["Cabello extendido y aura intensa", "Potencia masiva a costo de energía", "Presencia visual cinematográfica"],
    image: createArtwork({
      title: "Super Saiyan 3",
      subtitle: "Exceso de poder en cada frame",
      accentA: "#7c2d12",
      accentB: "#f97316",
    }),
  },
  {
    value: "super-saiyan-god",
    label: "Super Saiyan God",
    power: "Divino",
    description: "Ligereza, velocidad y una lectura de combate más sofisticada con energía de otro nivel.",
    features: ["Ki divino refinado", "Movimientos fluidos", "Estética roja y ceremonial"],
    image: createArtwork({
      title: "Super Saiyan God",
      subtitle: "Energía divina, impacto silencioso",
      accentA: "#b91c1c",
      accentB: "#fb7185",
    }),
  },
  {
    value: "ultra-instinct",
    label: "Ultra Instinct",
    power: "Autónomo",
    description: "La mente deja de interferir y el cuerpo responde con una precisión casi imposible de igualar.",
    features: ["Esquiva automática", "Minimalismo visual extremo", "Cima técnica y narrativa"],
    image: createArtwork({
      title: "Ultra Instinct",
      subtitle: "El cuerpo se mueve antes que la intención",
      accentA: "#0f172a",
      accentB: "#94a3b8",
    }),
  },
]

export const sagas: Saga[] = [
  {
    value: "saiyan",
    title: "Saga Saiyan",
    summary: "El inicio de una nueva era donde la escala del conflicto cambia por completo y se redefine el futuro de la Tierra.",
    characters: ["Goku", "Vegeta", "Piccolo", "Gohan"],
    event: "La batalla contra los Saiyajin marca el punto de no retorno para los Guerreros Z.",
  },
  {
    value: "freezer",
    title: "Saga Freezer",
    summary: "Namek se convierte en el escenario de una guerra de poder, supervivencia y transformaciones legendarias.",
    characters: ["Goku", "Vegeta", "Freezer", "Krillin"],
    event: "La primera transformación Super Saiyan redefine la historia del shonen.",
  },
  {
    value: "cell",
    title: "Saga Cell",
    summary: "Un arco de tensión creciente que mezcla evolución biológica, torneos y un clímax emocional enorme.",
    characters: ["Gohan", "Cell", "Trunks", "Androides"],
    event: "Gohan libera un poder decisivo que cambia el destino del planeta.",
  },
  {
    value: "majin-buu",
    title: "Saga Majin Buu",
    summary: "Caos, humor, destrucción y reinventos de poder en una de las etapas más impredecibles de toda la serie.",
    characters: ["Goku", "Vegeta", "Gohan", "Buu"],
    event: "La fusión, la desesperación y la energía acumulada llevan el arco a un final explosivo.",
  },
  {
    value: "super",
    title: "Dragon Ball Super",
    summary: "El universo se expande con dioses, torneos interuniversales y transformaciones cada vez más estilizadas.",
    characters: ["Goku", "Vegeta", "Beerus", "Jiren"],
    event: "El multiverso introduce una nueva escala de amenaza y espectáculo visual.",
  },
]

export const stats: Stat[] = [
  {
    label: "Episodios",
    value: "500+",
    description: "Una biblioteca enorme de batallas, viajes y evolución continua.",
    accent: "from-orange-500/30 to-amber-400/10",
  },
  {
    label: "Años de historia",
    value: "40+",
    description: "Una franquicia que marcó generaciones enteras con energía constante.",
    accent: "from-sky-500/30 to-blue-400/10",
  },
  {
    label: "Personajes",
    value: "100+",
    description: "Un universo vivo con héroes, villanos y aliados icónicos.",
    accent: "from-emerald-500/30 to-teal-400/10",
  },
  {
    label: "Transformaciones",
    value: "20+",
    description: "Un lenguaje visual que evolucionó junto con la propia saga.",
    accent: "from-yellow-500/30 to-orange-400/10",
  },
]

export function scrollToSection(id: string) {
  if (typeof document === "undefined") {
    return
  }

  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}