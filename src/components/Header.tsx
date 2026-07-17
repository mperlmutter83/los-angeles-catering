'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/5081ed9e-50fd-43f2-be83-ef7144b87f5e.png"
              alt="Los Angeles Catering & Full Bar"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Contact Us
            </Link>
            <a href="tel:+13106517590" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
              (310) 651-7590
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-sm font-medium text-orange-500">Home</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-orange-500">Contact Us</Link>
              <a href="tel:+13106517590" className="text-sm font-medium text-gray-700">(310) 651-7590</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
