import { NextResponse } from "next/server";
import { db, todoTable } from "@/lib/db";
import { auth } from "@/auth";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const session = await auth();
  const { title, content } = await req.json();

  if (!session?.user) {
    return NextResponse.json(
      { message: "You are not logged in" },
      { status: 500 }
    );
  }

  try {
    const response = await db
      .update(todoTable)
      .set({
        content: content,
      })
      .where(eq(todoTable.title, title));        

    return NextResponse.json(response);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Error !" });
  }
}
