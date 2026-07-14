const navItems = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "Documentation", href: "#docs" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-cyan-400"
        >
          NourKhafid<span className="text-white">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}