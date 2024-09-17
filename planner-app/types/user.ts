import PlanI from "./plan";

// todo: change interface while adding authentication
export default interface UserI {
    _id?: string;
    name: string;
    plans?: [PlanI]
}