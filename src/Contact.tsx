import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("شكراً لتواصلك! سأرد عليك قريباً.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          تواصل معي
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          هل لديك مشروع أو فكرة؟ أحب أن أسمع منك!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium">البريد الإلكتروني</h3>
                <p className="text-slate-400">example@email.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium">الهاتف</h3>
                <p className="text-slate-400">+966 50 123 4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium">الموقع</h3>
                <p className="text-slate-400">الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="الاسم الكامل"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="البريد الإلكتروني"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                required
              />
            </div>
            
            <div>
              <Textarea
                placeholder="رسالتك..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 min-h-32"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3"
            >
              إرسال الرسالة
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}