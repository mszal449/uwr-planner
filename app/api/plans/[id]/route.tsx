import { NextRequest, NextResponse } from "next/server"
import { isAdmin } from "../../../../utils/requests";
import { getToken } from 'next-auth/jwt';
import { getPlanById } from '@/services';
import { deletePlan, updatePlan } from '@/services/planService';
import { PlanI } from '@/types';

interface Response {
  status: string;
  result?: PlanI;
  error?: string;
}

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET })

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const plan: Response = await getPlanById(params.id)
  if (plan.status === 'error') {
    return NextResponse.json({ error: 'Plan not found' }, {status: 404})
  }

  if(isAdmin(token.id) || plan.result?.user === token.id) {
    return NextResponse.json(plan.result)
  } 

  return NextResponse.json({error: 'Unauthorized'}, {status: 401})
}

export async function PUT(req: NextRequest, {params}: {params: {id: string}}) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET })
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json()

  if (isAdmin(token.id)) {
    const plan = await updatePlan(params.id, body)
    return NextResponse.json({status: 'success', plan})
  }

  if(token.id === body.user) {
    const plan = updatePlan(params.id, body)
    return NextResponse.json({status: 'success', plan})
  }

  return NextResponse.json({error: 'Unauthorized'}, {status: 401})
}

export async function DELETE(req: NextRequest, {params}: {params: {id: string}}) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET })

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const plan: Response = await getPlanById(params.id)
  if (plan.status === 'error') {
    return NextResponse.json({ error: 'Plan not found' }, {status: 404})
  }

  if(isAdmin(token.id) || plan.result?.user === token.id) {
    const response: Response = await deletePlan(params.id)

    if(response.status === 'error') {
      return NextResponse.json({error: 'Failed to delete plan', message: response.error}, {status: 500})
    }

    return NextResponse.json({status: 'success', plan: response.result})
  } 
  return NextResponse.json({error: 'Unauthorized'}, {status: 401})
}