import { Plan } from "@/models/";
import { NextRequest } from "next/server";

import { getReq, postReq } from "../../../utils/requests";

// Get plans
export async function GET(req: NextRequest) {
  // return getReq(req, Plan, ['name', 'degree', 'user'])
  return getReq(req, Plan, ['name', 'degree', 'user'])
}

// Create a new plan
export async function POST(req: NextRequest) {
  return postReq(req, Plan)
}
