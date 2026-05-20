const skills = [
  { name: "React", level: 90, color: "bg-blue-500" },
  { name: "TypeScript", level: 85, color: "bg-indigo-500" },
  { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
  { name: "Next.js", level: 80, color: "bg-slate-700" },
  { name: "Node.js", level: 70, color: "bg-green-500" },
  { name: "Git & GitHub", level: 85, color: "bg-orange-500" },
];

const tools = [
  { name: "VS Code", icon: "💻" },
  { name: "Figma", icon: "🎨" },
  { name: "Chrome DevTools", icon: "🔧" },
  { name: "Postman", icon: "📬" },
  { name: "Vercel", icon: "▲" },
  { name: "npm", icon: "📦" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          المهارات التقنية
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Skills */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-slate-800 mb-6">
              لغات البرمجة والأطر
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">
                      {skill.name}
                    </span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className={`${skill.color} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-slate-800 mb-6">
              الأدوات والمنصات
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-emerald-50 transition-colors duration-300"
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="text-sm font-medium text-slate-700">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}