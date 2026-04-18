# Skill Planning: Thai Vocational School Website Builder

## กระบวนการที่ใช้ในโปรเจกต์นี้

1. วิเคราะห์ข้อมูลจากผู้ใช้ (รูปภาพ, ข้อความ, เอกสาร)
2. Brainstorm design ideas (3 แนวทาง) → เลือก 1 แนวทาง
3. อัปโหลดรูปภาพจริงไป CDN
4. สร้าง hero images ด้วย generate_image
5. ตั้งค่า theme (สี, font, CSS variables)
6. สร้าง sections ทีละส่วน:
   - Navbar, Hero, WhyUs, Courses, LearningAtmosphere, Instructor, Testimonials, Facilities, LocationMap, Contact, Footer
7. ตรวจสอบและปรับแต่ง (สี, responsive, ข้อมูล)
8. บันทึก checkpoint และส่งมอบ

## Reusable Resources

| Type | Content | Reason |
|------|---------|--------|
| references/ | section-checklist.md | รายการ sections มาตรฐานสำหรับเว็บโรงเรียน/สถาบัน |
| references/ | color-theme-guide.md | แนวทางการตั้งค่าสีและ font สำหรับ Tailwind 4 |
| references/ | image-generation-prompts.md | ตัวอย่าง prompts สำหรับสร้างรูปบรรยากาศการเรียน |

## Skill Scope
- สร้างเว็บไซต์สำหรับโรงเรียนวิชาชีพ / สถาบันฝึกอบรม / ศูนย์เรียนรู้ในไทย
- ครอบคลุมทั้ง design, content, images, deployment
- ใช้ React + Tailwind + shadcn/ui stack
