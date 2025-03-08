import { User } from '@prisma/client';
import { CreateAcount, FindAllUser, findUserByUserName } from '../repositories/UserRepository';

import {hash} from "bcrypt";


export async function createAcount({ id, password, name, userName, email, driverLicence }: Omit<User, 'created_at'>): Promise<{ error?: string, user?: User }> 
{
    const existUser = await findUserByUserName(userName)
    if (existUser) {
        return { error: "Usuario já existe" }
    }
    const hashedPassword =  await hash(password,8)
    const user = await CreateAcount({
        id,
        name,
        userName,
        password:hashedPassword,
        email,
        isAdmin:false,
        created_at: new Date(),
        driverLicence
    })

    return { user }
}

export function listUsers(){
    return FindAllUser()
}