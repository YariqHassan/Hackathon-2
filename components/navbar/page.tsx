'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="w-full px-[300px] pt-[14px] pb-[14px] flex items-center justify-between">
        <div className="hidden md:flex space-x-6  font-medium text-[#636270]">
          <Link href="/" className="activelink hover:text-[#007580]">
            Home
          </Link>
          <Link href="/products" className="hover:text-[#007580]">
            Shop
          </Link>
          <Link href="/singleproduct" className="hover:text-[#007580]">
            Product
          </Link>
          <Link href="/" className="hover:text-[#007580]">
            Pages
          </Link>
          <Link href="/about" className="hover:text-[#007580]">
            About
          </Link>
        </div>

        <div className="hidden md:flex text-gray-600">
          <span>
            <Link href="/contact">Contact: </Link>
            <span className='text-black'>(808) 555-0111</span>
          </span>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 py-4 px-4">
          <div className="space-y-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Shop</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Product</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Pages</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <div className="mt-4 text-gray-600">
              <span>Contact: (800) 555-0111</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
