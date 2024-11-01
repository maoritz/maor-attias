import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    <div className='flex'>
      <img className='h-32 rounded-full mt-1.5' src="../maor_hero.jpeg" alt="" srcset="" />
      <div className='ml-5'>
        <h1 className="text-2xl font-bold mb-1 flex align-text-top">Maor Attias</h1>
        <p className="text-base mb-1">Frontend Developer</p>
        <p className="text-gray-400 mb-3">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <div className="flex space-x-4 text-white">
          <a href="https://www.linkedin.com/in/maor-attias-9aa12318a/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a href="https://github.com/maoritz" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a href="https://www.codepen.io" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCodepen} size="xl" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero