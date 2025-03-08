import { Request, Response } from "express";
import { createCategory, listCategories } from "../services/CategoryService";

export async function createCategoryController(request: Request, response: Response): Promise<void> {
  const { id, name, description } = request.body;
  const result = await createCategory({ id, name, description });
  
  if (result.error) {
    response.status(409).json({ error: result.error });
    return;
  }
  
  response.status(201).json({ message: "Categoria criada com sucesso", category: result.category });
}

export async function listCategoriesController(request: Request, response: Response): Promise<void> {
  const categories = await listCategories();
  response.json(categories);
}