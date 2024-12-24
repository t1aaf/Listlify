import { NextResponse } from "next/server";
import { db, usersTable } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {

    try {
        const { name, email, password } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.insert(usersTable).values({
            name,
            email,
            password: hashedPassword
        });

    }
    catch (e) {
        console.log(e)
        return NextResponse.json(
            { message: "Error creating user" },
            { status: 500 }
        );
    }

    return NextResponse.json({ message: "success" })
}