import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex items-center justify-center font-[font2] gap-10 '>
      <Link className='text-[4vw] leading-[4vw] hover:border-lime-300 hover:text-lime-300 text-white uppercase border-2 border-white rounded-full px-8' to={"/projects"}>Projects</Link>
      <Link className='text-[4vw] leading-[4vw] hover:border-lime-300 hover:text-lime-300 text-white uppercase border-2 border-white rounded-full px-8' to={"/agence"}>Agence</Link>

    </div>
  )
}

export default HomeBottomText