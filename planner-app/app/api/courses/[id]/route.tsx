import { NextRequest, NextResponse } from "next/server"
import { getToken } from 'next-auth/jwt';
import { getCourseById } from '@/services';

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
  const token = await getToken({req, secret: process.env.JWT_SECRET})
  if (!token) {
    return NextResponse.json({error: "Unauthorized"}, {status: 401})
  }
  const course = await getCourseById(params.id)
  return NextResponse.json(course)
}