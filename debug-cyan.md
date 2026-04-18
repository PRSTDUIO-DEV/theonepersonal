# Debug: Cyan Background Issue

ปัญหาคือพื้นหลังส่วน Courses แสดงเป็นสีฟ้าสด (cyan) แทนที่จะเป็น ivory

สาเหตุที่เป็นไปได้:
1. bg-ivory/85 ใน Tailwind 4 อาจไม่รองรับ opacity syntax กับ custom theme color ที่เป็น oklch
2. เมื่อ bg-ivory ไม่ถูก resolve ถูกต้อง Tailwind 4 อาจ fallback เป็นค่าเริ่มต้นหรือสีอื่น
3. รูป courses-bg มีโทนสีฟ้า/cyan และ overlay ไม่ทำงาน ทำให้เห็นสีจากรูป

แก้ไข: ใช้ inline style แทน Tailwind class สำหรับ bg-ivory/85 overlay
หรือเปลี่ยนเป็นใช้สี hex/rgb ตรงๆ แทน oklch custom color
