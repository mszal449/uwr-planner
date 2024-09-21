import React from 'react'
import { CourseBrowserProps } from '@/types'
import { CourseCard } from '@/components'
import { sample_courses } from '@/const'
import { CourseI } from '@/types'
import { ScrollArea, Scrollbar} from '@radix-ui/react-scroll-area'



const CourseBrowser = ({styles}: CourseBrowserProps) => {
  return (
    <div className={`${styles} flex flex-col gap-2`}>
      <div className='flex'>
        <input type="text" placeholder='search' className='font-light p-2 rounded-tl-md rounded-bl-md outline-none w-full bg-[#282828] focus:bg-[#363636] transition ease-in'/>
        <button className='bg-[#282828] rounded-tr-md rounded-br-md px-3 border-none hover:bg-[#363636] transition ease-in'>O</button>
      </div>
      
      <ScrollArea className='flex flex-col gap-2 h-full overflow-auto pr-1'>
        {sample_courses.map((course: CourseI) => (
          <CourseCard
            key={course._id}
            name={course.name}
            semester={course.semester}
            type={course.type}
            ects={course.ects.toString()}
            tags={course.tags}
            effects={course.effects}
        />))}
        <Scrollbar orientation='vertical' />
      </ScrollArea>
    </div>
  )
}

export default CourseBrowser