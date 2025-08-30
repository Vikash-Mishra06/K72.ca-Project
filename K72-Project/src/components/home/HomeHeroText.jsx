import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className="mt-52 lg:mt-0 md:mt-0 font-[font1] text-white pt-5 text-center">
      <div className='text-4xl lg:text-[8vw] uppercase sm:leading-[15vw] md:leading-[6vw] lg:leading-[8vw] flex items-center justify-center'>L'étincelle</div>
      <div className='text-4xl lg:text-[8vw] uppercase sm:leading-[15vw] md:leading-[6vw] lg:leading-[8vw] flex items-center justify-center'>qui <div className='h-[6vh] lg:h-[10vh] lg:-mt-3 mr-1 ml-1 w-[26vw] md:w-[12vw] lg:w-[12vw] rounded-full overflow-hidden'><Video /></div> génère</div>
      <div className='text-4xl lg:text-[8vw] uppercase sm:leading-[15vw] md:leading-[6vw] lg:leading-[8vw] flex items-center justify-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText