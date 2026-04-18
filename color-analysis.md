# Color Analysis - Courses Section

## ปัญหาที่พบ:
1. ราคาใช้สี text-navy (เข้มเกินไป) ไม่โดดเด่น
2. ราคาเดิม (ขีดฆ่า) ใช้ text-muted-foreground ซึ่งดูจืด
3. ปุ่ม "สมัครเรียน" มี 2 สี: featured = bg-gold, non-featured = bg-navy → ไม่เป็นโทนเดียวกัน
4. Card border ต่างกัน: featured = gold-frame, non-featured = border-gray-100
5. ราคาพิเศษควรเน้นด้วยสี gold ให้โดดเด่นกว่านี้
6. ปุ่ม "สมัครเรียน" ควรเป็นสีเดียวกันทุก card

## แผนแก้ไข:
- ราคาพิเศษ → ใช้สี gold-dark ให้โดดเด่น
- ราคาเดิม → ใช้สีเทาอ่อนขีดฆ่า
- ปุ่มสมัครเรียน → ใช้สี gold ทุก card เป็นโทนเดียวกัน
- Card border → ใช้ gold/20 ทุก card ให้เป็นโทนเดียวกัน
- เพิ่ม badge ราคาลดให้ทุก card ไม่ใช่แค่ featured
