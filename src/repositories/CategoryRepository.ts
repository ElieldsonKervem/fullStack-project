import { PrismaClient, Category } from '@prisma/client';
const prisma = new PrismaClient();

export async function addCategory(categoryData: Omit<Category, 'created_at'>): Promise<Category> {
  const category = await prisma.category.create({
    data: {
      ...categoryData,
      created_at: new Date().toISOString(), // Caso não haja default no schema
    },
  });
  return category;
}

export async function findCategoryByName(name: string): Promise<Category | null> {
  return await prisma.category.findUnique({
    where: { name },
  });
}

export async function listCategories(): Promise<Category[]> {
  return await prisma.category.findMany();
}
