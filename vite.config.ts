import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const slugs = [
  // core 20
  'badge', 'dropdown-menu', 'dialog', 'separator', 'popover', 'label',
  'checkbox', 'switch', 'alert', 'typography', 'select', 'textarea',
  'card', 'tabs', 'avatar', 'input', 'sonner', 'radio-group', 'button',
  'spacing', 'table', 'tooltip', 'colors',
  // remaining ~34 primitives
  'accordion', 'aspect-ratio', 'carousel', 'chart', 'collapsible',
  'resizable', 'scroll-area', 'sidebar', 'breadcrumb', 'menubar',
  'navigation-menu', 'pagination', 'alert-dialog', 'command',
  'context-menu', 'drawer', 'hover-card', 'sheet', 'button-group',
  'calendar', 'field', 'form', 'input-group', 'input-otp',
  'native-select', 'slider', 'toggle', 'toggle-group', 'empty', 'item',
  'kbd', 'progress', 'skeleton', 'spinner',
  // preset theme previews
  'theme-radix-luma',
]

const input: Record<string, string> = {
  main: path.resolve(__dirname, 'index.html'),
}
for (const slug of slugs) {
  input[slug] = path.resolve(__dirname, `pages/${slug}/index.html`)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: { input },
  },
})
