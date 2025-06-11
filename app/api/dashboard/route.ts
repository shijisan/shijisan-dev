// api/dashboard/route.ts

import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/utils/firebaseAdmin";

export async function GET() {
  const dashboardDataRef = adminDb.collection("dashboardData").doc("1");
  const dashboardDataSnap = await dashboardDataRef.get();

  if (!dashboardDataSnap.exists) {
    return NextResponse.json({ message: "No dashboard data" }, { status: 404 });
  }

  const data = dashboardDataSnap.data();

  return NextResponse.json(data);
}


export async function POST(req: NextRequest) {
	const { status, work } = await req.json();

	await adminDb
		.collection("dashboardData")
		.doc("1")
		.set({ status, work }, { merge: true });

	return NextResponse.json({ message: "Dashboard data saved successfully." });
}
