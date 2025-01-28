"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Github,
  Instagram,
  LogOut,
  Plus,
  Menu,
  X,
  LogOutIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Portfolio", icon: User, url: "https://tariq-hassan.vercel.app/" },
    { name: "GitHub", icon: Github, url: "https://github.com/t1aaf" },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/_t1aaf/",
    },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-full shadow-lg p-2 flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/20 hover:bg-white/30 sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        {links.map((link) => (
          <Button
            key={link.name}
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/20 hover:bg-white/30 hidden sm:inline-flex"
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <link.icon className="h-5 w-5" />
              <span className="sr-only">{link.name}</span>
            </a>
          </Button>
        ))}

        <div className="w-px h-6 bg-gray-500 mx-2 hidden md:block" />

        <Button
          asChild
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/20 hover:bg-white/30"
        >
          <Link href="/add">
            <Plus className="h-5 w-5" />
            <span className="sr-only">Add Note</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/20 hover:bg-white/30"
        >
          <Link href="/api/auth/signout">
            <LogOutIcon className="h-5 w-5" />
            <span className="sr-only">Log Out</span>
          </Link>
        </Button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-2 sm:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 hover:bg-white/50 rounded-md"
            >
              <link.icon className="mr-2 h-4 w-4" />
              <span>{link.name}</span>
            </a>
          ))}
          <div className="w-full h-px bg-gray-200 my-2" />
          <button className="flex items-center w-full p-2 hover:bg-white/50 rounded-md">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </button>
        </div>
      )}
    </nav>
  );
}
