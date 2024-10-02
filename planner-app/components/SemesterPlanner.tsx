'use client'
import React, { useEffect } from 'react'
import { SemesterPlannerProps } from '@/types';
import CourseCard from './CourseBrowser/CourseCard';

const SemesterPlanner = ( { styles, plan, onSelectSemester, onSelectCourse , deleteCourse, selectedCourseId} : SemesterPlannerProps) => {
  const [ects, setEcts] = React.useState([0, 0, 0, 0, 0, 0, 0])
  useEffect(() => {
    if (!plan?.semesters) return

    let ects = [0, 0, 0, 0, 0, 0, 0]
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

  const ectsColor = (ects: number, threshold: number) => {
    if (ects >= threshold) {
      return 'text-green-500'
    } else if (ects >= threshold - 10) {
      return 'text-orange-500'
    }
    else {
      return 'text-red-500'
    }
  } 

  const calculateThreshold = (semester: number) => {
    if (semester  === 6) {
      return 200
    } 
    return 30 * (semester + 1)
  }

  return (
    <div className={`${styles} flex justify-between gap-2 overflow-x-scroll no-scrollbar`}>
      {plan && plan.semesters && plan.semesters.map((semester, index) => (
        <div key={index} className='bg-[#282828] rounded-md w-full p-2 min-w-[180px] overflow-scroll no-scrollbar' onClick={() => onSelectSemester(index)}>
          <div className='pb-3'>
            <div className='text-3xl font-light truncate'>
              {index + 1} Semestr 
            </div>
            <div className={`text-gray-400 truncate ${ectsColor(ects[index], calculateThreshold(index) )}`}>{ects[index]}/{calculateThreshold(index)} ECTS</div>
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
