import mongoose from "mongoose";
import {CourseSchema} from "./course"

const PlanSchema = new mongoose.Schema({
    user: String,
    name: String,
    degree: String,
    semesters: {type: [[CourseSchema]], default: [[], [], [], [], [], [], []]},
  });

export default mongoose.models.Plan || mongoose.model("Plan", PlanSchema);
export {PlanSchema}
