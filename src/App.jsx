import useWidth from './hooks/useWidth';
import Desktop from './components/Desktop';
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'



function App() {
  const{width} = useWidth()
  return (
    <> 
      {width > 550 ? <Desktop/> :
        <div className="font-light bg-gray-900 text-white flex flex-col gap-20 justify-center font-poppins p-2">
          <Hero />
          <About />
          <Projects />
        </div>
      }
      </>
  );
}

export default App;
