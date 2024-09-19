export interface CourseBrowserProps {
    styles: string | null;
}


export interface CourseCardProps {
    name: string;
    semester: string;
    type: string
    ects: string;
    tags: string[] | null;
    effects: string[] | null;
  }

export interface SemesterPlannerProps {
    styles: string | null;
    planId: string | null
}

export interface SummaryProps {
    styles?: string;
}