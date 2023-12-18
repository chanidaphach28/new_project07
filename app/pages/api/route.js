import connectMongoDB from "@/libs/mongodb";
import Dors from "@/models/dormitory";
import { NextResponse } from "next/server";


export async function GET() {
await connectMongoDB();
const dormitory=  await Dors.find();
return NextResponse.json({dormitory})
};