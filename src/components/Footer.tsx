import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors">Services</Link>
            <Link href="/pricing" className="text-gray-400 hover:text-yellow-400 transition-colors">Pricing</Link>
            <Link href="/apply" className="text-gray-400 hover:text-yellow-400 transition-colors">Apply</Link>
            <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</Link>
          </nav>

          <div className="flex gap-3">
            <a href="#" aria-label="LinkedIn"
               className="w-8 h-8 bg-gray-800 hover:bg-yellow-500/20 rounded-full flex items-center justify-center transition-colors">
              <span className="text-gray-400 hover:text-yellow-400 text-sm">in</span>
            </a>
            <a href="#" aria-label="Twitter/X"
               className="w-8 h-8 bg-gray-800 hover:bg-yellow-500/20 rounded-full flex items-center justify-center transition-colors">
              <span className="text-gray-400 hover:text-yellow-400 text-sm">tw</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">Â© {new Date().getFullYear()} bMessage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

