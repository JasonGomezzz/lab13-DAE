import { Menu, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks, scrollToSection } from "@/lib/dragonball"

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection("inicio")}
          className="group flex items-center gap-3 text-left"
          aria-label="Ir al inicio"
        >
          <span className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_45px_rgba(249,115,22,0.22)] transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="size-5 text-amber-300" />
          </span>
          <span className="leading-tight">
            <span className="block text-xs uppercase tracking-[0.35em] text-amber-200/80">Dragon Ball</span>
            <span className="block text-base font-semibold text-white">Universe Landing</span>
          </span>
        </button>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              type="button"
              variant="ghost"
              className="rounded-full text-sm text-slate-200 hover:bg-white/10 hover:text-white"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            className="hidden rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 text-slate-950 shadow-[0_0_30px_rgba(251,191,36,0.32)] hover:brightness-110 md:inline-flex"
            onClick={() => scrollToSection("personajes")}
          >
            Comenzar aventura
          </Button>

          <Sheet>
            <SheetTrigger>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="rounded-full border border-white/10 bg-white/5 text-white md:hidden"
                aria-label="Abrir menú"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-white/10 bg-slate-950 text-white">
              <SheetHeader className="border-b border-white/10 px-6 py-6">
                <SheetTitle className="text-white">Dragon Ball Z Universe</SheetTitle>
                <SheetDescription className="text-slate-300">Navegación rápida por la landing.</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-2 px-4 pt-2">
                {navLinks.map((link) => (
                  <Button
                    key={link.id}
                    type="button"
                    variant="ghost"
                    className="justify-start rounded-2xl px-4 py-6 text-left text-base text-slate-100 hover:bg-white/10"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
              <div className="mt-auto px-4 pb-6">
                <Button
                  type="button"
                  className="w-full rounded-2xl bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 text-slate-950 hover:brightness-110"
                  onClick={() => scrollToSection("contacto")}
                >
                  Comenzar aventura
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar