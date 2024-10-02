import React from 'react'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../ui/hover-card'
import { CourseBadgeProps } from '@/types'


const CourseBadge = ( {text, shortText, textColor, borderColor}: CourseBadgeProps) => {

  return (
    <HoverCard openDelay={150} closeDelay={150}>
      <HoverCardTrigger className={`${textColor} ${borderColor} rounded-md px-2 py-1 text-sm border`}>
      {shortText}
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="p-1 bg-[#333333] text-[#d6d6d6] rounded-md border-none outline-none">
          {text}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default CourseBadge