import { PlanI } from '@/types';
import { Plan } from '@/models';
import connectDB from '@/lib/connectDB';

// Get all plans
export async function getAllPlans() {
  try {
    await connectDB();
    const data = await Plan.find();
    return { status: 'success', result: data, maxLength: data.length };
  } catch (error) {
    return handleError(error);
  }
}

// Get plans by user ID
export async function getUserPlans(id: string) {
  try {
    await connectDB();
    const data = await Plan.find({ user: id });
    return { status: 'success', result: data, maxLength: data.length };
  } catch (error) {
    return handleError(error);
  }
}

// Get plan by ID
export async function getPlanById(id: string) {
  try {
    await connectDB();
    const plan = await Plan.findById(id);
    if (!plan) {
      return { status: 'error', message: "Plan not found" };
    }
    return { status: 'success', result: plan };
  } catch (error) {
    return handleError(error);
  }
}

// Add a new plan
export async function addPlan({ user, name, degree }: { user: string; name: string; degree: string }) {
  try {
    await connectDB();
    const plan = await Plan.create({ user, name, degree });
    return { status: 'success', result: plan };
  } catch (error) {
    return handleError(error);
  }
}

// Update a plan by ID
export async function updatePlan(id: string, updatedPlan: PlanI) {
  try {
    await connectDB();
    const plan = await Plan.findByIdAndUpdate(id, updatedPlan, { new: true });
    if (!plan) {
      return { status: 'error', message: 'Plan not found' };
    }
    return { status: 'success', result: plan };
  } catch (error) {
    return handleError(error);
  }
}

// Helper function for error handling
function handleError(error: unknown) {
  if (error instanceof Error) {
    return { status: 'error', message: error.message };
  }
  return { status: 'error', message: 'An unknown error occurred' };
}
