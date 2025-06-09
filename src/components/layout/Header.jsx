import { Mic, Search, ShoppingCart, SlidersVertical } from "lucide-react";
import logo from "@/assets/oba-logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const cartCount = 3;
  return (
    <header className="bg-[#F9F8F6] shadow-md sticky top-0 z-50 text-sm">
      <div className="px-5 py-3 flex gap-5 justify-between items-center max-w-[1200px] mx-auto">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="Oba Logo" className="w-3/4 object-contain" />
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-[#666666]">
          <a href="/" className="hover:text-black hover:font-semibold">
            Home
          </a>
          <a href="/market" className="hover:font-semibold">
            Market
          </a>
          <a href="/" className="hover:text-black hover:font-semibold">
            Account
          </a>

          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 w-[300px] bg-white text-gray-800">
            <SlidersVertical className="w-5 h-5 text-[#1C3812] mr-2" />
            <input
              type="text"
              placeholder="Search Product"
              className="flex-grow outline-none text-sm placeholder:text-[#666666]"
            />
            <Search className="w-5 h-5 text-[#1C3812] ml-2" />
          </div>

          {/* Microphone */}
          <a href="/" className="text-[#1C3812] hover:text-black">
            <Mic className="w-5 h-5" />
          </a>

          {/* Cart */}
          <div className="relative">
            <a href="/cart" className="text-black hover:text-gray-600">
              <ShoppingCart size={20} />
            </a>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </nav>

        {/* User Section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://i.pravatar.cc/150"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[#666666]">
            Hello, <span className="font-semibold text-black">Nwabueze</span>
          </p>
        </div>
      </div>
    </header>
  );
}
