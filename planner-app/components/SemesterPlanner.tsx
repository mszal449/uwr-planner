import React from 'react'
import { SemesterPlannerProps } from '@/types';
import CourseCard from './CourseBrowser/CourseCard';

const SemesterPlanner = ( { styles, plan, onSelectSemester, deleteCourse } : SemesterPlannerProps) => {

  return (
    <div className={`${styles} flex justify-between gap-3`}>
      {plan && plan.semesters.map((semester, index) => (
        <div key={index} className='bg-[#282828] rounded-md w-full p-3' onClick={() => onSelectSemester(index)}>
          Semestr {index + 1}
          {semester.map((course) => (
            <CourseCard key = {course._id}
              name = {course.name}
              semester = {course.semester}
              type = {course.type}
              ects = {course.ects.toString()}
              tags = {course.tags}
              effects = {course.effects}
              onClickAction={() => deleteCourse(index, course._id)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default SemesterPlanner;
