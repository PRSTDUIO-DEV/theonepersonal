import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, GraduationCap, Users, Sparkles, BookOpen } from "lucide-react";

/*
 * Design: Royal Academy — Neo-Classical Thai Institution
 * Section: บรรยากาศการเรียน (Learning Atmosphere)
 * Navy (#0D1B3E) + Gold (#D4AF37) + Ivory (#FFFFF0)
 */

const learningScenes = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/learning-1-ZWLbGb3nTi4nRk6x8mXRGv.webp",
    title: "เรียนรู้เทคนิคจากผู้เชี่ยวชาญ",
    description: "ครูผู้สอนสาธิตเทคนิคการทำทรีตเมนต์ผิวหน้าด้วยเครื่องมือมืออาชีพ นักเรียนได้เรียนรู้แบบใกล้ชิดในห้องเรียนมาตรฐานคลินิก",
    tag: "ภาคทฤษฎี + ปฏิบัติ",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/learning-2-LChDnu8mq3qPGU5SaoAZTS.webp",
    title: "ฝึกปฏิบัติจริง จับมือทำ",
    description: "นักเรียนฝึกเทคนิคการดูแลผิวหน้าบนโมเดลฝึก เรียนรู้ขั้นตอนการทำทรีตเมนต์อย่างถูกวิธี พร้อมอุปกรณ์ครบครัน",
    tag: "Hands-on Practice",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/learning-3-FUG6nmn5WLEVQZTafdrSAv.webp",
    title: "อบรมทักษะการขายและบริการ",
    description: "เวิร์กช็อปพัฒนาทักษะการขาย การบริการลูกค้า และบุคลิกภาพ เตรียมพร้อมสู่การทำงานจริงในคลินิกความงาม",
    tag: "Soft Skill Training",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/learning-4-ghRiCWRq7C33Sg3Z67sFKJ.webp",
    title: "เรียนแต่งหน้ามืออาชีพ",
    description: "ฝึกเทคนิคการแต่งหน้าจริงกับโมเดล พร้อมอุปกรณ์แต่งหน้าระดับมืออาชีพ กระจกไฟ LED และผลิตภัณฑ์คุณภาพ",
    tag: "Makeup Artistry",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/learning-5-dTJ9wGTF4vsnVVfctRCB2Q.webp",
    title: "พิธีมอบประกาศนียบัตร",
    description: "ความภาคภูมิใจของผู้สำเร็จหลักสูตร ได้รับใบประกาศนียบัตรรับรองจากกระทรวงศึกษาธิการ พร้อมก้าวสู่อาชีพใหม่อย่างมั่นใจ",
    tag: "Graduation Day",
  },
];

const highlights = [
  { icon: Users, label: "เรียนกลุ่มเล็ก", desc: "ไม่เกิน 10 คน/รุ่น" },
  { icon: BookOpen, label: "สอนจับมือทำ", desc: "ฝึกปฏิบัติจริง 70%" },
  { icon: Sparkles, label: "อุปกรณ์ครบ", desc: "มาตรฐานคลินิก" },
  { icon: GraduationCap, label: "ใบประกาศ", desc: "รับรองกระทรวงฯ" },
];

export default function LearningAtmosphereSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index: number) => {
    if (index < 0) setCurrentIndex(learningScenes.length - 1);
    else if (index >= learningScenes.length) setCurrentIndex(0);
    else setCurrentIndex(index);
  };

  const current = learningScenes[currentIndex];

  return (
    <section
      id="learning"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#0D1B3E" }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212,175,55,0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-3 font-medium"
            style={{ color: "#D4AF37" }}
          >
            Learning Atmosphere
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#FFFFF0" }}
          >
            บรรยากาศการเรียน
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mb-6"
            style={{ backgroundColor: "#D4AF37" }}
          />
          <p
            className="max-w-2xl mx-auto text-base lg:text-lg"
            style={{ color: "rgba(255,255,240,0.7)" }}
          >
            เรียนรู้ในบรรยากาศจริง ฝึกปฏิบัติจริง ด้วยอุปกรณ์มาตรฐานคลินิก
            พร้อมครูผู้เชี่ยวชาญดูแลอย่างใกล้ชิด
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 mb-14">
          {/* Large Image Display */}
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-lg overflow-hidden aspect-[16/10] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Tag badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="px-3 py-1.5 rounded-sm text-xs font-bold tracking-wide"
                  style={{
                    backgroundColor: "rgba(212,175,55,0.9)",
                    color: "#0D1B3E",
                  }}
                >
                  {current.tag}
                </span>
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-2">
                      {current.title}
                    </h3>
                    <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                      {current.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={() => goTo(currentIndex - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: "rgba(13,27,62,0.7)",
                  border: "1px solid rgba(212,175,55,0.4)",
                }}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={() => goTo(currentIndex + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: "rgba(13,27,62,0.7)",
                  border: "1px solid rgba(212,175,55,0.4)",
                }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {learningScenes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      idx === currentIndex
                        ? "#D4AF37"
                        : "rgba(255,255,240,0.3)",
                    transform: idx === currentIndex ? "scale(1.3)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {learningScenes.map((scene, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative rounded-lg overflow-hidden aspect-[4/3] group transition-all duration-300 ${
                  idx === currentIndex ? "ring-2" : "ring-0 opacity-60 hover:opacity-90"
                }`}
                style={{
                  border: idx === currentIndex ? "2px solid #D4AF37" : "2px solid transparent",
                }}
              >
                <img
                  src={scene.image}
                  alt={scene.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-medium leading-tight truncate">
                    {scene.title}
                  </p>
                </div>
                {idx === currentIndex && (
                  <div
                    className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: "#D4AF37" }}
                  />
                )}
              </button>
            ))}
            {/* Extra card: counter */}
            <div
              className="rounded-lg flex flex-col items-center justify-center aspect-[4/3]"
              style={{
                backgroundColor: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.25)",
              }}
            >
              <span
                className="font-serif text-3xl font-bold"
                style={{ color: "#D4AF37" }}
              >
                100%
              </span>
              <span
                className="text-xs mt-1"
                style={{ color: "rgba(255,255,240,0.7)" }}
              >
                ลงมือทำจริง
              </span>
            </div>
          </div>
        </div>

        {/* Highlights Bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-lg p-6"
          style={{
            backgroundColor: "rgba(212,175,55,0.08)",
            border: "1px solid rgba(212,175,55,0.2)",
          }}
        >
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: "rgba(212,175,55,0.15)",
                  border: "1px solid rgba(212,175,55,0.3)",
                }}
              >
                <item.icon className="w-5 h-5" style={{ color: "#D4AF37" }} />
              </div>
              <div>
                <p
                  className="font-semibold text-sm"
                  style={{ color: "#FFFFF0" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "rgba(255,255,240,0.6)" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
