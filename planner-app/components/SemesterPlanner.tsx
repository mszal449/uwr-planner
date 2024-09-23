'use client'
import React, { useEffect } from 'react'
import { SemesterPlannerProps } from '@/types';
import CourseCard from './CourseBrowser/CourseCard';

const SemesterPlanner = ( { styles, plan, onSelectSemester, onSelectCourse , deleteCourse, selectedCourseId} : SemesterPlannerProps) => {
  const [ects, setEcts] = React.useState([0, 0, 0, 0, 0, 0])
  useEffect(() => {
    let ects = [0, 0, 0, 0, 0, 0]
    plan?.semesters.forEach((semester, index) => {
      semester.forEach(course => {
        ects[index] += course.ects
      })
      if (index > 0) {
        ects[index] += ects[index - 1]
      }
    })
    setEcts(ects)
  }, [plan])


  return (
    <div className={`${styles} flex justify-between gap-2 overflow-x-scroll `}>
      {plan && plan.semesters.map((semester, index) => (
        <div key={index} className='bg-[#282828] rounded-md w-full p-3 min-w-[180px] overflow-scroll no-scrollbar' onClick={() => onSelectSemester(index)}>
          <div className='pb-3'>
            <div className='text-3xl font-light truncate'>
              {index + 1} Semestr 
            </div>
            <div className={`text-gray-400 truncate ${(ects[index] >= 30 * (index + 1)) ? "text-green-500" : 'text-red-500'}`}>{ects[index]}/{30 * (index + 1)} ECTS</div>
          </div>
          <div className='flex flex-col gap-1'>
            {semester.map((course) => (
              <CourseCard 
                key = {course._id}
                name = {course.name}
                semester = {course.semester}
                type = {course.type}
                ects = {course.ects.toString()}
                tags = {course.tags}
                effects = {course.effects}
                onClickAction={() => onSelectCourse(course)}
                doubleClickAction={() => deleteCourse(course._id, index)}
                selected={selectedCourseId === course._id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SemesterPlanner;
