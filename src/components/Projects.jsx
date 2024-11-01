import React from 'react'

function Projects() {
  return (
    <>
      <h2 className="font-bold text-lg">Projects</h2>
      <a className='no-underline visited:text-white mb-[-70px] mt-[-60px]' href="https://curious-shortbread-fcc9f0.netlify.app/">
        <div className='mb-2'>Weather App ⬈</div>
        <img className='rounded-lg' src="../../weather_img.png" alt="" srcset="" />
      </a>
      <p>
        My Weather App is a sleek and user-friendly tool designed to provide accurate, real-time weather updates for any city in the world. Built using React and styled with Tailwind CSS, the app integrates with the OpenWeatherMap API to fetch detailed weather data, including temperature, humidity, wind speed, and a 5-day forecast.
      </p>
    </>
  )
}

export default Projects