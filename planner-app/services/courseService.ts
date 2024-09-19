import { DataI, CourseI } from '@/types'
import { getAll, addRecord, getById, getWithFilters} from '../utils/servicesUtils';


const urlString = "courses"

export async function getAllCourses(): Promise<DataI<CourseI>> {
    return getAll(urlString)
}
  
export async function getCourses(filters: Record<string, any>): Promise<DataI<CourseI>> {
    return getWithFilters(urlString, filters)
}

export async function getCourseById(id: string): Promise<CourseI | null> {
    return getById(urlString, id) 
}

export async function addCourse(Course: CourseI): Promise<CourseI> {
    return addRecord(urlString, Course)
}