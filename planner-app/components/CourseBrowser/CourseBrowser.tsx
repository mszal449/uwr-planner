'use client'
import React, { useEffect, useState } from 'react'
import { CourseBrowserProps } from '@/types'
import { CourseCard } from '@/components'
import { CourseI } from '@/types'
import { ScrollArea, Scrollbar} from '@radix-ui/react-scroll-area'
import { getCourses } from '@/services'
import Data from '@/types/data'

 
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)
 

const CourseBrowser = ({styles, onSelectCourse}: CourseBrowserProps) => {
  const [courses, setCourses] = useState<Data<CourseI> | null>(null)

  useEffect(() => {
    const getdata = async () => {
      const data = await getCourses({}) // todo: filter as {user = session.user}
      console.log(data)
      setCourses(data)
    }
    getdata()
  }, []);

  return (
    <div className={`${styles} flex flex-col gap-2`}>
      <div className='flex'>
        <input type="text" placeholder='search' className='font-light p-2 rounded-tl-md rounded-bl-md outline-none w-full bg-[#282828] focus:bg-[#363636] transition ease-in'/>
        <button className='bg-[#282828] rounded-tr-md rounded-br-md px-3 border-none hover:bg-[#363636] transition ease-in'>O</button>
      </div>

      <ScrollArea className='flex flex-col gap-2 h-full overflow-auto '>
        {courses?.result.map((course: CourseI) => (
          <CourseCard
            key={course._id}
            name={course.name}
            semester={course.semester}
            type={course.type}
            ects={course.ects.toString()}
            tags={course.tags}
            effects={course.effects}
            onClickAction={() => onSelectCourse(course)}
        />))}
        <Scrollbar orientation='vertical' />
      </ScrollArea>

    </div>
  )
}

export default CourseBrowser