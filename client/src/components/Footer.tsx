import { Award } from "lucide-react";

/*
 * Design: Royal Academy — Footer with navy background
 */

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] py-12 lg:py-16">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                <span className="text-gold font-serif font-bold text-lg">T</span>
              </div>
              <div>
                <p className="text-white font-serif font-bold text-sm">The One Persona</p>
                <p className="text-gold/60 text-[10px] tracking-wider">VOCATIONAL SCHOOL</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              โรงเรียนวิชาชีพเดอะวันเพอร์โซนา สร้างบุคลากรคุณภาพสู่วงการความงาม
              ได้รับอนุญาตจากกระทรวงศึกษาธิการ
            </p>
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-sm px-3 py-1.5">
              <Award className="w-3.5 h-3.5 text-gold" />
              <span className="text-gold/80 text-[11px]">ได้รับอนุญาตจากกระทรวงศึกษาธิการ</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">หลักสูตร</h4>
            <ul className="space-y-2.5">
              {[
                "หลักสูตรผู้จัดการคลินิก",
                "หลักสูตรที่ปรึกษาการขาย",
                "หลักสูตรผู้ช่วยแพทย์",
                "หลักสูตร PR / FRONT / ADMIN",
                "หลักสูตรบุคลิกภาพ",
                "หลักสูตรการแต่งหน้า",
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-white/40 hover:text-gold text-sm transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">ติดต่อเรา</h4>
            <div className="space-y-3">
              <p className="text-white/40 text-sm leading-relaxed">
                324/13 ถนนสรรพาวุธ ชั้น 4 ห้อง 410-412<br />
                แขวงบางนาเหนือ เขตบางนา กรุงเทพฯ 10260
              </p>
              <a
                href="tel:0924050378"
                className="flex items-center gap-2 text-white/40 hover:text-gold text-sm transition-colors"
              >
                โทร: 092-405-0378
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582463515385"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-gold text-sm transition-colors"
              >
                Facebook Page
              </a>
              <p className="text-white/40 text-sm">
                เปิดรับสมัครตลอดทั้งปี
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} The One Persona Vocational School. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            โรงเรียนวิชาชีพเดอะวันเพอร์โซนา
          </p>
        </div>
      </div>
    </footer>
  );
}
