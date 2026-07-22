import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Overview from "@/pages/overview"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Overview />
  </StrictMode>
)
