import { NextResponse } from "next/server";
import { db, todoTable } from "@/lib/db";
import { auth } from "@/auth";
import { eq } from "drizzle-orm";

export async function GET() {
  const session = await auth();
  const email = session?.user?.email;

  if (!session?.user) {
    return NextResponse.json(
      { message: "You are not logged in" },
      { status: 500 }
    );
  }

  try {
    const response = await db
      .select()
      .from(todoTable)
      .where(eq(todoTable.userEmail, email as string));

    return NextResponse.json(response)
    
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Error !" });
  }

  return NextResponse.json({ message: "success" });
}
