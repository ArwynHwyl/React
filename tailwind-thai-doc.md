# คู่มือการใช้งาน Tailwind CSS ฉบับภาษาไทย

## การจัดการพื้นที่ (Spacing)

### Margin
- `m-{size}` - กำหนด margin ทั้ง 4 ด้าน
- `mt-{size}` - margin ด้านบน
- `mb-{size}` - margin ด้านล่าง
- `ml-{size}` - margin ด้านซ้าย
- `mr-{size}` - margin ด้านขวา
- `mx-{size}` - margin ด้านซ้ายและขวา
- `my-{size}` - margin ด้านบนและล่าง

### Padding
- `p-{size}` - กำหนด padding ทั้ง 4 ด้าน
- `pt-{size}` - padding ด้านบน
- `pb-{size}` - padding ด้านล่าง
- `pl-{size}` - padding ด้านซ้าย
- `pr-{size}` - padding ด้านขวา
- `px-{size}` - padding ด้านซ้ายและขวา
- `py-{size}` - padding ด้านบนและล่าง

## ขนาด (Sizing)

### ความกว้าง
- `w-{size}` - กำหนดความกว้างแบบตายตัว
- `w-full` - ความกว้าง 100%
- `w-screen` - ความกว้างเท่าหน้าจอ
- `w-auto` - ความกว้างอัตโนมัติ

### ความสูง
- `h-{size}` - กำหนดความสูงแบบตายตัว
- `h-full` - ความสูง 100%
- `h-screen` - ความสูงเท่าหน้าจอ
- `h-auto` - ความสูงอัตโนมัติ

## การจัดการข้อความ (Typography)

### ขนาดตัวอักษร
- `text-xs` - ขนาดเล็กมาก
- `text-sm` - ขนาดเล็ก
- `text-base` - ขนาดปกติ
- `text-lg` - ขนาดใหญ่
- `text-xl` - ขนาดใหญ่มาก
- `text-2xl` ถึง `text-9xl` - ขนาดใหญ่พิเศษ

### น้ำหนักตัวอักษร
- `font-thin` - บางมาก (100)
- `font-light` - บาง (300)
- `font-normal` - ปกติ (400)
- `font-medium` - กลาง (500)
- `font-semibold` - หนาปานกลาง (600)
- `font-bold` - หนา (700)
- `font-extrabold` - หนามาก (800)

### การจัดตำแหน่งข้อความ
- `text-left` - ชิดซ้าย
- `text-center` - กึ่งกลาง
- `text-right` - ชิดขวา
- `text-justify` - จัดเต็มแนว

## สี (Colors)

### สีพื้นหลัง
- `bg-{color}-{shade}` - กำหนดสีพื้นหลัง
- ตัวอย่าง: `bg-blue-500`, `bg-red-700`

### สีตัวอักษร
- `text-{color}-{shade}` - กำหนดสีตัวอักษร
- ตัวอย่าง: `text-green-500`, `text-yellow-600`

## การจัดการ Layout

### Display
- `block` - แสดงแบบ block
- `inline` - แสดงแบบ inline
- `inline-block` - แสดงแบบ inline-block
- `flex` - แสดงแบบ flex
- `grid` - แสดงแบบ grid
- `hidden` - ซ่อนองค์ประกอบ

### Flexbox
- `flex-row` - จัดเรียงแนวนอน
- `flex-col` - จัดเรียงแนวตั้ง
- `justify-start` - จัดชิดซ้าย
- `justify-center` - จัดกึ่งกลางแนวนอน
- `justify-end` - จัดชิดขวา
- `items-start` - จัดชิดบน
- `items-center` - จัดกึ่งกลางแนวตั้ง
- `items-end` - จัดชิดล่าง

## การตอบสนอง (Responsive Design)

สามารถใช้ prefix ต่อไปนี้เพื่อกำหนดสไตล์ตามขนาดหน้าจอ:
- `sm:` - ความกว้างมากกว่า 640px
- `md:` - ความกว้างมากกว่า 768px
- `lg:` - ความกว้างมากกว่า 1024px
- `xl:` - ความกว้างมากกว่า 1280px
- `2xl:` - ความกว้างมากกว่า 1536px

ตัวอย่าง: `md:flex-row` จะใช้ `flex-row` เมื่อหน้าจอมีขนาดมากกว่า 768px

## ตัวอย่างการใช้งาน

```html
<div class="m-4 p-6 bg-white rounded-lg shadow-md">
  <h1 class="text-2xl font-bold text-gray-800 mb-4">หัวข้อ</h1>
  <p class="text-base text-gray-600">
    เนื้อหาตัวอย่าง
  </p>
</div>
```
