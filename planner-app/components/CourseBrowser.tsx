import React from 'react'
import { CourseBrowserProps } from '@/types'
import { CourseCard } from '@/components'

const CourseBrowser = ({styles}: CourseBrowserProps) => {
  return (
    <div className={`${styles}`}>
        <CourseCard
          name={"Bazy danych"}
          semester={"Zimowy"}
          type={"Humanistyczno-społeczny"}
          ects={"5"}
          tags={["Bazy danych", "Data Science"]}
          effects={["Społeczno-ekonomiczne aspekty informatyki (I)"]}
        />
    </div>
  )
}

export default CourseBrowser