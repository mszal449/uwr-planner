'use client'
import React, { useEffect, useState } from 'react'
import { CourseBrowserProps } from '@/types'
import { CourseCard } from '@/components'
import { CourseI } from '@/types'
import { ScrollArea, Scrollbar} from '@radix-ui/react-scroll-area'
import Data from '@/types/data'
 

const CourseBrowser = ({styles, onSelectCourse, selectedCourseId}: CourseBrowserProps) => {
  const [courses, setCourses] = useState<Data<CourseI> | null>(null)
  const [search, setSearch] = useState("")

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const filteredCourses = courses?.result.filter((course: CourseI) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    const getdata = async () => {
      const data = await fetch('/api/courses')
      const result = await data.json()
      if(result?.status !== 'success') {
        return
      }
      setCourses(result)
    }
    getdata()
  }, []);

  return (
    <div className={`${styles} flex flex-col gap-2`}>
      <div className='flex'>
        <input
          spellCheck='false' 
          type="text" placeholder='Wyszukaj kurs' 
          className='font-light p-2 rounded-md outline-none w-full bg-[#282828] focus:bg-[#363636] transition ease-in'
          value={search}
          onChange={handleSearchChange}/>
      </div>

      <ScrollArea className='flex flex-col gap-2 h-full overflow-y-auto pr-1'>
        {filteredCourses?.map((course: CourseI) => (
          <CourseCard
            key={course._id}
            name={course.name}
            semester={course.semester}
            type={course.type}
            ects={course.ects.toString()}
            tags={course.tags}
            effects={course.effects}
            onClickAction={() => onSelectCourse(course)}
            selected={selectedCourseId === course._id}
            marked={false}
        />))}
        <Scrollbar orientation='vertical' />
      </ScrollArea>
    </div>
  )
}

export default CourseBrowser