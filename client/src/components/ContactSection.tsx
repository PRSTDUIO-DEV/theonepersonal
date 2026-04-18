import { motion } from "framer-motion";
import { Phone, MessageCircle, Facebook } from "lucide-react";

/*
 * Design: Royal Academy — Contact / CTA section
 * Dark navy background with gold CTA buttons
 */

const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/cta-bg-T8ZkTudqa5my49oypo8VHu.webp";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={CTA_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Contact Us
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-6">
            พร้อมเปลี่ยนชีวิต<br className="hidden sm:block" />ด้วยทักษะที่ใช้ได้จริง?
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-8" />
          <p className="text-white/70 text-lg leading-relaxed mb-12">
            ไม่ว่าคุณจะเริ่มจากศูนย์ หรืออยากอัปสกิล เราพร้อมช่วยให้คุณก้าวเข้าสู่สายอาชีพความงามอย่างมั่นใจ
            สำหรับพนักงานคลินิก ผู้ประกอบการ แม่บ้าน พนักงานโรงงาน หรือผู้ที่อยากเปลี่ยนสายอาชีพมาทำตำแหน่งพนักงาน BT
            ติดต่อสอบถามรายละเอียดหลักสูตรได้เลย
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="tel:0924050378"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-sm transition-all duration-300 text-base shadow-lg shadow-gold/20"
            >
              <Phone className="w-5 h-5" />
              โทรสอบถาม
            </a>
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#06C755] hover:bg-[#05B04C] text-white font-bold px-8 py-4 rounded-sm transition-all duration-300 text-base shadow-lg shadow-[#06C755]/20"
            >
              <MessageCircle className="w-5 h-5" />
              แอดไลน์
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61582463515385"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold px-8 py-4 rounded-sm transition-all duration-300 text-base shadow-lg shadow-[#1877F2]/20"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
          </div>

          {/* Target Audience */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              "พนักงานคลินิก",
              "ผู้ประกอบการเจ้าของคลินิก",
              "ผู้สนใจเข้าวงการคลินิก",
              "แม่บ้าน / พนักงานโรงงาน",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-sm py-3 px-4"
              >
                <p className="text-white/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
