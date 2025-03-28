<<<<<<< HEAD
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme for code highlighting

const sections = [
  "Number Theory",
  "Data Structures",
  "Segment Tree & BIT",
  "SQRT Decomposition & Mo's Algorithm",
  "STL",
  "DSU",
  "Sparse Table",
  "Graph Algorithms",
  "KMP & Z Algorithm",
  "Dynamic Programming",
  "LCS & LIS",
  "Trie",
  "Inclusion-Exclusion"
];

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender to-sky-200 text-gray-900">
      {/* Main Content */}
      <div className="container mx-auto p-8">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-purple-900 font-montserrat">Mitul’s CP Journey</h1>
          <p className="text-lg text-gray-700 font-roboto mt-3">
            Explore my competitive programming resources, tutorials, and problem-solving techniques!
          </p>
        </div> */}

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-3xl font-bold text-purple-800 font-montserrat">Welcome to My CP Journey!</h2>
            <p className="text-lg text-gray-700 font-roboto mt-4">
              Join me on an exciting journey through competitive programming. Explore topics, discover resources, 
              and dive into the experiences I’ve gained along the way. Let’s learn and grow together!
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <Image 
              src="/homepage_image.webp" 
              alt="Coding Workspace" 
              width={600} 
              height={400} 
              className="rounded-3xl shadow-xl border-4 border-white"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-purple-900 font-montserrat">Explore Topics:</h3>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {sections.map((section, index) => (
              <Link 
                key={index} 
                href={`/${section.toLowerCase().replace(/\s+/g, '-')}`} 
                className="px-5 py-2 bg-white rounded-lg shadow-md text-purple-700 font-roboto font-medium 
                          hover:bg-cyan-200 hover:text-purple-900 transition duration-300"
              >
                {section}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
=======
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
>>>>>>> origin/main
