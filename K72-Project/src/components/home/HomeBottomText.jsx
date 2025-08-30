import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div>
      <p className='text-white text-center flex items-center justify-center mb-4 md:opacity-0 lg:opacity-0'>K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
    <div className='flex items-center justify-center font-[font2] gap-10 '>
      <Link className='text-[4vw] leading-[4vw] hover:border-lime-300 hover:text-lime-300 text-white uppercase border-2 border-white rounded-full px-8 py-2 ' to={"/projects"}>Projects</Link>
      <Link className='text-[4vw] leading-[4vw] hover:border-lime-300 hover:text-lime-300 text-white uppercase border-2 border-white rounded-full px-8 py-2' to={"/agence"}>Agence</Link>

    </div>
    </div>
  )
}

export default HomeBottomText