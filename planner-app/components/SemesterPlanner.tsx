import React from 'react'
import { SemesterPlannerProps } from '@/types';
import CourseCard from './CourseBrowser/CourseCard';

const SemesterPlanner = ( { styles, plan, onSelectSemester, onSelectCourse , deleteCourse, selectedCourseId} : SemesterPlannerProps) => {

  return (
    <div className={`${styles} flex justify-between gap-3`}>
      {plan && plan.semesters.map((semester, index) => (
        <div key={index} className='bg-[#282828] rounded-md w-full p-3' onClick={() => onSelectSemester(index)}>
          <div className='flex items-end justify-between pb-3'>
            <div className='text-3xl font-light'>
              Semestr {index + 1}
            </div>
            <div className='text-gray-400'>ECTS: 30/30</div> 
            {/* todo: calculate ECTS */}
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
