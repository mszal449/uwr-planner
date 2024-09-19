// Declare types here
import UserI from './user'
import CourseI from './course'
import PlanI from './plan'
import DataI from './data'

// Object types
interface ObjectId {
    $oid: string;
}

interface Course {
    _id: ObjectId;
    name: string;
    semester: string;
    type: string;
    ects: string;
    tags: string[] | null;
    effects: string[] | null;
}

// Props
interface CourseBrowserProps {
    styles: string | null;
}


interface CourseCardProps {
    name: string;
    semester: string;
    type: string
    ects: string;
    tags: string[] | null;
    effects: string[] | null;
  }

interface SemesterPlannerProps {
    styles: string | null;
}

interface SummaryProps {
    styles?: string;
}



// Export types

export type {
    SemesterPlannerProps,
    CourseBrowserProps,
    SummaryProps,
    Course,
    CourseCardProps,
    UserI, CourseI, PlanI, DataI
}