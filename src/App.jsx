import React,{useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  useEffect(() => {
    const originalTitle = document.title;
    const originalIcon= document.querySelector('link[rel="icon"]').href;

    const handleVisibility=()=>{
      if(document.hidden){
        document.title ='Hey, Come Back!';
        document.querySelector('link[rel="icon"]').href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👋</text></svg>";
      }else{
        document.title = originalTitle;
        document.querySelector('link[rel="icon"]').href = originalIcon;
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
    
  }, []);


  return (
    <div className="bg-slate-950 overflow-x-hidden">
      <Background />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;