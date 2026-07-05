import Navbar from "./components/Navbar";
import BackgroundFX from "./components/BackgroundFX";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <footer className="text-center text-sm text-slate-500 py-8 border-t border-glow-400/10">
        © {new Date().getFullYear()} Supremo. All Rights Reserved..
      </footer>
    </div>
  );
}

export default App;
