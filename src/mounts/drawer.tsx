import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Demo from "@/pages/drawer"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Demo />
  </StrictMode>
)
