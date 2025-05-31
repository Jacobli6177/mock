import { getTechLogos } from '@/lib/utils'
import React from 'react'

const DisplayTechIcons = aynsc ({techstack}: TechIconProps) => {
    const techIcons = await getTechLogos(techstack);
  return (
    <div className='flex flex-row'>
      {techstack}
    </div>
  )
}

export default DisplayTechIcons
