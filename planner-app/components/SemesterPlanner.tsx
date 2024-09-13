import React from 'react';
import { SemesterPlannerProps } from '@/types';

const SemesterPlanner = ( { styles } : SemesterPlannerProps ) => {
  return (
    <div className={`${styles} flex justify-between gap-3`}>
      {[1,2,3,4,5,6].map((semester: number) => (
        <div key={semester} className='bg-[#282828] rounded-md w-full p-3'>Semestr {semester}</div>
      ))}
    </div>
  );
}

export default SemesterPlanner;
