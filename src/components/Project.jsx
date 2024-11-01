import React from 'react'

function Project({id, link, name, img, info}) {
  return (
    <div>
      <a className='no-underline visited:text-white mb-[-70px] mt-[-60px] mb-2' target="_blank" href={link}>
        <div className='mb-2'>{name} ⬈</div>
        <img className='rounded-lg mb-3' src={`../../${img}`} alt="" />
      </a>
      <p>
        {info}
      </p>
    </div>
  )
}

export default Project