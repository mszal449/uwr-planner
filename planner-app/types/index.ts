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
    SummaryProps,
    Course,
    CourseCardProps
}