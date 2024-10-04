import mongoose from "mongoose";

const CourseSchema = mongoose.Schema(
  {
    name: String,
    semester: String,
    type: String,
    ects: Number,
    tags: {
      type: [String],
      default: null
    },
    effects: {
      type: [String],
      default: null
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models?.Course || mongoose.model("Course", CourseSchema);
export { CourseSchema };
