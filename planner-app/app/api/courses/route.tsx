import { Course } from "@/models/";
import { NextRequest } from "next/server";

import { getReq, postReq, putReq } from "../../../utils/requests";

// Get courses
export async function GET(req: NextRequest) {
  return getReq(req, Course, ['name', 'semester', 'type'], ['tags', 'effects'], ['ects'])
}

// Create a new course
export async function POST(req: NextRequest) {
  return postReq(req, Course)
}

// Update course
export async function PUT(req: NextRequest) {
  return putReq(req, Course)
}

