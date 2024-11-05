import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FontIcon({icon}) {
  return (
    <FontAwesomeIcon className='hover:text-teal-300 duration-300' icon={icon} size="xl" />
  )
}

export default FontIcon