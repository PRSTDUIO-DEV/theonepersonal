import { motion } from "framer-motion";

/*
 * Design: Royal Academy — Facilities gallery with masonry-style layout
 * Ivory background with gold accents
 */

const facilities = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/LINE_ALBUM_281225_260404_3_bd465401.jpg",
    alt: "ป้ายชื่อโรงเรียน The One Persona",
    label: "ป้ายโรงเรียน",
    span: "md:col-span-2",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/LINE_ALBUM_281225_260404_11_b502f8e0.jpg",
    alt: "ห้องเรียนพร้อมจอ TV",
    label: "ห้องเรียนทฤษฎี",
    span: "",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/LINE_ALBUM_281225_260404_5_dfe26e30.jpg",
    alt: "ห้องปฏิบัติการ",
    label: "ห้องปฏิบัติการ",
    span: "",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/LINE_ALBUM_281225_260404_6_b2c23ec6.jpg",
    alt: "ห้องปฏิบัติการ 2",
    label: "ห้องฝึกปฏิบัติ",
    span: "",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/LINE_ALBUM_281225_260404_12_1e4b5ba1.jpg",
    alt: "ห้องเรียน whiteboard",
    label: "ห้องเรียนกลุ่ม",
    span: "md:col-span-2",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/LINE_ALBUM_281225_260404_1_c142d558.jpg",
    alt: "ห้องเรียนพร้อมโปสเตอร์",
    label: "ห้องสัมมนา",
    span: "",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/LINE_ALBUM_281225_260404_7_03cb82d6.jpg",
    alt: "ห้องเรียนขนาดใหญ่",
    label: "ห้องอบรม",
    span: "",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/YqZrqWN69QTJuxCoLfoGM3/LINE_ALBUM_281225_260404_10_d559bf2a.jpg",
    alt: "ทางเดินห้องเรียน",
    label: "ทางเดินภายใน",
    span: "",
  },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 lg:py-28" style={{ backgroundColor: '#FFFFF0' }}>
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
            Our Facilities
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-navy mb-4">
            สถานที่เรียน
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
            สภาพแวดล้อมที่พร้อมสำหรับการเรียนรู้ ห้องเรียนสะอาด ทันสมัย พร้อมอุปกรณ์ครบครัน
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {facilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative group overflow-hidden rounded-sm ${item.span}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                </div>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/40 transition-colors duration-500 rounded-sm pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
