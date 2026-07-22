import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Demo from "@/pages/dropdown-menu"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Demo />
  </StrictMode>
)
