"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EditNoteForm({ oldTitle, oldContent } : { oldTitle : string, oldContent : string }) {
  const router = useRouter();
  const [title, setTitle] = useState(oldTitle);
  const [content, setContent] = useState(oldContent);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/update-note", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
    });    
    
    if (response.ok) {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen p-6 flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-100 to-sky-100">
      <Card className="w-full max-w-xl bg-white/30 backdrop-blur-lg shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              <span>Back to Notes</span>
            </Link>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="text-sm font-medium text-blue-800"
              >
                Title
              </label>
              <Input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-white/50 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                disabled
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="content"
                className="text-sm font-medium text-blue-800"
              >
                Content
              </label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
                className="bg-white/50 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Save Note
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
