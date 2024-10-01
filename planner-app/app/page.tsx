'use client';
import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PlanI } from "@/types";

export default function Home() {
  const [plans, setPlans] = useState<PlanI[] | null>(null);
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
    if (!session) return;

    const fetchPlans = async () => {
      try {
        const response = await fetch(`/api/plans?user=${session.user.id}`);
        if (!response.ok) throw new Error('Failed to fetch plans');

        const data = await response.json();
        setPlans(data.result);
      } catch (error) {
        console.error('Error fetching plans:', error);
        setPlans(null);
      }
    };

    fetchPlans();
  }, [session]);

  const handleNewPlanNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlanName(event.target.value);
  };

  const handleNewPlanCreation = async () => {
    if (!newPlanName || plans?.some((plan) => plan.name === newPlanName)) {
      setPlanExists(true);
      return;
    }

    const newPlan: PlanI = {
      user: session?.user.id,
      name: newPlanName,
      degree: 'engineer',
    };

    try {
      const response = await fetch('/api/plans', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlan),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create a new plan');
      }

      const { result: createdPlan } = await response.json();
      router.push(`/${createdPlan.result._id}`);
    } catch (error) {
      console.error('Error creating plan:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-[10%] gap-3">
      <div className="text-2xl">Choose plan</div>
      {plans?.length ? (
        plans.map((plan) => (
          <a href={`/${plan._id}`} className="bg-[#282828] rounded-md p-2 hover:bg-[#414141] transition duration-150" key={plan._id}>
            {plan.name} - {plan.degree}
          </a>
        ))
      ) : (
        <div>No plans found</div>
      )}
      <div className="flex">
        <input
          className="text-white bg-[#282828] border-none rounded-tl-md rounded-bl-md p-2"
          type="text"
          value={newPlanName}
          onChange={handleNewPlanNameChange}
        />
        <div
          className="p-3 bg-green-500 hover:bg-green-600 rounded-tr-md rounded-br-md transition duration-150 cursor-pointer"
          onClick={handleNewPlanCreation}
        >
          New Plan
        </div>
      </div>
      {planExists && <div className="text-red-500">Plan with this name already exists</div>}
    </div>
  );
}
