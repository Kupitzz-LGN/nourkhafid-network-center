import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-center text-5xl font-black">
        Technical{" "}
        <span className="text-cyan-400">
          Skills
        </span>
      </h2>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400"
            >
              <Icon
                className={`${skill.color} h-10 w-10`}
              />

              <h3 className="mt-6 text-2xl font-bold">
                {skill.title}
              </h3>

              <p className="mt-2 text-gray-400">
                {skill.level}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}