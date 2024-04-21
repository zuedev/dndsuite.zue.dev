import { NextResponse } from "next/server";
import getGitCommitHash from "library/execSync/getGitCommitHash.js";

export async function GET() {
  const gitCommitHash = await getGitCommitHash();
  const defaultDataUrl = process.env.DEFAULT_DATA_URL || 0;

  return NextResponse.json({ gitCommitHash, defaultDataUrl });
}
