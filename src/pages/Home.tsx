import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">

      {/* Orbs decorativos */}
      <div className="absolute top-[-80px] right-[-60px] w-[300px] h-[300px] rounded-full bg-[#c8972a] opacity-[0.07] pointer-events-none" />
      <div className="absolute bottom-[-40px] left-[-30px] w-[180px] h-[180px] rounded-full bg-[#c8972a] opacity-[0.07] pointer-events-none" />
      <div className="absolute top-[40%] left-[8%] w-[80px] h-[80px] rounded-full bg-[#c8972a] opacity-[0.05] pointer-events-none" />

      {/* Badge */}
      <div className="flex items-center gap-2 px-4 py-1 rounded-full border border-[#c8972a]/30 bg-[#c8972a]/10 text-[#e8b84b] text-xs font-medium tracking-widest uppercase mb-6">
        ✦ Universe 7
      </div>

      {/* 7 esferas */}
      <div className="flex gap-2 mb-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-full bg-[#c8972a] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0f]" />
          </div>
        ))}
      </div>

      {/* Título */}
      <h1 className="text-5xl font-extrabold tracking-tight text-[#f5f0e8] text-center mt-2 mb-3">
        Dragon <span className="text-[#e8b84b]">Ball</span>
      </h1>

      {/* Subtítulo */}
      <p className="text-[#6b6560] text-center max-w-sm text-base leading-relaxed mb-10">
        Explora el universo, descubre personajes y sigue las sagas del manga más legendario.
      </p>

      {/* Stats */}
      <div className="flex gap-3 mb-10 flex-wrap justify-center">
        {[
          { value: '200+', label: 'Personajes' },
          { value: '12',   label: 'Universos'  },
          { value: '7',    label: 'Esferas'    },
        ].map(({ value, label }) => (
          <div key={label} className="bg-white/[0.03] border border-[#c8972a]/15 rounded-xl px-5 py-4 text-center min-w-[110px]">
            <p className="text-lg font-bold text-[#f5f0e8]">{value}</p>
            <p className="text-xs text-[#6b6560] font-medium mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Botones */}
      <div className="flex gap-3">
        <Button
          onClick={() => navigate("/characters")}
          className="bg-[#c8972a] hover:bg-[#e8b84b] text-[#0a0a0f] font-medium px-8 cursor-pointer"
        >
          Comenzar aventura
        </Button>
        <Button
          onClick={() => navigate("/planets")}
          variant="outline"
          className="border-white/10 text-[#6b6560] hover:border-[#c8972a]/40 hover:text-[#e8b84b] bg-transparent cursor-pointer"
        >
          Explorar
        </Button>
      </div>

    </div>
  )
}