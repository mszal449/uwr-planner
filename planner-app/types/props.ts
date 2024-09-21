import { CourseI, PlanI } from "./models";

export interface CourseBrowserProps {
    styles: string | null;
    onSelectCourse: (c: CourseI) => void
}

export interface CourseCardProps {
    name: string;
    semester: string;
    type: string
    ects: string;
    tags: string[] | null;
    effects: string[] | null;
    onClickAction: () => void | null
  }

export interface SemesterPlannerProps {
    styles: string | null;
    plan: PlanI | null;
    onSelectSemester: (id: number) => void;
    deleteCourse: (semId: number, courseId: string) => void
}

export interface SummaryProps {
    styles?: string;
}

export interface NavbarProps {
    savePlan: ()=> void;
}