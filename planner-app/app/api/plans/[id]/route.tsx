import {Plan} from '@/models';
import { NextRequest } from "next/server"
import { getId } from "../../../../utils/requests";

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
  return getId(req, {params}, Plan)
}