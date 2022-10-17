// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  // const post1 = await prisma.user.create({
  //   data: {
  //     fullName: 'Firman Lasaman',
  //     username: 'user1',
  //     password: 'password1',
  //   },
  // });
  const service1 = await prisma.services.create({
    data: {
      name: 'ทำความสะอาดทั่วไป 2 ชั่วโมง',
      price: 549,
      picture: 'https://example.com/img111',
      description: 'เพิ่งรู้ตัวว่าสายเกินไป ก็ตอนที่ตื่นมาตอนเที่ยงนี่แหละ',
    },
  });
  const service2 = await prisma.services.create({
    data: {
      name: 'ทำความสะอาดทั่วไป 1 ชั่วโมง 30 นาที',
      price: 349,
      picture: 'https://example.com/img222',
      description: 'อย่าให้เราเมินนะ แม่โทรมาไม่รับก็ทำมาแล้ว',
    },
  });
  const service3 = await prisma.services.create({
    data: {
      name: 'บริการซักอกรีบด่วนๆ 40นาที',
      price: 240,
      picture: 'https://example.com/img333',
      description: 'ใบไม้ยังร่วง นับประสาอะไรกับคนง่วงอย่างเรา',
    },
  });
  const service4 = await prisma.services.create({
    data: {
      name: 'บริการล้างแอร์',
      price: 550,
      picture: 'https://example.com/img444',
      description: 'ช่วงนี้ใจมันชาแล้ว แต่ไม่รู้ว่าจะชาบู หรือชาไข่มุก',
    },
  });
  const service5 = await prisma.services.create({
    data: {
      name: 'ดูดฝุ่นทั่วห้องพร้อมฉีดยาทำความสะอาด',
      price: 810,
      picture: 'https://example.com/img555',
      description: 'จะหมดปีเเล้ว ยังไม่มีอะไรดีๆ เลย นอกจากหน้าตา',
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
