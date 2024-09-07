// services for Course model
interface CourseFilters {
    name?: string,
    semester?: string,
    type?: string,
}

export async function getAllCourses() {
    const response = await fetch(`http://localhost:3000/api/courses`)
    if(!response.ok) {
        throw new Error(`Error: status ${response.status}`);
    }
    const data = await response.json()
    return data
}
  
export async function getCourses({name = "", semester = "", type=""}: CourseFilters) {
    // Construct the search parameters
    const searchParams = new URLSearchParams();
    if (name) searchParams.append("name", name);
    if (semester) searchParams.append("semester", semester);
    if (type) searchParams.append("type", type);

    const response = await fetch(`http://localhost:3000/api/courses?${searchParams.toString()}`)
    if(!response.ok) {
        throw new Error(`Error: status ${response.status}`);
    }
    const data = await response.json()
    return data
}

export async function getCourseById(id: string) {
    const response = await fetch(`http://localhost:3000/api/courses/${id}`)
    console.log(`http://localhost:3000/api/courses/${id}`)
    if(!response.ok) {
        console.log(response)
        return null
    }
    const data = await response.json()
    return data
}