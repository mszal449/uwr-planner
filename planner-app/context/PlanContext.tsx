'use client'
import { Plan } from '@/models';
import { PlanI } from '@/types'
import { createContext, useContext, useState } from 'react'

interface PlanContextType {
  plan: PlanI | null;
  setPlan: React.Dispatch<React.SetStateAction<PlanI | null>>;
}

const emptyPlan: PlanI = {
  _id: '',
  user: '',
  name: 'New Plan',
  degree: 'bachelor',
  semesters: [],
}

const PlanContext = createContext<PlanContextType | undefined>(undefined)


export const usePlanContext = () => {
    const context = useContext(PlanContext)
    if (context === undefined) {
      throw new Error('usePlanContext must be used within a PlanProvider')
    }
    return context;
}


export const PlanProvider = ({ children }: { children: React.ReactNode }) => { 
  const [plan, setPlan] = useState<PlanI | null>(emptyPlan);
  return (
    <PlanContext.Provider value={{plan, setPlan}}>
      {children}
    </PlanContext.Provider>
  )
}