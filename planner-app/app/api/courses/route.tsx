import { Course } from "@/models/";
import { NextRequest } from "next/server";

import { getReq, postReq } from "../requests";

// Get courses
export async function GET(req: NextRequest) {
  return getReq(req, Course, ['name', 'semester', 'type'], ['tags', 'effects'], ['ects'])
}

// Create a new courses
export async function POST(req: NextRequest) {
  return postReq(req, Course)
}
