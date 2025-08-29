import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-white pt-5 text-center">
      <div className='text-[8vw] uppercase leading-[8vw] flex items-center justify-center'>L'étincelle</div>
      <div className='text-[8vw] uppercase leading-[8vw] flex items-center justify-center'>qui <div className='h-[10vh] -mt-3 mr-1 ml-1 w-[12vw] rounded-full overflow-hidden'><Video /></div> génère</div>
      <div className='text-[8vw] uppercase leading-[8vw] flex items-center justify-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText