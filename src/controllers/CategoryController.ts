import { Request, Response } from "express";
import { createCategory, listCategories } from "../services/CategoryService";

export function createCategoryController(request: Request, response: Response): void {
    const { id, name, description } = request.body;
    const result = createCategory({ id, name, description });
    
    if (result.error) {
        response.status(409).json({ error: result.error });
        return;
    }
    
    response.status(201).json({ message: "Categoria criada com sucesso", category: result.category });
    return;
}

export function listCategoriesController(request: Request, response: Response): void {
    const categories = listCategories();
    response.json(categories);
    return;
}
