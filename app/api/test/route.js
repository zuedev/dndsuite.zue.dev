import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ method: "GET" });
}

export async function POST(request) {
  const responseJson = await request.json();

  return NextResponse.json({ method: "POST", body: responseJson });
}

export async function PUT(request) {
  const responseJson = await request.json();

  return NextResponse.json({ method: "PUT", body: responseJson });
}

export async function PATCH(request) {
  const responseJson = await request.json();

  return NextResponse.json({ method: "PATCH", body: responseJson });
}

export async function DELETE() {
  return NextResponse.json({ method: "DELETE" });
}

export async function HEAD() {
  return NextResponse.json({ method: "HEAD" });
}

export async function OPTIONS() {
  return NextResponse.json({ method: "OPTIONS" });
}
