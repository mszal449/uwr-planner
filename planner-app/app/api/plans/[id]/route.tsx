import {Plan} from '@/models';
import { NextRequest } from "next/server"
import { getId, putId } from "../../../../utils/requests";

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
  return getId(req, {params}, Plan)
}

export async function PUT(req: NextRequest, {params}: {params: {id: string}}) {
  return putId(req, {params}, Plan)
}