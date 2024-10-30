import useWidth from './hooks/useWidth';
import Desktop from './components/Desktop';
import Hero from './components/Hero'



function App() {
  const{width} = useWidth()
  return (
    <> 
      {width > 550 ? <Desktop/> :
        <div className="bg-gray-900 text-white h-screen flex justify-center font-poppins">
          <Hero />
        </div>
      }
      </>
  );
}

export default App;
