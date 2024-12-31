import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Parse the URL from the request
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  const client_id = process.env.CLIENT_ID || "";
  const client_secret = process.env.CLIENT_SECRET || "";

  if (!code) {
    return NextResponse.json({ error: "Code is required" }, { status: 400 });
  }

  try {
    // Exchange the authorization code for an access token
    const response = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new URLSearchParams({
          client_id,
          client_secret,
          code,
        }),
      }
    );

    const data = await response.json();

    if (data.error) {
      return NextResponse.json(
        { error: data.error_description },
        { status: 400 }
      );
    }

    return NextResponse.json({ token: data.access_token }, { status: 200 });
  } catch (error) {
    console.dir(error);
    return NextResponse.json(
      { error: "Failed to fetch access token" },
      { status: 500 }
    );
  }
}
