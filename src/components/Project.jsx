import LabelButton from "./LabelButton"

function Project({link, name, img, info}) {
  return (
    <div>
      <a className='no-underline visited:text-white mb-[-70px] mt-[-60px] mb-2' target="_blank" href={link}>
        <div className='mb-2 text-teal-300 hover:text-teal-200 duration-300 '>{name} ⬈</div>
        <img className='rounded-lg mb-3' src={`../../${img}`} alt="" />
      </a>
      <p className="mb-4">
        {info}
      </p>
      <div className="flex gap-1.5">
        <LabelButton name='React' />
        <LabelButton name='Tailwind' />
        <LabelButton name='Github' />
        <LabelButton name='API' />
      </div>
    </div>
  )
}

export default Project