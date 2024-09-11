import React from 'react'
import { CourseBrowserProps } from '@/types'
import { CourseCard } from '@/components'

const CourseBrowser = ({styles}: CourseBrowserProps) => {
  return (
    <div className={`${styles}`}>
        <CourseCard
          name={"Matematyka dyskretna"}
          semester={"Zimowy"}
          type={"Humanistyczno-społeczny"}
          ects={"5"}
          tags={["Systemy sieciowe i komputerowe", "Data Science"]}
          effects={["Społeczno-ekonomiczne aspekty informatyki (I)"]}
        />
    </div>
  )
}

export default CourseBrowser