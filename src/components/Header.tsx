import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, LogIn } from "lucide-react";
import bMessageLogo from "figma:asset/cc03478920f22c7a6d375bd33cb7170b81f53cf1.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Pricing", id: "pricing" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <img 
              src={bMessageLogo} 
              alt="bMessage"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl text-white">bMessage</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors duration-200 ${
                  currentPage === item.id
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-800">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                    currentPage === item.id
                      ? "text-yellow-400 bg-yellow-500/10"
                      : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black shadow-lg shadow-yellow-500/25"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
