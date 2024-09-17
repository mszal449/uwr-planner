export default interface CourseI {
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