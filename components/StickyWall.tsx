"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Note } from "./Note";
import Link from "next/link";

interface NoteData {
  id: number;
  title: string;
  content: string;
}

export default function StickyWall() {
  const [notes, setNotes] = useState<NoteData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/get-notes")
      const data = await response.json()
      
      setNotes(data)
      setLoading(false)
    };

    fetchNotes();
  }, []);

  if (loading) {
    return <div className="text-center text-blue-600">Loading notes...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {notes.map(note => (
        <Note key={note.title} title={note.title} content={note.content} />
      ))}
      <Button
        asChild
        variant="outline"
        className="h-full min-h-[200px] border-2 border-dashed border-blue-300 bg-white/50 hover:bg-blue-100 transition-colors flex flex-col items-center justify-center text-blue-500 hover:text-blue-600"
      >
        <Link href="/add">
          <Plus className="h-8 w-8 mb-2" />
          <span>Add New Note</span>
        </Link>
      </Button>
    </div>
  );
}
