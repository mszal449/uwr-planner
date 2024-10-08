import { CourseI, PlanI } from "./models";

export interface CourseBrowserProps {
    styles: string | null;
    onSelectCourse: (c: CourseI) => void
    selectedCourseId: string | null
}

export interface CourseCardProps {
    name: string;
    semester: string;
    type: string
    ects: string;
    tags: string[] | null;
    effects: string[] | null;
    onClickAction: () => void | null
    doubleClickAction?: () => void | null
    selected: boolean
    marked: boolean
  }

export interface SemesterPlannerProps {
    styles: string | null;
    plan: PlanI | null;
    onSelectSemester: (id: number) => void;
    onSelectCourse: (c: CourseI) => void;
    deleteCourse: (courseId: string, semId: number) => void;
    selectedCourseId: string | null;
    markedCoursesKey: "tag" | "effect" | "type" | null;
    markedCoursesValue: string | string[] | null;
}

export interface SummaryProps {
    styles?: string;
    onClickMark: (key: string, value: string | string[]) => void;
}

export interface NavbarProps {
    planName?: string
    degree?: string
    savePlan: ()=> void
}

export interface AddPlanProps {
    name: string,
    user: string,
    degree: "engineer" | "bachelor",
}

export interface CourseBadgeProps {
    text: string,
    shortText: string,
    textColor: string,
    borderColor: string,
  }