"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          aidexx
        </h1>
      </Link>

      <div className="flex items-center gap-x-5">
         {/* About Link */}
         <Link href="/about">
          <Button className="text-white">About</Button>
        </Link>
        {/* Products Dropdown */}
        <div className="relative">
          <select className="rounded-full bg-[#111827] text-white p-4">
            <option value="#">Products</option>
            <option value="/photo-generation">Photo Generation</option>
            <option value="/code-generation">Code Generation</option>
            <option value="/screenshot-to-code">Screenshot 2 Code</option>
            <option value="/music-generation">Music Generation</option>
            <option value="/video-generation">Video Generation</option>
            <option value="/chatbot">Chatbot</option>
          </select>
        </div>

        {/* Get Started Button */}
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="rounded-full">
            Try aidexx
          </Button>
        </Link>
      </div>
    </nav>
  );
};
