import mongoose from "mongoose";
import {PlanSchema} from "./plan"

const UserSchema = mongoose.Schema(
  {
    name: String,
    plans: { type: [PlanSchema], default: [] }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User|| mongoose.model("User", UserSchema);