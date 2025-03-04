
import Category from "../models/CategoryModel";

const categories: Category[] = [];


export function addCategory(category:Category):void{
    categories.push(category)
}
export function findCategoryByName(name: string): Category | undefined {
    return categories.find(category => category.name === name);
  }
  
export function listCategories():Category[]{
    return categories;
}