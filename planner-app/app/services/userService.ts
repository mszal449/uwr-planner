import {User} from '@/models/';
import { DataI, UserI } from '@/types'
import { getAll, addRecord, getById, getWithFilters} from './servicesUtils';


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
