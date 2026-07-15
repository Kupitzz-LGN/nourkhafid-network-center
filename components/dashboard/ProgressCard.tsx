import ProgressBar from "./ProgressBar";

const skills = [
  { name: "Linux", value: 90 },
  { name: "MikroTik", value: 85 },
  { name: "Cisco", value: 75 },
  { name: "AWS", value: 60 },
  { name: "Docker", value: 70 },
];

export default function ProgressCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-6 text-2xl font-bold text-cyan-400">
        Learning Progress
      </h2>

      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex justify-between">
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>

            <ProgressBar value={skill.value} />
          </div>
        ))}
      </div>
    </div>
  );
}