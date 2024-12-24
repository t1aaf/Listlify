import { auth } from "@/auth"
import { db, todoTable } from "@/lib/db"
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server"

export async function POST(req : Request) {

    const session = await auth();

    if (!session) {
        return NextResponse.json(
            { message: "You are not logged in" },
            { status: 401 }
        )
    }

    try {
        
        const { title } = await req.json()
        
        await db.delete(todoTable).where(eq(todoTable.title, title))

        return NextResponse.json(
            { message: "Note created successfully" },
        )
    }

    catch (e) {

        console.log(e);
        
        return NextResponse.json(
            { message: "Error creating note" },
        )
    }
}
