// services for User model
interface UserFilters {
    name?: string,
    degree?: string,
}

export async function getAllUsers() {
    const response = await fetch(`http://localhost:3000/api/users`)
    if(!response.ok) {
        throw new Error(`Error: status ${response.status}`);
    }
    const data = await response.json()
    return data
}
  
export async function getUsers({name = "", degree = ""}: UserFilters) {
    // Construct the search parameters
    const searchParams = new URLSearchParams();
    if (name) searchParams.append("name", name);
    if (degree) searchParams.append("degree", degree);

    const response = await fetch(`http://localhost:3000/api/users?${searchParams.toString()}`)
    if(!response.ok) {
        throw new Error(`Error: status ${response.status}`);
    }
    const data = await response.json()
    return data
}

export async function getUserById(id: string) {
    const response = await fetch(`http://localhost:3000/api/users/${id}`)
    console.log(`http://localhost:3000/api/users/${id}`)
    if(!response.ok) {
        console.log(response)
        return null
    }
    const data = await response.json()
    return data
}