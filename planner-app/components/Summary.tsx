import React from 'react'
import { SummaryProps } from '@/types'

const Summary = ( { styles }: SummaryProps ) => {
  return (
    <div className={`${styles}`}>
      <div className="bg-[#282828] rounded-md w-full p-3">Summary</div> 
    </div>
  )
}

export default Summary