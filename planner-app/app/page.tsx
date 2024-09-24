'use client'
import { getPlans } from "@/services";
import { PlanI } from "@/types";
import Data from "@/types/data";
import { useState, useEffect } from "react";
import { useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import { addPlan } from "@/services";

export default function Home() {
  const [plans, setPlans] = useState<Data<PlanI> | null>(null);
  const [newPlanName, setNewPlanName] = useState<string>('');
  const [planExists, setPlanExists] = useState<boolean>(false);
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/api/auth/signin?callbackUrl=/');
    },
  });

  useEffect(() => {
    if (!session) {
      return;
    }

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
    router.push(`/${plan._id}`);
  }
  
  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-[10%] gap-3">
      <div className="text-2xl">Choose plan</div>
      {plans?.result.map((plan) => (
        <a href={`/${plan._id}`} className="bg-[#282828] rounded-md p-2 hover:bg-[#414141] transition ease-in duration-150" key={plan._id}>
            {plan.name} - {plan.degree}
        </a>
      ))}
      <div className="flex">
        <input
          className="text-white bg-[#282828] putline border-none rounded-tl-md rounded-bl-md p-2"
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
      {planExists && <div className="text-red-500">Plan with this name already exists</div>}
    </div>
  );
}
