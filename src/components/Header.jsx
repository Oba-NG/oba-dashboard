import logo from "../assets/oba-logo.png";

export default function Header() {
  return (
    <header className="shadow-md bg-[--bg-color] sticky top-0 z-50">
      <div className="p-5 flex gap-5 justify-between items-center max-w-[1200px] mx-auto">
        {/* logo */}
        <div className="w-20">
          <img
            src={logo}
            alt="Oba Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* menu */}
        <div className="hidden md:flex gap-10 text-[--grey]">
          <a href="/">Home</a>
          <a href="/" className="active">
            Market
          </a>
          <a href="/">Account</a>
          <a href="/">Search</a>
          <a href="/">Mic</a>
          <a href="/">Cart</a>
        </div>

        {/* user */}
        <div className="flex items-center gap-1">
          {/* avatar  */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://i.pravatar.cc/150"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* username  */}
          <p className="text-[--grey]">
            Welcome,{" "}
            <span className="font-semibold text-lg text-black">Ijeoma</span>
          </p>
        </div>
      </div>
    </header>
  );
}
