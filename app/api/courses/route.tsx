import { NextRequest, NextResponse } from "next/server";
import { getAllCourses } from "@/services";
import { getToken } from "next-auth/jwt";

// Get all courses
export async function GET(req: NextRequest) {
  const token = await getToken({req, secret: process.env.JWT_SECRET})
  if (!token) {
    return NextResponse.json({status: 'error', message: "Unauthorized"}, {status: 401})
  }

  const {status, result, maxLength} = await getAllCourses()
  if (status === 'error') {
    return NextResponse.json({status:'error', message: 'Failed to fetch courses'}, {status: 500})
  }
  return NextResponse.json({status: 'success', result, maxLength})
}