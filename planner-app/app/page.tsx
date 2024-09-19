'use client'
import { SemesterPlanner, CourseBrowser, Summary } from "@/components";
import { getPlanById, getPlans } from "@/services";
import { PlanI } from "@/types";
import Data from "@/types/data";
import { useState, useEffect } from "react";


export default function Home() {
  const [plans, setPlans] = useState<Data<PlanI> | null>(null)

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
  );
}