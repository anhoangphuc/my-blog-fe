import Link from 'next/link';
import Image from 'next/image';

const NavLink = ({ href, children}: { href: string, children: React.ReactNode }) => {
  return (
    <Link href={href} className="relative group">
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-[-4px] left-0 w-full h-0 bg-yellow-300 transition-all duration-300 group-hover:h-0.5 -z-10"></span>
    </Link>
  )
}

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-4 shadow-md z-10">
      <div className="container mx-auto flex items-center relative">
        <Link href="/" className="flex items-center">
          <Image src="/vercel.svg" alt="Logo" width={40} height={40} />
          <span className="ml-2 text-2xl font-bold">PhucTBH</span>
        </Link>
        
        <nav className="absolute left-1/2 transform -translate-x-1/2 text-2xl">
          <ul className="flex space-x-6">
            <li><NavLink href='/'>Home</NavLink></li>
            <li><NavLink href="/blockchain">Blockchain</NavLink></li>
            <li><NavLink href="/software">Software</NavLink></li>
            <li><NavLink href="/program">Program</NavLink></li>
            <li><NavLink href="/story">Story</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;