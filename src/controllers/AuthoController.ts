import { Request,Response } from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { PrismaClient,User } from '@prisma/client';

const prisma = new PrismaClient();

export async function login(request:Request,response:Response): Promise<Response> {
    const {email,password}:User = request.body;

    try{
        const user = await prisma.user.findFirst({
            where: { email }
        })
        if(!user){
             response.status(401).json({ message: 'Credenciais inválidas' });
              return;
        }

        const isPasswordValid = await bcrypt.compare(password,user.password)

        if(!isPasswordValid){
            response.status(401).json({ message: 'Credenciais inválidas' });
            return;
        }
        
        //gerar o token de autenticação para o usuario

        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET!, // Certifique-se de ter essa variável definida no seu .env
            { expiresIn: '1h' }
          );

          response.status(200).json({token})

    }catch(e){
        console.log(e)
    }
}