import { motion } from "framer-motion";
import { GraduationCap, HandHeart, Briefcase, ShieldCheck } from "lucide-react";

/*
 * Design: Royal Academy — Why choose us section
 * Ivory background with navy cards and gold accents
 */

const reasons = [
  {
    icon: <HandHeart className="w-8 h-8" />,
    title: "สอนจับมือทำ",
    desc: "ไม่ใช่แค่ทฤษฎี เน้นลงมือทำจริง เคสจริง สถานการณ์จริง สอนเทคนิคที่ใช้ทันทีแบบ Step by Step",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "ได้รับอนุญาตจากกระทรวงศึกษาธิการ",
    desc: "โรงเรียนที่ได้รับการรับรองอย่างเป็นทางการ ผู้เรียนได้รับใบประกาศนียบัตรที่เป็นที่ยอมรับ",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "เรียนจบ ทำงานได้ทันที",
    desc: "หลักสูตรออกแบบมาเพื่อให้ผู้เรียนพร้อมเข้าทำงานจริงในคลินิกหรือองค์กรความงามได้ทันที",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "ผู้สอนมีประสบการณ์จริง 14+ ปี",
    desc: "เรียนรู้จากผู้เชี่ยวชาญที่ผ่านงานจริงในวงการความงามมากว่า 14 ปี ไม่ใช่แค่ผู้สอนทั่วไป",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
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
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-navy mb-4">
            ทำไมต้องเรียนกับเรา
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center p-8 rounded-sm border border-gray-100 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy/5 text-navy group-hover:bg-gold/10 group-hover:text-gold transition-all duration-500 mb-6">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-navy mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Teaching Method */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid lg:grid-cols-4 gap-6"
        >
          {[
            { step: "01", title: "เข้าใจหน้างานจริง", desc: "เรียนรู้ระบบงานจริงของคลินิก" },
            { step: "02", title: "สอนเทคนิคจริง", desc: "Step by Step ใช้ได้ทันที" },
            { step: "03", title: "เน้น Soft Skill", desc: "Mindset การทำงานจริง" },
            { step: "04", title: "พร้อมเข้าสู่สายอาชีพ", desc: "ปั้นบุคลากรให้พร้อมทำงาน" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative flex items-start gap-4 bg-navy/3 rounded-sm p-6"
            >
              <span className="font-serif text-4xl font-bold text-gold/20">{item.step}</span>
              <div>
                <p className="font-semibold text-navy text-sm">{item.title}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
