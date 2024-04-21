import { NextResponse } from "next/server";

export async function GET() {
  const systemInfo = {
    name: "Alchemy",
    description: "Combining reagents to produce mystical effects.",
    version: "0.0.1",
    emoji: "⚗️",
  };

  return NextResponse.json(systemInfo);
}
