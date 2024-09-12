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
    styles: string | null;
}





// Export types

export type {
    CourseBrowserProps,
    SemesterPlannerProps,
    SummaryProps,
    Course,
    CourseCardProps
}