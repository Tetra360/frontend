import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header activeTab="tab1" onTabChange={() => {}} />
      <div className="max-w-5xl mx-auto p-8 text-center">
      <div className="flex justify-center gap-8 mb-8">
        <a href="https://electron-vite.github.io" target="_blank" className="block">
          <img 
            src={viteLogo} 
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-lg hover:drop-shadow-blue-500/50" 
            alt="Vite logo" 
          />
        </a>
        <a href="https://react.dev" target="_blank" className="block">
          <img 
            src={reactLogo} 
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-lg hover:drop-shadow-cyan-400/50 animate-spin" 
            style={{ animationDuration: '20s' }}
            alt="React logo" 
          />
        </a>
      </div>
      
      <h1 className="text-5xl font-bold mb-8">Vite + React</h1>
      
      <div className="p-8 bg-card rounded-lg border">
        <Button onClick={() => setCount((count) => count + 1)} className="mb-4">
          count is {count}
        </Button>
        <p className="text-muted-foreground">
          Edit <code className="bg-muted px-2 py-1 rounded text-sm">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="mt-8 text-muted-foreground">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App
