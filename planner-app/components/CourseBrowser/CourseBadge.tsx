import React from 'react'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../ui/hover-card'

interface CourseBadgeProps {
  text: string,
  shortText: string,
  textColor: string,
  bgColor: string
}

const CourseBadge = ( {text, shortText, textColor, bgColor}: CourseBadgeProps) => {

  return (
    <HoverCard openDelay={200} closeDelay={200}>
      <HoverCardTrigger className={`bg-[${bgColor}] text-[${textColor}] rounded-md px-2 py-1 text-sm border border-white`}>
      {shortText}
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="p-3 bg-[#3a3a3a] text-white rounded-md transition ease-in">
          {text}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default CourseBadge