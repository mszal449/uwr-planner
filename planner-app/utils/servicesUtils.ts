import { DataI } from "@/types";

export async function getAll<T>(name: string): Promise<DataI<T>> {
    const response = await fetch(`http://localhost:3000/api/${name}`)
    if(!response.ok) {
        throw new Error(`Error: status ${response.status}`);
    }
    const data = await response.json()
    return data
}
  
export async function getWithFilters<T>(name: string, filters: Record<string, any>): Promise<DataI<T>> {
    const searchParams = new URLSearchParams();
    Object.keys(filters).forEach(key => {
        if (filters[key]) {
            searchParams.append(key, filters[key]);
        }
    });

    const response = await fetch(`http://localhost:3000/api/${name}?${searchParams.toString()}`);
    if (!response.ok) {
        throw new Error(`Error: status ${response.status}`);
    }
    const data = await response.json();
    return data;
}

export async function getById<T>(name: string, id: string): Promise<T | null> {
    const response = await fetch(`http://localhost:3000/api/${name}/${id}`);
    if (!response.ok) {
        console.log(response);
        return null;
    }
    const data = await response.json();
    return data;
}

export async function addRecord<T>(name: string, record: T): Promise<T> {
    const response = await fetch(`http://localhost:3000/api/${name}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    });
    if (!response.ok) {
        throw new Error(`Error: status ${response.status}`);
    }
    const data = await response.json();
    return data;
}

export async function updateRecord<T>(name: string, id: string, updatedRecord: T): Promise<T> {
    const response = await fetch(`http://localhost:3000/api/${name}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedRecord)
    });
    if (!response.ok) {
        throw new Error(`Error: status ${response.status}`);
    }
    const data = await response.json();
    return data;
}
