import LabelButton from "./LabelButton"

function Project({link, name, img, info}) {
  return (
    <div className="text-sm  mb-10 sm:flex flex-row-reverse">
      <div>
        <a className='no-underline visited:text-white mb-[-70px] mt-[-60px] mb-2' target="_blank" href={link}>
          <div className='mb-2 text-teal-300 hover:text-teal-200 duration-300 '>{name} ⬈</div>
        </a>
        <p className="mb-4">
          {info}
        </p>
        <div className="flex gap-1.5 mb-3">
          <LabelButton name='React' />
          <LabelButton name='Tailwind' />
          <LabelButton name='Github' />
          <LabelButton name='API' />
        </div>
      </div>
      <div className="mr-3">
        <a href={link}>
          <img className='rounded-lg mb-3 mx-auto' src={`../../${img}`} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Project