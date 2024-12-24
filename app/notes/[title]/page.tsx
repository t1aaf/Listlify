import { db, todoTable } from "@/lib/db";
import Link from "next/link";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { eq } from "drizzle-orm";

async function getNote(title: string) {
  const response = await db
    .select()
    .from(todoTable)
    .where(eq(todoTable.title, title));

  return response[0];
}

export default async function NotePage({
  params,
}: {
  params: { title: string };
}) {

  const { title } = await params;
  const note = await getNote(title);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-sky-100 p-6">
      <Card className="max-w-2xl mx-auto bg-white/30 backdrop-blur-lg shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <Link
            href="/"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            <span>Back to Notes</span>
          </Link>
          <div>
            <Button className="mr-2" variant="outline" size="sm" asChild>
              <Link href={`/edit/${note.title}`}>
                <Edit />
              </Link>
            </Button>
            <Button variant="destructive" size="sm" asChild>
              <Link href={`/delete/${note.title}`}>
                <Trash2 />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl font-bold text-blue-800 mb-4">
            {note.title}
          </CardTitle>
          <p className="text-blue-600 whitespace-pre-wrap">{note.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
