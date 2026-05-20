export default function Footer() {
  return (
    <footer className="bg-slate-900 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-right">
            <span className="text-2xl font-bold text-emerald-500">محمد</span>
            <p className="text-slate-400 text-sm mt-1">
              مطور واجهات أمامية
            </p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-colors">
              <span>in</span>
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-colors">
              <span>GH</span>
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-colors">
              <span>TW</span>
            </a>
          </div>

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}