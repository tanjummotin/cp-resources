"use client";
import { useState } from "react";
import Link from "next/link";

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
  "Inclusion-Exclusion",
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-400 p-4 shadow-lg rounded-b-2xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Site Title */}
        <h1 className="text-4xl font-extrabold text-white font-montserrat">
          Mitul’s CP Journey
        </h1>

        {/* Navbar Links */}
        <div className="flex space-x-8 text-lg font-roboto">
          <Link href="/" className="text-white hover:text-gray-200 transition duration-300">
            Home
          </Link>

          {/* Dropdown for Topics */}
          <div className="relative">
            <button
              className="text-white hover:text-gray-200 transition duration-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              All CP Topics
            </button>

            {dropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-56 transition-all duration-300 z-50">
                {sections.map((section) => (
                  <Link
                    key={section}
                    href={`/${section.replace(/\s+/g, "-").toLowerCase()}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-400 hover:text-white rounded-md transition duration-300"
                  >
                    {section}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="text-white hover:text-gray-200 transition duration-300">
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
