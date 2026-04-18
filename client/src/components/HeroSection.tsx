import { motion } from "framer-motion";
import { Award, ChevronDown } from "lucide-react";

/*
 * Design: Royal Academy — Neo-Classical Thai Institution
 * Hero section with dark navy background, gold accents, and institutional gravitas
 */

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/hero-bg-Y7972ZVxLSfu6NgMmHVM6A.webp";
const TEACHER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/LINE_ALBUM_281225_260404_18_2abce401.jpg";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/90 via-[#0D1B3E]/70 to-[#0D1B3E]/40" />
      </div>

      <div className="container relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-sm px-4 py-2 mb-8"
            >
              <Award className="w-4 h-4 text-gold" />
              <span className="text-gold text-xs font-semibold tracking-wider uppercase">
                ได้รับอนุญาตจากกระทรวงศึกษาธิการ
              </span>
            </motion.div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              โรงเรียนวิชาชีพ
              <br />
              <span className="text-gold-gradient">เดอะวันเพอร์โซนา</span>
            </h1>

            <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-4 max-w-lg">
              สร้างบุคลากรคุณภาพสู่วงการความงาม ด้วยหลักสูตรที่เน้นลงมือทำจริง
              สอนจากประสบการณ์ตรงกว่า 14 ปี สอนแบบจับมือทำ ไม่ปล่อยให้เรียนแค่ความรู้
            </p>

            <p className="text-gold/80 text-sm lg:text-base mb-8 max-w-lg font-medium">
              "เพราะเราเชื่อว่าคนทุกคนสามารถเปลี่ยนชีวิตได้ ถ้ามีทักษะที่นำไปใช้ได้จริง"
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#courses"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-sm transition-all duration-300 text-sm tracking-wide shadow-lg shadow-gold/20"
              >
                ดูหลักสูตรทั้งหมด
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582463515385"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/30 hover:border-gold/50 text-white hover:text-gold px-8 py-4 rounded-sm transition-all duration-300 text-sm tracking-wide"
              >
                ติดตามเพจ Facebook
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <p className="font-serif text-3xl lg:text-4xl font-bold text-gold">14+</p>
                <p className="text-white/50 text-xs mt-1">ปีประสบการณ์</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl font-bold text-gold">6</p>
                <p className="text-white/50 text-xs mt-1">หลักสูตรวิชาชีพ</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl font-bold text-gold">100%</p>
                <p className="text-white/50 text-xs mt-1">ลงมือทำจริง</p>
              </div>
            </div>
          </motion.div>

          {/* Mobile: Teacher Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:hidden"
          >
            <div className="relative overflow-hidden rounded-sm gold-frame max-w-xs mx-auto">
              <img
                src={TEACHER_IMG}
                alt="ครูเมเม่ - กฤษณาพร เจริญชวลิต"
                className="w-full h-[350px] object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-4">
                <p className="text-gold font-serif font-bold text-sm">ครูเมเม่ — กฤษณาพร เจริญชวลิต</p>
                <p className="text-white/70 text-xs">ผู้ก่อตั้งโรงเรียน The One Persona</p>
              </div>
            </div>
          </motion.div>

          {/* Desktop: Teacher Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Gold frame decoration */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-gold/30 rounded-sm" />
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={TEACHER_IMG}
                  alt="ครูเมเม่ - กฤษณาพร เจริญชวลิต ผู้ก่อตั้งโรงเรียน"
                  className="w-full h-[600px] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-6">
                  <p className="text-gold font-serif font-bold text-lg">ครูเมเม่ — กฤษณาพร เจริญชวลิต</p>
                  <p className="text-white/70 text-sm">ผู้ก่อตั้งโรงเรียน The One Persona Vocational School</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
