import { NextResponse } from "next/server";

const members = [
  { id: 1, name: "Rhea Sharma", goal: "Strength training", plan: "Elite" },
  { id: 2, name: "Daniel Mehta", goal: "Muscle gain", plan: "Athlete" },
  { id: 3, name: "Kiara Thomas", goal: "Weight loss", plan: "Starter" },
  { id: 4, name: "Arjun Rao", goal: "Boxing fitness", plan: "Elite" },
  { id: 5, name: "Nina Patel", goal: "Mobility", plan: "Starter" },
  { id: 6, name: "Kabir Singh", goal: "Endurance", plan: "Athlete" },
  { id: 7, name: "Maya Kapoor", goal: "HIIT", plan: "Elite" },
  { id: 8, name: "Vivaan Joshi", goal: "Powerlifting", plan: "Athlete" },
  { id: 9, name: "Anika Das", goal: "General fitness", plan: "Starter" },
  { id: 10, name: "Ishaan Gupta", goal: "Sports performance", plan: "Athlete" },
  { id: 11, name: "Sara Khan", goal: "Recovery routine", plan: "Elite" },
  { id: 12, name: "Neil Dsouza", goal: "Body recomposition", plan: "Elite" }
];

function getPositiveNumber(value, fallback) {
  const number = Number(value);

  if (!Number.isInteger(number) || number < 1) {
    return fallback;
  }

  return number;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = getPositiveNumber(searchParams.get("page"), 1);
  const limit = Math.min(getPositiveNumber(searchParams.get("limit"), 5), 20);
  const total = members.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const data = members.slice(start, start + limit);

  return NextResponse.json({
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1
    }
  });
}
