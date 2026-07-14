const commands = [
  "$ neofetch",
  "$ ip a",
  "$ ping google.com",
  "$ ssh admin@router",
  "$ systemctl status nginx",
  "$ docker ps",
  "$ mikrotik-export",
];

export default function Terminal() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0d1117] shadow-2xl">

        {/* Header */}
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-4 text-sm text-gray-400">
            khafid@cachyos
          </span>
        </div>

        {/* Terminal */}
        <div className="space-y-3 p-6 font-mono text-green-400">
          {commands.map((cmd) => (
            <p key={cmd}>
              {cmd}
            </p>
          ))}

          <span className="animate-pulse">█</span>
        </div>
      </div>
    </section>
  );
}