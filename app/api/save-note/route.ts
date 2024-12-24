import { auth } from "@/auth"
import { db, todoTable } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

    const session = await auth();

    try {
        const { head, content } = await req.json()
        await db.insert(todoTable).values({
            title: head,
            content,
            userEmail: session?.user?.email
        })

        return NextResponse.json(
            { message: "Note created successfully" },
        )
    }

    catch (e) {

        return NextResponse.json(
            { message: "Error creating note" },
        )
    }
}
