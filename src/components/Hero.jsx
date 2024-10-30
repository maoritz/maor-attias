import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <div className='flex m-3 mt-12'>
      <img className='h-40 rounded-full h-20' src="../maor_hero.jpeg" alt="" srcset="" />
      <div className='ml-5'>
        <h1 className="text-3xl font-bold">Maor Attias</h1>
        <p className="text-lg text-gray-400">Frontend Developer</p>
        <p className="mt-2 text-gray-300">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
      </div>
    </div>
  )
}

export default Hero