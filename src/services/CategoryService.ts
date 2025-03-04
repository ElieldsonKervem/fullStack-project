
import Category from "../models/CategoryModel";
import { addCategory,findCategoryByName,listCategories as listCategoriesRepo } from "../repositories/CategoryRepository"; 


export function createCategory({ id, name, description }: Omit<Category, 'created_at'>): { error?: string, category?: Category } {
    const existingCategory = findCategoryByName(name);
    if (existingCategory) {
      return { error: "Categoria já existe" };
    }

    const category: Category = {
        id,
        name,
        description,
        created_at: new Date().toISOString()
      };

    addCategory(category)

    return {category}

}

export function listCategories():Category[]{
    return listCategoriesRepo();    
}