import { Plan } from "@/models/";
import { NextRequest } from "next/server";

import { getReq, postReq } from "../requests";

// Get plans
export async function GET(req: NextRequest) {
  return getReq(req, Plan, ['name', 'degree'])
}

// Create a new plans
export async function POST(req: NextRequest) {
  return postReq(req, Plan)
}
