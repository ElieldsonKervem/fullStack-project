// controllers/FileController.ts
import { Request, Response } from 'express';

export function fileUploadController(req: Request, res: Response): void {
  // Após o middleware de upload, o arquivo estará disponível em req.file
  if (!req.file) {  
    res.status(400).json({ error: 'Nenhum arquivo enviado.' });
    return;
  }
  // Exemplo: retorna os dados do arquivo
  res.status(201).json({
    message: 'Arquivo enviado com sucesso!',
    file: req.file
  });
}
