'use client';
import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PlanI } from "@/types";

export default function Home() {
  const [plans, setPlans] = useState<PlanI[] | null>(null);
  const [newPlanName, setNewPlanName] = useState<string>('');
  const [planExists, setPlanExists] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [planToDelete, setPlanToDelete] = useState<string | null>(null);
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/api/auth/signin?callbackUrl=/');
    },
  });

  useEffect(() => {
    setIsLoading(true)
    if (!session) return;
    
    const fetchPlans = async () => {
      try {
        const response = await fetch(`/api/plans?user=${session.user.id}`)
        if (!response.ok) throw new Error('Failed to fetch plans')

        const data = await response.json()
        setPlans(data.result)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching plans:', error)
        setPlans(null)
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

  const handleSetPlanToDelete = (id: string) => {
    setPlanToDelete(id);
  }

  const handlePlanDeletion = async () => {
    if (!planToDelete) return

    try {
      const response = await fetch(`/api/plans/${planToDelete}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData)
        throw new Error(errorData.error || 'Failed to delete the plan');
      }
  
      if (plans) {  
        const updatedPlans = plans.filter((plan) => plan._id !== planToDelete);
        setPlans(updatedPlans);
      } else {
        setPlans(null); 
      }
  
      setPlanToDelete(null);
    } catch (error) {
      console.error('Error deleting plan:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-[10%] gap-3">
      <div className="text-2xl">Wybierz plan</div>
      <div className="flex flex-col gap-1 max-h-[400px] overflow-y-auto">
      {isLoading ? (
        <div>Trwa ładowanie planów...</div>
      ) : plans && plans.length > 0 ? (
        plans.map((plan) => (
          <div key={plan._id} className="flex w-full justify-between">
            <a
              href={`/${plan._id}`}
              className={`bg-[#282828] flex-grow rounded-tl-md rounded-bl-md p-2 hover:bg-[#414141] transition duration-150 ${planToDelete === plan._id ? 'text-red-500' : 'text-white'}`}
              >
                  {plan.name} - {plan.degree === 'engineer' ? 'Inżynier' : 'Licencjat'}
            </a>
            <button 
              onClick={() => handleSetPlanToDelete(plan._id ? plan._id : '')} 
              className="font-light py-2 px-4 w-fit rounded-tr-md rounded-br-md bg-red-600 hover:bg-red-700 transition ease-in duration-150">
              x
            </button>
          </div>
          ))
        ) : (
          <div>Nie znaleziono planów</div>
        )}
      </div >
      {planToDelete && (
        <div className="flex items-center justify-around gap-3">
          <div className="">Czy na pewno chcesz usunąć plan?</div>
          <button
            onClick={handlePlanDeletion}
            className="p-3 rounded-md bg-red-600 hover:bg-red-700 transition ease-in duration-150">Usuń</button>
        </div>
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
