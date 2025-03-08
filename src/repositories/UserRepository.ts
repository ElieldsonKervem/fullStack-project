import { User, PrismaClient } from "@prisma/client";

const prismasClient = new PrismaClient();


export async function CreateAcount(acountData:User):Promise<User>{
    const createCount = await prismasClient.user.create({
        data:{
            ...acountData,
            created_at: new Date(),
        }
    })
    return createCount
}

export async function findUserByUserName(userName: string): Promise<User | null> {
    if (!userName) {
      throw new Error("O userName não foi informado");
    }
    return await prismasClient.user.findUnique({
      where: { userName }
    });
  }

export async function FindAllUser():Promise<User[]>{
    return await prismasClient.user.findMany()
}

//sempre criei primeiro os metodos que vão lidar com o banco de dados, depois faça a validação no service de acordor com sua regra de negocios, depois mande para o controller a reposabilidade de encapsular os dados que irão vir da router e depois passe pra router a capacidade de criar a rota e lidar com middleware