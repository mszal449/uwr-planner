import React from 'react'

interface CourseBadgeProps {
  text: string,
  textColor: string,
  bgColor: string
}

const CourseBadge = ( {text, textColor, bgColor}: CourseBadgeProps) => {

  return (
    <div className={`bg-[${bgColor}] text-[${textColor}] rounded-md px-2 py-1 text-sm border border-white`}>
      {text}
    </div>
  )
}

export default CourseBadge