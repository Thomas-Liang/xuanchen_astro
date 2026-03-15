import { db } from './index';
import { users, categories } from './schema';
import { eq } from 'drizzle-orm';

const existingAdmin = await db.select().from(users).where(eq(users.username, 'admin')).get();

if (!existingAdmin) {
  await db.insert(users).values({
    username: 'admin',
    password: 'admin123',
    role: 'admin',
  });
  console.log('Admin user created: admin / admin123');
} else {
  console.log('Admin user already exists');
}

const existingCategories = await db.select().from(categories);
if (existingCategories.length === 0) {
  await db.insert(categories).values([
    { name: '编程开发', slug: 'dev', description: '编程开发相关资源', icon: '💻', sort: 1 },
    { name: '设计资源', slug: 'design', description: '设计素材和工具', icon: '🎨', sort: 2 },
    { name: '效率工具', slug: 'tools', description: '提升效率的工具', icon: '🛠️', sort: 3 },
    { name: '学习资料', slug: 'learning', description: '学习教程和课程', icon: '📚', sort: 4 },
    { name: '云存储', slug: 'cloud', description: '云存储服务', icon: '☁️', sort: 5 },
  ]);
  console.log('Default categories created');
}

console.log('Database seeded successfully!');
