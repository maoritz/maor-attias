import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer';

function App() {
  return (
    <div className=' bg-gray-900'> 
      <div className="font-light text-gray-300 flex flex-col gap-16 justify-center font-poppins p-3.5 pt-14 pb-14">
        <Hero />
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
