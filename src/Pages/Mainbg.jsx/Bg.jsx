import React from 'react'
import Upp from './Upp'
import Bod from './Bod'
import Foot from './Foot'

const Bg = () => {
  return (
    <div className='w-[80vw] h-[80vh] sm:h-[90vh] sm:w-[60vh] md:h-[80vh] flex flex-col gap-y-0 
    items-center backdrop-blur-md bg-black/30 border border-white/20 rounded-3xl p-8 text-white'>
    <Upp />
    <Bod />
    <Foot />
    </div>
  )
}

export default Bg
