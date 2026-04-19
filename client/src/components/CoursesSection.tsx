import { motion } from "framer-motion";
import { Clock, CheckCircle, Sparkles, BadgePercent } from "lucide-react";

/*
 * Design: Royal Academy — Courses section
 * Color consistency: All cards use Navy + Gold + Ivory palette uniformly
 * Price: Gold-dark for special price, muted line-through for original
 * Buttons: All use gold background with navy text for consistency
 * Cards: All use gold border tint for unified look
 */

const COURSES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/courses-bg-nZNMVxhqGd8kqqQha7wgCF.webp";

interface Course {
  id: number;
  title: string;
  titleEn: string;
  duration: string;
  price: string;
  originalPrice: string;
  suitable: string;
  highlights: string[];
  featured?: boolean;
  discount: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "หลักสูตรผู้จัดการคลินิก",
    titleEn: "Clinic Manager",
    duration: "8 วัน",
    price: "39,990",
    originalPrice: "59,990",
    discount: "33%",
    suitable: "ผู้ที่ต้องการบริหารคลินิกอย่างเป็นระบบ",
    highlights: [
      "เน้นเคสจริง + การแก้ปัญหาในหน้างาน",
      "บริหารทีม แพทย์ พนักงาน และยอดขาย",
      "วางระบบการทำงาน KPI และบริการลูกค้า",
      "เข้าใจบทบาทผู้จัดการคลินิกตัวจริง",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "หลักสูตรที่ปรึกษาการขาย",
    titleEn: "Beauty Consultant",
    duration: "1 เดือน",
    price: "39,999",
    originalPrice: "69,990",
    discount: "43%",
    suitable: "ผู้ที่อยากเป็นที่ปรึกษามืออาชีพในคลินิกความงาม",
    highlights: [
      "วิเคราะห์ปัญหาลูกค้าอย่างถูกต้อง",
      "การสร้างบุคลิกภาพที่ดีต่อองค์กร",
      "เทคนิคการสื่อสาร แนะนำโปรแกรม และปิดการขาย",
      "ฝึกจากสถานการณ์จริง เคสจริง",
    ],
  },
  {
    id: 3,
    title: "หลักสูตรผู้ช่วยแพทย์",
    titleEn: "Medical Assistant",
    duration: "1 เดือน",
    price: "39,999",
    originalPrice: "69,990",
    discount: "43%",
    suitable: "ผู้ที่อยากทำงานใกล้ชิดแพทย์และเติบโตสายงานในคลินิก",
    highlights: [
      "บทบาท หน้าที่ และมารยาทวิชาชีพ",
      "งานด้าน skin และศัลยกรรมที่ถูกต้อง",
      "การเตรียมเคสและช่วยงานแพทย์อย่างถูกต้อง",
      "พร้อมทำงานจริงหลังเรียนจบ",
    ],
  },
  {
    id: 4,
    title: "หลักสูตร PR / FRONT / ADMIN สายความงาม",
    titleEn: "PR / Front / Admin",
    duration: "1 เดือน",
    price: "39,999",
    originalPrice: "69,990",
    discount: "43%",
    suitable: "ตำแหน่งด่านหน้าที่สำคัญที่สุดของคลินิก",
    highlights: [
      "การต้อนรับลูกค้าอย่างมืออาชีพ",
      "การสร้างบุคลิกภาพที่ดีต่อองค์กร",
      "ระบบการตอบแชทหลังบ้านอย่างมืออาชีพ",
      "การประสานงาน ระบบหน้าร้าน และงานเอกสาร",
      "สร้าง First Impression ที่ดีให้กับคลินิก",
    ],
  },
  {
    id: 5,
    title: "หลักสูตรบุคลิกภาพ งานบริการ และการสร้างภาพลักษณ์",
    titleEn: "Personality & Service Image",
    duration: "1 วัน",
    price: "3,999",
    originalPrice: "6,990",
    discount: "43%",
    suitable: "เหมาะกับทุกสายงานบริการ",
    highlights: [
      "การยืน เดิน นั่ง พูด และการสื่อสารอย่างมืออาชีพ",
      "การแต่งกายให้เหมาะสมกับอาชีพและบุคลิกภาพ",
      "สร้างความมั่นใจและภาพลักษณ์ที่น่าเชื่อถือ",
      "บุคลิกดี = ลูกค้าเชื่อใจ = โอกาสเติบโต",
    ],
  },
  {
    id: 6,
    title: "หลักสูตรการแต่งหน้าสำหรับอาชีพ",
    titleEn: "Professional Makeup",
    duration: "1 วัน",
    price: "1,999",
    originalPrice: "3,990",
    discount: "50%",
    suitable: "งานคลินิก งานบริการ และงานขาย",
    highlights: [
      "แต่งหน้าเพื่อการทำงานจริง",
      "เหมาะสำหรับงานคลินิก งานบริการ และงานขาย",
      "ใช้งานได้จริงในชีวิตประจำวัน",
    ],
  },
  {
    id: 7,
    title: "หลักสูตรทรีตเมนต์กดสิว",
    titleEn: "Acne Treatment",
    duration: "1 วัน",
    price: "4,990",
    originalPrice: "",
    discount: "",
    suitable: "ผู้ที่ต้องการให้บริการรักษาสิว และเริ่มต้นเปิดร้านของตนเอง (สำหรับร้านที่ไม่มีแพทย์)",
    highlights: [
      "เรียนรู้เทคนิคการทรีตเมนต์กดสิวอย่างถูกวิธี",
      "เหมาะสำหรับร้านที่ไม่มีแพทย์",
      "พร้อมเปิดให้บริการได้ทันทีหลังเรียนจบ",
    ],
  },
  {
    id: 8,
    title: "หลักสูตรพนักงานทรีตเมนต์ความงามพื้นฐาน",
    titleEn: "Basic Beauty Treatment",
    duration: "3 วัน",
    price: "19,990",
    originalPrice: "",
    discount: "",
    suitable: "ผู้ที่ต้องการเปิดร้านความงามเอง หรือเริ่มต้นในสายงานนี้ (สำหรับร้านที่ไม่มีแพทย์)",
    highlights: [
      "เรียนรู้การใช้เครื่องมือและการให้บริการครบวงจร",
      "เหมาะสำหรับร้านที่ไม่มีแพทย์",
      "พร้อมเปิดร้านความงามของตนเองได้",
    ],
  },
  {
    id: 9,
    title: "หลักสูตรการเปิดธุรกิจคลินิกความงาม",
    titleEn: "Beauty Clinic Business",
    duration: "1 วัน",
    price: "9,990",
    originalPrice: "",
    discount: "",
    suitable: "นักลงทุน / เจ้าของคลินิก / แพทย์ (สำหรับคลินิกที่มีแพทย์ดำเนินการ)",
    highlights: [
      "แนวทางเริ่มต้นธุรกิจคลินิกความงามสู่ความสำเร็จ",
      "ทางลัดของคนที่สนใจอยากเปิดธุรกิจคลินิกความงาม",
      "พร้อม Workshop ลงมือทำจริง",
      "เทคนิคสำคัญในยุคปัจจุบัน",
    ],
  },
  {
    id: 10,
    title: "หลักสูตรการปิดการขายสำหรับทีมเซลล์คลินิก",
    titleEn: "Sales Closing for Clinic",
    duration: "1 วัน",
    price: "3,990",
    originalPrice: "",
    discount: "",
    suitable: "คลินิกที่มีทีมเซลล์และต้องการยกระดับทีม (สำหรับคลินิกที่มีแพทย์ดำเนินการ)",
    highlights: [
      "พัฒนาทักษะการขายอย่างมืออาชีพ",
      "เพิ่มยอดและศักยภาพทีมในทุกๆด้าน",
      "พร้อม Workshop ฝึกปฏิบัติจริง",
    ],
  },
  {
    id: 11,
    title: "หลักสูตรการทำงานสายคลินิกความงามเบื้องต้น",
    titleEn: "Clinic Career Basics",
    duration: "1 วัน",
    price: "3,990",
    originalPrice: "",
    discount: "",
    suitable: "ผู้ที่ต้องการเริ่มต้นอาชีพในคลินิกความงาม (สำหรับคลินิกที่มีแพทย์ดำเนินการ)",
    highlights: [
      "ปูพื้นฐานความรู้สำคัญก่อนเริ่มงานจริง",
      "ความรู้เบื้องต้นที่ควรมีในการทำงานสายคลินิก",
      "พร้อม Workshop เพื่อต่อยอดอาชีพ",
    ],
  },
  {
    id: 12,
    title: "หลักสูตรออนไลน์ รู้ก่อน รวยก่อน ธุรกิจความงามสู่ตัว TOP",
    titleEn: "Online: Beauty Biz to TOP",
    duration: "2 ชั่วโมง",
    price: "590",
    originalPrice: "",
    discount: "",
    suitable: "นักลงทุน / เจ้าของคลินิก / แพทย์ / บุคคลทั่วไป (สำหรับคลินิกที่มีแพทย์ดำเนินการ)",
    highlights: [
      "เจาะลึกระบบธุรกิจ เทคนิคสำคัญก่อนเปิดคลินิกจริง",
      "ทางลัดที่ทำให้การเปิดคลินิกง่ายขึ้น",
      "เรียนออนไลน์ได้ทุกที่ ทุกเวลา",
    ],
  },
  {
    id: 13,
    title: "หลักสูตรผู้จัดการคลินิกเบื้องต้น",
    titleEn: "Basic Clinic Manager",
    duration: "1 วัน",
    price: "9,990",
    originalPrice: "",
    discount: "",
    suitable: "นักลงทุน / เจ้าของคลินิก / แพทย์ / ผู้สนใจเป็นผู้จัดการ (สำหรับคลินิกที่มีแพทย์ดำเนินการ)",
    highlights: [
      "พัฒนาทักษะการบริหารจัดการคลินิกอย่างมืออาชีพ",
      "ทำอย่างไรให้คลินิกประสบความสำเร็จในยุคปัจจุบัน",
      "เหมาะสำหรับผู้ที่ต้องการก้าวสู่ตำแหน่งผู้จัดการ",
    ],
  },
];

