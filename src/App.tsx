import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-navy-950 text-gray-300">
      <Navigation />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
