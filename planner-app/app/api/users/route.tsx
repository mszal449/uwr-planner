import {User} from "@/models/";
import { NextRequest } from "next/server";
import { getReq, postReq, putReq } from "../../../utils/requests";

// Get users
export async function GET(req: NextRequest) {
  return getReq(req, User, ["name"])
}

// Create a new user
export async function POST(req: NextRequest) {
  return postReq(req, User)
}

// Update user
export async function PUT(req: NextRequest) {
  return putReq(req, User)
}
