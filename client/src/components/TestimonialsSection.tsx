import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

/*
 * Design: Royal Academy — Testimonials section
 * Ivory background with navy cards, gold accents, and elegant quote styling
 * Features a carousel/slider with auto-play and manual navigation
 */

interface Testimonial {
  name: string;
  role: string;
  course: string;
  image: string;
  quote: string;
  rating: number;
  beforeJob: string;
}

const testimonials: Testimonial[] = [
  {
    name: "คุณนิชา",
    role: "ผู้ช่วยแพทย์ประจำคลินิกความงาม",
    course: "หลักสูตรผู้ช่วยแพทย์",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/testimonial-1-Rg9JmKj24ryGu3PJAimBsf.webp",
    quote:
      "เมื่อก่อนเป็นแม่บ้านทำความสะอาด ไม่เคยคิดว่าจะได้ทำงานในคลินิกความงาม ครูเมเม่สอนตั้งแต่พื้นฐานจนเข้าใจ ตอนนี้ทำงานเป็นผู้ช่วยแพทย์ได้อย่างมั่นใจ รายได้เพิ่มขึ้นเท่าตัว ชีวิตเปลี่ยนจริงๆ ค่ะ",
    rating: 5,
    beforeJob: "อดีตแม่บ้าน",
  },
  {
    name: "คุณแพร",
    role: "ผู้จัดการคลินิกความงาม",
    course: "หลักสูตรผู้จัดการคลินิก",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/testimonial-2-jbPZ6eQxsAG7fH46kbkDSC.webp",
    quote:
      "เรียนจบหลักสูตรผู้จัดการคลินิก ได้ความรู้ครบทุกด้าน ทั้งบริหารทีม ดูแลยอดขาย วาง KPI ครูสอนจากประสบการณ์จริง ไม่ใช่แค่ทฤษฎี ตอนนี้บริหารคลินิกได้อย่างเป็นระบบ ทีมงานทำงานได้ดีขึ้นมากค่ะ",
    rating: 5,
    beforeJob: "อดีตพนักงานออฟฟิศ",
  },
  {
    name: "คุณมิ้นท์",
    role: "PR ประจำคลินิกความงาม",
    course: "หลักสูตร PR / FRONT / ADMIN",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/testimonial-3-MycLC3KVApAS3sTKb8uZq2.webp",
    quote:
      "จากพนักงานโรงงาน มาเรียนหลักสูตร PR ที่นี่ ครูสอนตั้งแต่การต้อนรับลูกค้า การตอบแชท การสร้าง First Impression ตอนนี้ทำงานเป็น PR ที่คลินิก ได้ใช้ทุกอย่างที่เรียนมาจริงๆ ค่ะ ขอบคุณครูเมเม่มากค่ะ",
    rating: 5,
    beforeJob: "อดีตพนักงานโรงงาน",
  },
  {
    name: "คุณเจน",
    role: "เจ้าของคลินิกความงาม",
    course: "หลักสูตรผู้จัดการคลินิก",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/testimonial-4-9Fkt22Y72pMmQeJU8HEfVA.webp",
    quote:
      "ในฐานะเจ้าของคลินิก การมาเรียนที่นี่ทำให้เข้าใจระบบงานทั้งหมดอย่างลึกซึ้ง ตั้งแต่การบริหารพนักงาน ระบบหน้าร้าน ไปจนถึงการสร้างประสบการณ์ลูกค้า ลงทุนกับความรู้ที่นี่คุ้มค่ามากค่ะ",
    rating: 5,
    beforeJob: "ผู้ประกอบการ",
  },
  {
    name: "คุณเฟิร์น",
    role: "ที่ปรึกษาการขาย (Beauty Consultant)",
    course: "หลักสูตรที่ปรึกษาการขาย",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/testimonial-5-92pw8wzkpdjTMBwvMADjEE.webp",
    quote:
      "เพิ่งจบ ม.6 ไม่รู้จะทำอาชีพอะไร มาเรียนที่นี่ได้ทั้งทักษะและความมั่นใจ ครูสอนเทคนิคการปิดการขาย วิเคราะห์ปัญหาลูกค้า ตอนนี้ทำงานเป็น Beauty Consultant ที่คลินิกดังย่านสุขุมวิทค่ะ",
    rating: 5,
    beforeJob: "นักเรียนจบใหม่",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-navy mb-4">
            เสียงจากผู้เรียนจริง
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
            ผู้เรียนที่เปลี่ยนชีวิตจริงผ่านหลักสูตรของเรา จากหลากหลายอาชีพสู่สายงานความงาม
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mb-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative rounded-sm border border-gray-100 overflow-hidden" style={{ backgroundColor: '#FFFFF0' }}>
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left: Image */}
              <div className="lg:col-span-2 relative">
                <div className="aspect-square lg:aspect-auto lg:h-full">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent" />
                </div>
                {/* Before badge */}
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                  <div className="bg-navy/80 backdrop-blur-sm border border-gold/30 rounded-sm px-4 py-2">
                    <p className="text-gold/80 text-[10px] tracking-wider uppercase mb-0.5">
                      Before
                    </p>
                    <p className="text-white text-sm font-semibold">
                      {current.beforeJob}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                {/* Quote icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 border border-gold/20">
                    <Quote className="w-5 h-5 text-gold" />
                  </div>
                </div>

                {/* Quote text */}
                <blockquote className="font-serif text-lg lg:text-xl text-navy leading-relaxed mb-8 italic">
                  "{current.quote}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Author info */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-serif text-xl font-bold text-navy">
                    {current.name}
                  </p>
                  <p className="text-gold text-sm font-semibold mt-1">
                    {current.role}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    จบหลักสูตร: {current.course}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="w-12 h-12 rounded-full border border-gray-200 hover:border-gold/50 flex items-center justify-center text-navy/60 hover:text-gold transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  setIsAutoPlaying(false);
                }}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? "w-8 h-2 bg-gold"
                    : "w-2 h-2 bg-gray-300 hover:bg-gold/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="w-12 h-12 rounded-full border border-gray-200 hover:border-gold/50 flex items-center justify-center text-navy/60 hover:text-gold transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* All Testimonials Mini Cards */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => {
                setActiveIndex(i);
                setIsAutoPlaying(false);
              }}
              className={`text-left p-4 rounded-sm border transition-all duration-300 ${
                i === activeIndex
                  ? "border-gold/40 bg-gold/5 shadow-md shadow-gold/5"
                  : "border-gray-100 hover:border-gold/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-[10px]">
                    {t.beforeJob}
                  </p>
                </div>
              </div>
              <p className="text-navy/70 text-xs leading-relaxed line-clamp-3">
                "{t.quote.substring(0, 80)}..."
              </p>
              <div className="flex items-center gap-0.5 mt-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-3 h-3 fill-gold text-gold"
                  />
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
