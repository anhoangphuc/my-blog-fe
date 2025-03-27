'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  return (
    <Link href={href} className="relative group" onClick={onClick}>
      <span className="relative z-10 text-xl">{children}</span>
      <span className="absolute bottom-[-4px] left-0 w-full h-0 bg-yellow-300 transition-all duration-300 group-hover:h-0.5 -z-10"></span>
    </Link>
  )
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full py-4 shadow-md z-10">
      <div className="container mx-auto flex items-center relative">
        <Link href="/" className="flex items-center">
          <Image src="/vercel.svg" alt="Logo" width={40} height={40} />
          <span className="ml-2 text-2xl font-bold">PHUCTBH</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-2xl">
          <ul className="flex space-x-6">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/blockchain">Blockchain</NavLink>
            </li>
            <li>
              <NavLink href="/software">Software</NavLink>
            </li>
            <li>
              <NavLink href="/program">Program</NavLink>
            </li>
            <li>
              <NavLink href="/story">Story</NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none absolute right-4"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 shadow-md z-20">
            <nav className="container mx-auto py-4">
              <ul className="flex flex-col space-y-4 px-0">
                <li>
                  <NavLink href="/" onClick={closeMenu}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/blockchain" onClick={closeMenu}>
                    Blockchain
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/software" onClick={closeMenu}>
                    Software
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/program" onClick={closeMenu}>
                    Program
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/story" onClick={closeMenu}>
                    Story
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
