import React from 'react'
import { User2Icon } from 'lucide-react'

const Foot = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-y-0'>
      <h2 className='text-md sm:text-md md:text-sm lg:text-xl xl:text-2xl font-base font-mono'>Contact Us at:</h2>
      <div className='flex gap-2 text-sm sm:text-xs md:text-sm lg:text-xl xl:text-2xl font-semibold items-center justify-center py-2'>
        <User2Icon />
        <p>Ecstatic.mani</p></div>
    </div>
  )
}

export default Foot
