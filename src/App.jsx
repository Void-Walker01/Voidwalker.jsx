import Background from './components/Background'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    // Add 'flex flex-col' here to create a vertical layout
    <div className="relative bg-slate-950 min-h-screen overflow-hidden flex flex-col">
      <Background />
      <Header />
      <main className="relative z-10 flex-grow pt-20">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App