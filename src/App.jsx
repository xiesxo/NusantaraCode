import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Root application component – single-page layout with
 * all sections composed vertically for smooth-scroll navigation.
 */
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
