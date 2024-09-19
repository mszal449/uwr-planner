'use client'
import React, { useEffect, useState } from 'react'
import { PlanI, SemesterPlannerProps } from '@/types';
import { getPlanById } from '@/services';
import CourseCard from './CourseBrowser/CourseCard';

const SemesterPlanner = ( { styles, planId } : SemesterPlannerProps) => {
  const [plan, setPlan] = useState<PlanI | null>(null)

  useEffect(() => {
    const getdata = async () => {
      if (planId) {
        const data = await getPlanById(planId)
        console.log(data)
        setPlan(data)
      }
    }
    getdata()
  }, [planId]);


  return (
    <div className={`${styles} flex justify-between gap-3`}>
      {plan && plan.semesters.map((semester, index) => (
        <div key={index} className='bg-[#282828] rounded-md w-full p-3'>
          Semestr {index + 1}
          {semester.map((course) => (
            <CourseCard
              name = {course.name}
              semester = {course.semester}
              type = {course.type}
              ects = {course.ects.toString()}
              tags = {course.tags}
              effects = {course.effects}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default SemesterPlanner;
