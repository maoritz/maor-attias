import React from 'react'

function LabelButton({name}) {
  return (
    <div className="w-min bg-gray-800 px-4 py-2 rounded-lg text-teal-300 font-medium text-sm">
      {name}
    </div>
  )
}

export default LabelButton