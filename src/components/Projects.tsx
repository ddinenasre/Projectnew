import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "متجر إلكتروني",
    description: "موقع تجارة إلكترونية متكامل مع سلة تسوق ونظام دفع",
    tags: ["React", "Node.js", "MongoDB"],
    image: "🛒",
    color: "bg-blue-500",
  },
  {
    title: "تطبيق مهام",
    description: "تطبيق لإدارة المهام اليومية مع نظام تنبيهات",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "✅",
    color: "bg-green-500",
  },
  {
    title: "لوحة تحكم",
    description: "لوحة تحكم إدارية مع رسوم بيانية وتقارير",
    tags: ["Next.js", "Recharts", "PostgreSQL"],
    image: "📊",
    color: "bg-purple-500",
  },
  {
    title: "مدونة شخصية",
    description: "مدونة مع نظام تعليقات ومشاركة على السوشيال ميديا",
    tags: ["Next.js", "MDX", "Vercel"],
    image: "📝",
    color: "bg-orange-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
          أعمالي المميزة
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          هنا مجموعة من المشاريع التي قمت بتطويرها. كل مشروع يمثل تحدياً فريداً تم حله بإبداع
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-48 ${project.color} flex items-center justify-center`}>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                  <span>عرض المشروع</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}