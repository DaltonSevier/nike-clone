import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justift-center items-center gap-2 px-7 py-4 border font-monsterrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'>
        {label}
        <img src={iconURL} alt="arrowRightIcon" className='ml-2 rounded-full w-5 h-5'/>
    </button>
  )
}

export default Button