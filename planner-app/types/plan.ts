import CourseI from "./course";

export default interface PlanI {
    _id: string,
    name: string,
    degree: string, // engineer or bachelor?
    semesters: [CourseI]
}