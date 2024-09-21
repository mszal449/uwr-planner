'use client'
import { getPlanById, getPlans } from "@/services";
import { PlanI } from "@/types";
import Data from "@/types/data";
import { useState, useEffect } from "react";
import { SemesterPlanner, CourseBrowser, Summary, Navbar } from "@/components";
import { useSession} from 'next-auth/react'
import { redirect } from "next/navigation";

export default function Home () {
  const [plans, setPlans] = useState<Data<PlanI> | null>(null)
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/')
    }
  })

  useEffect(() => {
    const getdata = async () => {
      const data = await getPlans({}) // todo: filter as {user = session.user}
      console.log(data)
      setPlans(data)
    }
    getdata()
  }, []);

  return (
    <div>
        <div>Wybierz swój plan</div>
        {
          plans?.result.map((plan) => (
            <div key={plan._id}> <a href={`/${plan._id}`}>
              {plan.name} - {plan.degree}
            </a></div>
          ))
        }
    </div>
  )
}