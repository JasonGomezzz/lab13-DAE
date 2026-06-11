import { ArrowUpRight, Globe, MessageCircle, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { navLinks, scrollToSection, socialLinks } from "@/lib/dragonball"

const socialIcons = {
  Instagram: Sparkles,
  YouTube: Globe,
  X: ArrowUpRight,
  Facebook: MessageCircle,
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-amber-200 shadow-[0_0_30px_rgba(251,191,36,0.16)]">
                <span className="text-lg font-black">DB</span>
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">Dragon Ball</p>
                <p className="text-base font-semibold text-white">Z Universe</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-300">
              Una landing premium inspirada en Dragon Ball con imágenes reales, motion sutil y una arquitectura limpia.
            </p>
            <Badge className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-slate-200">Hecho con React, TypeScript y shadcn/ui</Badge>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Links</p>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Button
                    key={link.id}
                    type="button"
                    variant="ghost"
                    className="w-fit justify-start px-0 text-slate-300 hover:bg-transparent hover:text-white"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Redes</p>
              <div className="flex gap-2">
                {socialLinks.map(({ label }) => {
                  const Icon = socialIcons[label as keyof typeof socialIcons]

                  return (
                    <Tooltip key={label}>
                      <TooltipTrigger>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
                          aria-label={label}
                        >
                          <Icon className="size-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>{label}</TooltipContent>
                    </Tooltip>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dragon Ball Z Universe. All rights reserved.</p>
          <p>Landing page premium preparada para npm run dev.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer