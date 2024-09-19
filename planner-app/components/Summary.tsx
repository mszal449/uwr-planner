import React from 'react'
import { SummaryProps } from '@/types'

const Summary = ( { styles }: SummaryProps ) => {
  return (
    <div className={`${styles} bg-[#282828] w-full`}>
      Summary 
    </div>
  )
}

export default Summary