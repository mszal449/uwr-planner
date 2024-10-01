import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "../../../utils/requests";
import { getToken } from "next-auth/jwt";
import { addPlan, getAllPlans, getUserPlans } from "@/services";

interface Response {
    status: string;
    result?: any[];
    maxLength?: number;
} 

// Get plans
export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = req.nextUrl.searchParams.get('user');

  if (isAdmin(token.id)) {
    const data: Response = userId ? await getUserPlans(userId) : await getAllPlans();
    return data.result ? NextResponse.json({ result: data.result }) : NextResponse.json({ error: "Failed to get plans" }, { status: 500 });
  }

  if (userId && userId === token.id) {
    const data: Response = await getUserPlans(userId);
    return data.result ? NextResponse.json({ result: data.result }) : NextResponse.json({ error: "Failed to get plans" }, { status: 500 });
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

// Create a new plan
export async function POST(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const userId = body.user;

  if (isAdmin(token.id)) {
    if (!userId) {
      return NextResponse.json({ error: "User ID missing" }, { status: 400 });
    }

    const plan: Response = await addPlan({ user: userId, ...body });
    return plan.result ? NextResponse.json({ result: plan.result }) : NextResponse.json({ error: "Failed to create plan" }, { status: 500 });
  }

  if (userId !== token.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const plan = await addPlan({ user: token.id, ...body });
  return NextResponse.json({ result: plan });
}
