import mongoose from "mongoose";

import connectDB from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";


export function isAdmin(id: any) {
  return process.env.ADMINS?.split(' ').includes(id)
}

// Get records
export async function getReq(
  req: NextRequest, model: mongoose.Model<any>, 
  stringFields?: string[], arrayFields?: string[], numberFields?: string[]
) {
  await connectDB();

  // read filters
  const url = new URL(req.url);
  const searchParams = url.searchParams;

  let params: Record<string, any> = {};

  // filters matching regexes, for example 'name'
  stringFields?.forEach(field => {
    const value = searchParams.get(field);
    if (value) {
      params[field] = { '$regex': value, '$options': 'i' };
    }
  });

  // filters checking arrays' including, for example 'tags'
  arrayFields?.forEach(field => {
    const value = searchParams.get(field);
    if (value) {
      const filterArray = value.split(',');
      params[field] = { '$all': filterArray };
    }
  });

  // filters for numbers, for example 'ects' points
  numberFields?.forEach(field => {
    const gteValue = searchParams.get(`${field}_gte`);
    const lteValue = searchParams.get(`${field}_lte`);
    if (gteValue || lteValue) {
      params[field] = {};
      if (gteValue) {
        params[field]['$gte'] = parseInt(gteValue);
      }
      if (lteValue) {
        params[field]['$lte'] = parseInt(lteValue);
      }
    }
  });

  const data = await model.find(params);
  const maxLength = data.length;
  const result = data.slice();
  return NextResponse.json({result, maxLength})
}

// Get 1 record from given id
export async function getId(req: NextRequest, {params}: {params: {id: string}}, model: mongoose.Model<any>) {
  await connectDB();

  const {id} = params
  const record = await model.findById(id);

  if (!record) {
    return NextResponse.json({'status': 'error', 'message': "can't find plan"});
  }

  return NextResponse.json(record);
}

// Create a new record
export async function postReq(req: NextRequest, model: mongoose.Model<any>) {
  
  await connectDB();
  const body = await req.json();


  let instance;
  try {
    instance = await model.create(body);
  } catch (error) {
    let message;
    if (error instanceof Error){
      message = error.message;
      return NextResponse.json({ 'status': 'error', 'message': message });
    }
    return NextResponse.json({ 'status': 'error', 'message': 'An unknown error occured' });
  }


  return NextResponse.json(instance);
}

// Updating record(s)
export async function putReq(req: NextRequest, model: mongoose.Model<any>) {

  await connectDB();
  const body = await req.json();
  const { _id, ...updateData } = body;

  if (!_id) {
    return NextResponse.json({ status: 'error', message: 'ID is required' });
  }

  let updatedInstance;
  try {
    updatedInstance = await model.findByIdAndUpdate(_id, updateData, { new: true });
    if (!updatedInstance) {
      return NextResponse.json({ status: 'error', message: 'Record not found' });
    }
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
      return NextResponse.json({ status: 'error', message: message });
    }
    return NextResponse.json({ status: 'error', message: 'An unknown error occurred' });
  }

  return NextResponse.json(updatedInstance);
}

// Updating 1 record from given id
export async function putId(req: NextRequest, {params}: {params: {id: string}}, model: mongoose.Model<any>) {
  await connectDB();

  const body = await req.json();

  let updatedInstance;
  try {
    updatedInstance = await model.findByIdAndUpdate(params.id, body, { new: true });
    if (!updatedInstance) {
      return NextResponse.json({ status: 'error', message: 'Record not found' });
    }
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
      return NextResponse.json({ status: 'error', message: message });
    }
    return NextResponse.json({ status: 'error', message: 'An unknown error occurred' });
  }

  return NextResponse.json(updatedInstance);
}
