import { db, todoTable } from "@/lib/db"
import { eq } from "drizzle-orm"
import EditNoteForm from "./Form"

export default async function EditPage({params}: {params: Promise<{ title: string }>}) {
    const { title } = await params
    const response = await db.select().from(todoTable).where(eq(todoTable.title, title))
    const note = response[0]

    return (
        <div>
            <EditNoteForm oldTitle={title} oldContent={note.content as string} />
        </div>
    )   
}