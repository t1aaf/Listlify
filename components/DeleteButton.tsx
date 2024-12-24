"use client";

import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

export default function DeleteButton({ title }: { title: string }) {
  const deleteNote = async () => {
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

  return (
    <Button onClick={deleteNote} variant={"destructive"}>
      <Trash2 className="mr-2 h-4 w-4" />
      Delete
    </Button>
  );
}
