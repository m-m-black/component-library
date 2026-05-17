import { ThemeToggle } from './components/ThemeToggle/ThemeToggle'
import { buttonVariants } from './components/Button/Button'

function App() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col items-center justify-center gap-4">
      <ThemeToggle />
      <h1 className="text-2xl font-semibold">Component Library</h1>
      <a
        href="https://m-m-black.github.io/component-library/"
        target="_blank"
        rel="noreferrer"
        className={buttonVariants()}
      >
        View Storybook
      </a>
    </div>
  )
}

export default App
