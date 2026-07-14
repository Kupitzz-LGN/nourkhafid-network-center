const stats = [
  {
    title: "Projects",
    value: "15+",
    description: "Networking & Cloud",
  },
  {
    title: "Technologies",
    value: "20+",
    description: "Linux, MikroTik, Cisco",
  },
  {
    title: "Experience",
    value: "6 Mo",
    description: "Internship at Desnet",
  },
  {
    title: "Learning",
    value: "24/7",
    description: "Always Improving",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-500/10"
          >
            <p className="text-5xl font-black text-cyan-400">
              {item.value}
            </p>

            <h3 className="mt-5 text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}