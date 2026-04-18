import { motion } from "framer-motion";
import { Award, Users, BookOpen, Star } from "lucide-react";

/*
 * Design: Royal Academy — Instructor profile with asymmetric layout
 * Dark navy background with gold accents for gravitas
 */

const TEACHER_MAIN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/LINE_ALBUM_281225_260404_17_c4f0dc93.jpg";
const TEACHER_ALT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/LINE_ALBUM_281225_260404_14_083e3f03.jpg";

const expertise = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "การบริหารจัดการคลินิก",
    desc: "Operation Management แบบครบวงจร",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "การสร้างระบบบุคลากร",
    desc: "Front, Admin, PR, Consultant",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "การปิดการขาย",
    desc: "ออกแบบประสบการณ์ลูกค้า (CX)",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "บุคลิกภาพเชิงธุรกิจ",
    desc: "มารยาทงานบริการ การสื่อสารที่น่าเชื่อถือ",
  },
];

export default function InstructorSection() {
  return (
    <section id="instructor" className="relative py-20 lg:py-28 bg-navy overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212,175,55,0.1) 35px, rgba(212,175,55,0.1) 36px)`,
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Professional Trainer
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
            ผู้สอน
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative gold-frame rounded-sm overflow-hidden">
                <img
                  src={TEACHER_MAIN}
                  alt="ครูเมเม่ กฤษณาพร เจริญชวลิต"
                  className="w-full h-[500px] object-cover object-top"
                />
              </div>
              {/* Small overlapping image */}
              <div className="absolute -bottom-6 -right-4 w-40 h-48 rounded-sm overflow-hidden border-4 border-navy shadow-xl hidden lg:block">
                <img
                  src={TEACHER_ALT}
                  alt="ครูเมเม่"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="mb-6">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2">
                ครูเมเม่ — กฤษณาพร เจริญชวลิต
              </h3>
              <p className="text-gold text-sm font-semibold tracking-wide">
                Professional Trainer & Beauty Business Expert
              </p>
              <p className="text-white/50 text-xs mt-1">
                เชี่ยวชาญด้านการบริหารงานคลินิก | พัฒนาบุคลิกภาพ | ฝึกอบรมบุคลากรคลินิก | เพิ่มประสิทธิภาพทีมขาย
              </p>
            </div>

            <div className="space-y-4 mb-8">
            <p className="text-white/80 leading-relaxed">
              ผู้ก่อตั้งโรงเรียน The One Persona Vocational School วิทยากรและที่ปรึกษาธุรกิจความงาม
                และพัฒนาบุคลิกภาพการทำงาน
                ด้วยประสบการณ์มากกว่า <span className="text-gold font-semibold">14 ปี</span> ในอุตสาหกรรมความงามและคลินิกความงาม
            </p>
              <p className="text-white/70 leading-relaxed">
                ผ่านงานด้านคลินิกความงาม สกินแคร์ เวลเนส การบริหารทีม และการพัฒนาบุคลากร
                ได้ฝึกสอนบุคลากรในองค์กรความงามจำนวนมากให้สามารถทำงานจริงได้ในสายงานทันที
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {expertise.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-sm p-4"
                >
                  <div className="text-gold mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-white/50 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="relative bg-gold/10 border-l-4 border-gold rounded-r-sm p-6 lg:p-8">
              <p className="font-serif text-lg lg:text-xl text-white italic leading-relaxed">
                "เพราะครูเชื่อว่าคนทุกคนสามารถเปลี่ยนชีวิตได้ ถ้ามีทักษะที่นำไปใช้ได้จริง"
              </p>
              <p className="text-gold/80 text-sm mt-3 font-medium">— ครูเมเม่</p>
            </div>

            {/* Achievements */}
            <div className="mt-8 space-y-3">
              <h4 className="text-gold font-semibold text-sm tracking-wider uppercase mb-4">
                ผลงานเด่น
              </h4>
              {[
                "ที่ปรึกษาและเทรนทีมขาย/พนักงานคลินิกหลายแห่งทั่วประเทศ",
                "ผลักดันผู้เรียนจำนวนมากให้เข้าทำงานจริงหลังเรียนจบ",
                "พัฒนาหลักสูตรบุคลากรคลินิกแบบเน้นลงมือทำจริง",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <p className="text-white/70 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-6">
            เรื่องราวแรงบันดาลใจ
          </h3>
          <p className="text-white/70 leading-relaxed mb-4">
            จากคนที่เริ่มต้นในวงการแบบศูนย์ประสบการณ์ สู่ผู้สอนที่ปั้นบุคลากรให้เริ่มงานได้จริงในคลินิกหลายแห่งทั่วประเทศ
          </p>
          <p className="text-white/60 leading-relaxed mb-4">
            ครูเมเม่เริ่มต้นงานจากตำแหน่งปฏิบัติการในคลินิกความงาม ผ่านประสบการณ์หลากหลายบทบาท
            ทั้งงานบริการ หน้าร้าน งานหลังบ้าน Beauty Consultant และการบริหารทีม
            จนเข้าใจระบบงานความงามแบบลึกซึ้ง
          </p>
          <p className="text-white/60 leading-relaxed mb-6">
            วันนี้ ครูต้องการแบ่งปันเส้นทางและองค์ความรู้ ให้กับคนรุ่นใหม่ที่อยากมีอาชีพในสายคลินิกความงาม
            และเติบโตอย่างมั่นคง
          </p>
          <div className="inline-block bg-gold/10 border border-gold/20 rounded-sm px-8 py-4">
            <p className="font-serif text-lg text-gold font-semibold">
              "ให้ผู้เรียนมีงาน มีอาชีพ มีทักษะที่ใช้ได้จริง"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
