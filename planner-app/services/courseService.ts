import connectDB from '@/lib/connectDB';
import { Course } from '@/models';

export async function getAllCourses() {
    try {
        await connectDB();
        const data = await Course.find();
        const maxLength = data.length;
        const result = data.slice();
        return {status: 'success',result, maxLength}
    } catch (error) {
        let message;
        if (error instanceof Error) {
            message = error.message;
            return {status: 'error', message, result: [], maxLength: 0}
        }
    return {status: 'error', message: 'An unknown error occured', result: [], maxLength: 0}
    }
}

export async function getCourseById(id: string) {
    try {
        await connectDB();
        const data = await Course.findById(id);
        if(!data) {
            return {status: 'error', message: "Course not found"}
        }
        return {status: 'success',data}
    } catch (error) {
        let message;
        if (error instanceof Error) {
            message = error.message;
            return {status: 'error', message, result: [], maxLength: 0}
        }
        return {status: 'error', message: 'An unknown error occured'}
    }
}
