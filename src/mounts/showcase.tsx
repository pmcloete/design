import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Showcase from "@/pages/showcase"
import "@/index.css"
import "@/styles/showcase-theme.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Showcase />
  </StrictMode>
)
