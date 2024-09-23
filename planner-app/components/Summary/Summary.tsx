'use client'
import React from 'react'
import { CourseI, SummaryProps } from '@/types'
import { bachelorRequirements } from '@/const';
import { useEffect } from 'react';
import ECTSTable from './ECTSTable';
import { usePlanContext } from '@/context/PlanContext';

const Summary = ( { styles }: SummaryProps ) => {
  const { plan } = usePlanContext();
  const [totalEcts, setTotalEcts] = React.useState(0);
  const [engineeringCoursesEcts, setEngineeringCoursesEcts] = React.useState(0);
  const [computerScienceCoursesEcts, setComputerScienceCoursesEcts] = React.useState(0);
  const [requiredCourses, setRequiredCourses] = React.useState<CourseI[]>([]);

  useEffect(() => {
    if (plan) {
      let totalEctsAcc = 0
      let engineeringEctsAcc = 0
      let computerScienceEctsAcc = 0
      let requiredCoursesAcc: CourseI[] = [];
  
      plan.semesters.forEach(semester => {
        semester.forEach((course: CourseI) => {
          totalEctsAcc += course.ects
      })});
  
      setTotalEcts(totalEctsAcc);
      setEngineeringCoursesEcts(engineeringEctsAcc);
      setComputerScienceCoursesEcts(computerScienceEctsAcc);
      setRequiredCourses(requiredCoursesAcc);
    }
  }, [plan])


  return (
    <div className={`${styles} bg-[#282828] w-full`}>
      <div className={`${ totalEcts < bachelorRequirements.totalECTS ? "text-red-500" : "text-green-500"}`}>
        {totalEcts}/{bachelorRequirements.totalECTS} 
      </div>
      <ECTSTable/>
      
    </div>
  )
}

export default Summary