function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-white rounded-sm overflow-hidden group transition-all duration-500 border hover:shadow-xl hover:shadow-navy/8 ${
        course.featured
          ? "border-gold/40 shadow-lg shadow-gold/10"
          : "border-gold/15 hover:border-gold/30"
      }`}
    >
      {/* Discount Badge - top right */}
      {course.discount && (
        <div className="absolute top-0 right-0 z-10">
          <div className={`flex items-center gap-1 px-3 py-1.5 text-[10px] font-bold tracking-wider ${
            course.featured
              ? "bg-gold text-navy"
              : "bg-navy text-gold"
          }`}>
            <BadgePercent className="w-3 h-3" />
            ลด {course.discount}
          </div>
        </div>
      )}

      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-5">
          <p className="text-gold-dark text-xs font-semibold tracking-wider uppercase mb-2">
            {course.titleEn}
          </p>
          <h3 className="font-serif text-xl lg:text-2xl font-bold text-navy leading-tight">
            {course.title}
          </h3>
        </div>

        {/* Duration & Price */}
        <div className="flex items-end gap-3 mb-5 pb-5 border-b border-gold/10">
          <div className="flex items-center gap-1.5 text-navy/60 text-sm">
            <Clock className="w-4 h-4 text-gold" />
            <span>{course.duration}</span>
          </div>
          <div className="ml-auto text-right">
            {course.originalPrice && (
              <p className="text-navy/40 text-xs line-through">
                {course.originalPrice}฿
              </p>
            )}
            <p className="font-serif text-2xl font-bold text-gold-dark">
              {course.price}
              <span className="text-sm font-sans font-normal text-navy/50">฿</span>
            </p>
          </div>
        </div>

        {/* Suitable for */}
        <div className="flex items-start gap-2 mb-5 bg-navy/[0.03] rounded-sm p-3 border border-navy/5">
          <Sparkles className="w-4 h-4 text-gold mt-0.5 shrink-0" />
          <p className="text-sm text-navy/80">{course.suitable}</p>
        </div>

        {/* Highlights */}
        <ul className="space-y-2.5">
          {course.highlights.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-navy/70">
              <CheckCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA - All buttons use same gold style */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-6 w-full flex items-center justify-center py-3 rounded-sm text-sm font-semibold transition-all duration-300 bg-gold hover:bg-gold-dark text-navy border border-gold/30 hover:border-gold"
        >
          สมัครเรียน
        </a>
      </div>
    </motion.div>
  );
}

export default function CoursesSection() {
  return (
    <section id="courses" className="relative py-20 lg:py-28" style={{ backgroundColor: '#FFFFF0' }}>
      {/* Background */}
      <div className="absolute inset-0">
        <img src={COURSES_BG} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 255, 240, 0.90)' }} />
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
          <p className="text-gold-dark text-sm font-semibold tracking-widest uppercase mb-3">
            Our Courses
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-navy mb-4">
            หลักสูตรสร้างบุคลากรคุณภาพ
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-navy/60 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            ออกแบบเพื่อ "คนที่อยากทำงานจริงในสายความงาม" ไม่ว่าจะเริ่มจากศูนย์
            หรืออยากอัปสกิลให้เติบโตในสายอาชีพ
          </p>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-sm px-5 py-2 mt-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold-dark text-sm font-semibold">
              ช่วงพิเศษ Early Bird — ราคาลดสูงสุด 50%
            </span>
          </div>
        </motion.div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-navy rounded-sm p-8 lg:p-12 border border-gold/10"
        >
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gold-light text-center mb-8">
            สิ่งที่ผู้เรียนจะได้รับจากทุกหลักสูตร
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎯", text: "สอนให้ลงมือทำจริง เคสจริง สถานการณ์จริง" },
              { icon: "🎁", text: "ฟรีอุปกรณ์การเรียนทุกหลักสูตร" },
              { icon: "💼", text: "เรียนจบ สามารถทำงานได้ทันที" },
              { icon: "📜", text: "ได้รับใบประกาศนียบัตรจากกระทรวงศึกษาธิการ เพื่อนำไปต่อยอดการทำงาน" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-gold/5 rounded-sm p-5 border border-gold/10"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 240, 0.9)' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
