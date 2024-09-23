'use client'
import { getPlanById, getPlans } from "@/services";
import { PlanI } from "@/types";
import Data from "@/types/data";
import { useState, useEffect } from "react";
import { SemesterPlanner, CourseBrowser, Summary, Navbar } from "@/components";
import { useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import { addPlan } from "@/services";
import { AddPlanProps } from "@/types/props";

export default function Home() {
  const [plans, setPlans] = useState<Data<PlanI> | null>(null);
  const [newPlanName, setNewPlanName] = useState<string>('');
  const [planExists, setPlanExists] = useState<boolean>(false);
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/api/auth/signin?callbackUrl=/');
    },
  });
  const router = useRouter();

  useEffect(() => {
    const getdata = async () => {
      const data = await getPlans({ user: session?.user.id });
      setPlans(data);
    };
    getdata();
  }, [session]);

  const handleNewPlanNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlanName(event.target.value);
  };

  const handleNewPlanCreation = async () => {
    if (!newPlanName) {
      return;
    }

    if(plans?.result.some((plan) => plan.name === newPlanName)) {
      setPlanExists(true);
      return
    }

    const newPlan: PlanI = {
      user: session?.user.id,
      name: newPlanName,
      degree: 'engineer',
    };
    
    const plan = await addPlan(newPlan);
    console.log(plan);
    console.log(`http://localhost:3000${plan._id}`);
    router.push(`/${plan._id}`);
  }
  
  return (
    <div>
      <div>Wybierz swój plan</div>
      {plans?.result.map((plan) => (
        <div key={plan._id}>
          <a href={`/${plan._id}`}>
            {plan.name} - {plan.degree}
          </a>
        </div>
      ))}
      <div className="flex">
        <input
          className="text-black outline-none border-none rounded-tl-md rounded-bl-md"
          type="text"
          value={newPlanName}
          onChange={handleNewPlanNameChange}
        />
        <div
          className="p-3 w-fit rounded-tr-md rounded-br-md bg-green-500 hover:cursor-pointer hover:bg-green-600 transition ease-in duration-150"
          onClick={handleNewPlanCreation}
        >
          New Plan
        </div>
      </div>
      {planExists && <div className="text-red-500">Plan o takiej nazwie już istnieje</div>}
    </div>
  );
}
