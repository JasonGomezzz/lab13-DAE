import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "@/components/NavBar"
import Home from "@/pages/Home"
import Characters from "@/pages/Characters"
import CharacterDetail from "@/pages/CharacterDetail"
import Planets from "@/pages/Planets"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a0f]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/planets" element={<Planets />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}