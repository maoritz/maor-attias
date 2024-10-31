import useWidth from './hooks/useWidth';
import Desktop from './components/Desktop';
import Hero from './components/Hero'
import About from './components/About'



function App() {
  const{width} = useWidth()
  return (
    <> 
      {width > 550 ? <Desktop/> :
        <div className="bg-gray-900 text-white flex flex-col gap-24 justify-center font-poppins p-5">
          <Hero />
          <About />
        </div>
      }
      </>
  );
}

export default App;
