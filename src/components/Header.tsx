import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/vercel.svg" alt="Logo" width={40} height={40} />
          <span className="ml-2 text-xl font-bold">PhucTBH</span>
        </Link>
        
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blockchain">Blockchain</Link></li>
            <li><Link href="/software">Software</Link></li>
            <li><Link href="/story">Story</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;