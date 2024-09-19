export interface CourseI {
    _id: string;
    name: string;
    semester: string;
    type: string;
    ects: number;
    tags: {
      type: [string],
      default: null
    },
    effects: {
      type: [string],
      default: null
    }
}

export interface PlanI {
    _id: string,
    name: string,
    degree: "engineer" | "bachelor",
    semesters: [CourseI]
}

// todo: change interface while adding authentication
export interface UserI {
    _id: string;
    name: string;
    plans?: [PlanI]
}