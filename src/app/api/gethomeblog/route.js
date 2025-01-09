import { NextResponse } from "next/server";

const EXTERNAL_API_URL = `${process.env.NEXT_PUBLIC_APP_BLOGS_API_URL}wp-blogs/resources?limit=10`;

export async function GET() {
  try {
    const res = await fetch(EXTERNAL_API_URL);
    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data from external API" },
        { status: 500 }
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
