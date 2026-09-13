import { useState } from "react";

const NAV_LINKS = [
  { label: "", href: "#" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="flex h-[70px] items-center justify-between px-5 sm:px-[7%]">
        {/* Hamburger (mobile only) */}
        <button
          className="text-xl sm:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-bold">
          <span className="flex h-[25px] w-[25px] items-center justify-center rounded-md bg-brand text-[10px] text-white">
            DS
          </span>
          <span>
            Dev{" "}
            <b className="bg-brand bg-clip-text text-transparent">Stack</b>
          </span>
        </div>

        {/* Center nav links (desktop) */}
        <nav className="hidden gap-8 text-[13px] text-slate-600 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.label === "Home"
                  ? "text-brand-pink"
                  : "hover:text-slate-900"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-5 text-[13px] text-slate-600">
          <a href="#" className="hidden sm:inline hover:text-slate-900">
            Sign In
          </a>
          <button className="rounded-full bg-brand px-5 py-2.5 text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile nav links */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-gray-100 px-5 py-4 text-sm text-slate-600 sm:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={link.label === "Home" ? "text-brand-pink" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
