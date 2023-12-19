import connectMongoDB from "@/libs/mongodb";
import Dors from "@/models/dormitory";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {A:new_infoA , B:new_infoB} = await request.json();
  await connectMongoDB();
  await Dors.findByIdAndUpdate(id, {A,B});
  return NextResponse.json({ message: "User updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const dormitory = await Dore.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}