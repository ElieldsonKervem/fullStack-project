import { Category } from '@prisma/client';
import { addCategory, findCategoryByName, listCategories as listCategoriesRepo } from "../repositories/CategoryRepository";

export async function createCategory({ id, name, description }: Omit<Category, 'created_at'>): Promise<{ error?: string, category?: Category }> {
  const existingCategory = await findCategoryByName(name);
  if (existingCategory) {
    return { error: "Categoria já existe" };
  }

  const category = await addCategory({ id, name, description });
  return { category };
}

export async function listCategories(): Promise<Category[]> {
  const categories = await listCategoriesRepo();
  return categories;
}
