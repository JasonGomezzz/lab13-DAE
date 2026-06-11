import { NavLink } from "react-router-dom"
import { Badge } from "@/components/ui/badge"

const links = [
  { to: "/", label: "Inicio" },
  { to: "/characters", label: "Personajes" },
  { to: "/planets", label: "Planetas" },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#c8972a]/20 bg-[#0a0a0f]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-white">
            🐉 Dragon
          </span>
          <Badge
            variant="outline"
            className="border-[#c8972a]/40 text-[#e8b84b] text-xs"
          >
            Ball
          </Badge>
        </div>
        <ul className="flex gap-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium text-[#e8b84b]"
                    : "text-sm font-medium text-zinc-400 transition-colors hover:text-[#e8b84b]"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}