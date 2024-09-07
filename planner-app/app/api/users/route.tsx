import connectDB from "@/lib/connectDB";
import {User} from "@/models/";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();

  // read filters
  const url = new URL(req.url);
  const searchParams = url.searchParams;

  let params: { 
    name?: string | {
      $regex: string | undefined,
      $options: string | undefined 
    },
    degree?: string | {
      $regex: string | undefined,
      $options: string | undefined 
    },
  } = {};
  
  if (searchParams.has('name')) {
    params.name = {'$regex': searchParams.get('name') || undefined, '$options': 'i'};
  }

  if (searchParams.has('description')) {
    params.degree = {'$regex': searchParams.get('description') || undefined, '$options': 'i'};
  }


  const data = await User.find(params);
  const maxLength = data.length;
  const result = data.slice(0, 10);
  return NextResponse.json({result, maxLength: maxLength})
}

// Create a new website
export async function POST(req: NextRequest) {
  
  await connectDB();
  const body = await req.json();


  let website;
  try {
    website = await User.create(body);
  } catch (error) {
    let message;
    if (error instanceof Error){
      message = error.message;
      return NextResponse.json({ 'status': 'error', 'message': message });
    }
    return NextResponse.json({ 'status': 'error', 'message': 'An unknown error occured' });
  }


  return NextResponse.json(website);
}
