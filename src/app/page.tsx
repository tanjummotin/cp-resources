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
