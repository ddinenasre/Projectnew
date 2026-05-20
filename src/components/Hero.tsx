import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-emerald-600"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-white shadow-xl flex items-center justify-center">
            <span className="text-6xl">👨‍💻</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          مرحباً، أنا محمد
        </h1>
        
        <h2 className="text-xl md:text-2xl text-emerald-100 mb-6">
          مطور واجهات أمامية | Frontend Developer
        </h2>

        <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
          أقوم بتصميم وتطوير مواقع ويب حديثة وجذابة باستخدام أحدث التقنيات
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-white text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-all duration-300 shadow-lg"
          >
            شاهد أعمالي
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-emerald-600 transition-all duration-300"
          >
            تواصل معي
          </button>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-white"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}