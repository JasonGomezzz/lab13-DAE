import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { dragonBalls } from "@/lib/dragonball"

const positions = [
  "left-[5%] top-[18%]",
  "left-[14%] top-[72%]",
  "left-[47%] top-[12%]",
  "left-[50%] top-[80%]",
  "right-[18%] top-[20%]",
  "right-[8%] top-[54%]",
  "left-[78%] top-[74%]",
]

function DragonBalls() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dragonBalls.map((ball, index) => (
        <Tooltip key={ball.number}>
          <TooltipTrigger>
            <button
              type="button"
              aria-label={`Esfera del dragón ${ball.number}`}
              className={`pointer-events-auto absolute ${positions[index]} flex size-14 -translate-y-1/2 items-center justify-center rounded-full border border-orange-200/20 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(255,196,0,0.9)_35%,rgba(255,111,0,0.95)_65%,rgba(170,64,0,0.95))] text-sm font-black text-white shadow-[0_0_50px_rgba(251,146,60,0.45)] transition-transform duration-700 ease-out hover:scale-110 hover:brightness-110 ${index % 2 === 0 ? "animate-[orbFloat_7s_ease-in-out_infinite]" : "animate-[orbFloat_9s_ease-in-out_infinite]"}`}
            >
              <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]">{ball.number}</span>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            Esfera {ball.number}: {ball.wish}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}

export default DragonBalls