import connectDB from "@/lib/connectDB";
import {Course} from "@/models/";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();

  // read filters
  const url = new URL(req.url);
  const searchParams = url.searchParams;

  // todo: do dopracowania te searchparamsy, bo np ectsy powinny być z przedziału, tagi powinny być listą itd
  let params: { 
    name?: string | {
      $regex: string | undefined,
      $options: string | undefined 
    },
    semester?: string | {
      $regex: string | undefined,
      $options: string | undefined 
    },
    type?: string | {
      $regex: string | undefined,
      $options: string | undefined 
    }
  } = {};
  
  if (searchParams.has('name')) {
    params.name = {'$regex': searchParams.get('name') || undefined, '$options': 'i'};
  }

  if (searchParams.has('semester')) {
    params.semester = {'$regex': searchParams.get('semester') || undefined, '$options': 'i'};
  }

  if (searchParams.has('type')) {
    params.type = {'$regex': searchParams.get('type') || undefined, '$options': 'i'};
  }


  const data = await Course.find(params);
  const maxLength = data.length;
  const result = data.slice(0, maxLength);
  return NextResponse.json({result, maxLength: maxLength})
}

// Create a new website
export async function POST(req: NextRequest) {
  
  await connectDB();
  const body = await req.json();


  let website;
  try {
    website = await Course.create(body);
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