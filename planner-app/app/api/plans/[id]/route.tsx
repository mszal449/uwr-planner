import {Plan} from '@/models';
import { NextRequest, NextResponse } from "next/server"
import { getId, putId } from "../../../../utils/requests";
import { getServerSession } from 'next-auth';
import options from '../../auth/[...nextauth]/options';

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
  return getId(req, {params}, Plan)
}

export async function PUT(req: NextRequest, {params}: {params: {id: string}}) {
  return putId(req, {params}, Plan)
}

