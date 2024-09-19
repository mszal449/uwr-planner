'use client'
import React, { useEffect, useState } from 'react'
import { PlanI, SemesterPlannerProps } from '@/types';
import { getPlanById } from '@/services';

const SemesterPlanner = ( { styles } : SemesterPlannerProps, planId: string ) => {
  const [plan, setPlan] = useState<PlanI | null>(null)

  useEffect(() => {
    const getdata = async () => {
      const data = await getPlanById(planId)
      console.log(data)
      setPlan(data)
    }
    getdata()
  });

  return (
    <div className={`${styles} flex justify-between gap-3`}>
      {[1,2,3,4,5,6].map((semester: number) => (
        <div key={semester} className='bg-[#282828] rounded-md w-full p-3'>Semestr {semester}</div>
      ))}
    </div>
  );
}

export default SemesterPlanner;
