import connectMongoDB from "@/libs/mongodb";
import Dors from  "@/models/dormitory";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { type,dorm_name,location,img,price,detail} = await request.json();
    await connectMongoDB();
    await Dors.create({type,dorm_name,location,img,price,detail});
    return NextResponse.json({message : "Register Success"},{status:201});
};

export async function GET() {
await connectMongoDB();
const dormitory =  await Dors.find();
return NextResponse.json({dormitory})
};