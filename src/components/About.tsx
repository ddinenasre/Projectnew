export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          من أنا؟
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">
              مطور شغوف بالتكنولوجيا
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              أنا مطور واجهات أمامية مع خبرة تزيد عن 3 سنوات في تصميم وتطوير مواقع الويب. 
              أؤمن بأن التصميم الجيد يجب أن يكون جميلاً وعملياً في آن واحد.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              أستخدم أحدث التقنيات والأدوات لإنشاء تجارب مستخدم سلسة وممتعة. 
              أسعى دائماً لتعلم الجديد وتحسين مهاراتي باستمرار.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-emerald-50 px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-emerald-600">+50</span>
                <p className="text-sm text-slate-600">مشروع منجز</p>
              </div>
              <div className="bg-emerald-50 px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-emerald-600">+30</span>
                <p className="text-sm text-slate-600">عميل سعيد</p>
              </div>
              <div className="bg-emerald-50 px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-emerald-600">+3</span>
                <p className="text-sm text-slate-600">سنوات خبرة</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-80 h-80 bg-emerald-100 rounded-2xl shadow-xl flex items-center justify-center">
              <span className="text-8xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}