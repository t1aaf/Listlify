"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";

const deleteNote = async (title: string) => {
  const response = await fetch("/api/delete-note", {
    method: "POST",
    body: JSON.stringify({
      title,    
    }),
  });

  if (response.ok) {
    redirect("/");
  }
};

export default function ConfirmDeletePage({
  params,
}: {
  params: { title: string };
}) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    const { title } = await params;
    const decodedTitle = decodeURIComponent(title);
    setIsDeleting(true);
    await deleteNote(decodedTitle);
    setIsDeleting(false);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-sky-100 p-6 flex items-center justify-center">
      <Card className="w-full max-w-md bg-white/30 backdrop-blur-lg shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-800">
            Confirm Delete
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-600">
            Are you sure you want to delete the note ?
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Cancel
            </Link>
          </Button>
          <Button onClick={handleDelete} disabled={isDeleting} variant={"destructive"}>
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
