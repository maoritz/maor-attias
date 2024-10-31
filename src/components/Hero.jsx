import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <div className='flex'>
      <img className='h-40 rounded-full' src="../maor_hero.jpeg" alt="" srcset="" />
      <div className='ml-5'>
        <h1 className="text-3xl font-bold mb-2">Maor Attias</h1>
        <p className="text-lg mb-2">Frontend Developer</p>
        <p className="text-gray-400">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
      </div>
    </div>
  )
}

export default Hero