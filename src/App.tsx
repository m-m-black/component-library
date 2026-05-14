import { useState } from 'react'

function App() {
  const [dark, setDark] = useState(false)

  const toggle = () => {
    setDark((d) => {
      document.documentElement.classList.toggle('dark', !d)
      return !d
    })
  }

  return (
    <div className="min-h-screen bg-background text-text p-8">
      <h1 className="text-2xl font-semibold mb-4">Component Library</h1>
      <div className="flex gap-4 mb-8">
        <div className="w-16 h-16 rounded bg-accent" title="accent" />
        <div className="w-16 h-16 rounded bg-success" title="success" />
        <div className="w-16 h-16 rounded bg-destructive" title="destructive" />
        <div className="w-16 h-16 rounded bg-warning" title="warning" />
        <div className="w-16 h-16 rounded bg-surface border border-border" title="surface" />
      </div>
      <button
        onClick={toggle}
        className="px-4 py-2 rounded bg-accent text-accent-foreground text-sm"
      >
        Toggle {dark ? 'light' : 'dark'} mode
      </button>
    </div>
  )
}

export default App
