import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2 } from "lucide-react";

interface NoteProps {
  title: string;
  content: string;
}

export function Note({ title, content }: NoteProps) {
  return (
    <Card className="h-full bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-colors flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-blue-800 truncate">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-blue-600 line-clamp-4">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2 pt-4 border-t border-blue-100">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/notes/${title}`}>
            <Eye className="h-4 w-4 text-blue-600" />
            <span className="sr-only">View</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/edit/${title}`}>
            <Edit className="h-4 w-4 text-blue-600" />
            <span className="sr-only">Edit</span>
          </Link>
        </Button>
        <Button variant="destructive" size="sm" asChild>
          <Link href={`/delete/${title}`}>
            <Trash2 />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
