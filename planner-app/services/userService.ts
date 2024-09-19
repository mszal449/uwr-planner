import { DataI, PlanI, UserI } from '@/types'
import { getAll, addRecord, getById, getWithFilters} from '../utils/servicesUtils';


const urlString = "users"

export async function getAllUsers(): Promise<DataI<UserI>> {
    return getAll(urlString)
}
  
export async function getUsers(filters: Record<string, any>): Promise<DataI<UserI>> {
    return getWithFilters(urlString, filters)
}

export async function getUserById(id: string): Promise<UserI | null> {
    return getById(urlString, id) 
}

export async function addUser(user: UserI): Promise<UserI> {
    return addRecord(urlString, user)
}

export async function updatePlan(user: UserI, plan: PlanI, id: string) {
    const updatedPlans = user.plans?.map(p => p._id === id ? { ...p, ...plan } : p) || [];
    const updatedUser = {
        ...user,
        plans: updatedPlans
    };
    const response = await fetch(`http://localhost:3000/api/${urlString}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    });
    if (!response.ok) {
        throw new Error(`Error: status ${response.status}`);
    }
    const data = await response.json();
    return data;
}
