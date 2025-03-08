import { Specifications, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function addSpecifications(specificationData: Specifications): Promise<Specifications> {
    const createSpecification = await prisma.specifications.create({
        data: {
            ...specificationData,
            created_at: new Date().toISOString(),
        },
    });
    return createSpecification;
}

export async function findSpecificationByName(name: string): Promise<Specifications | null> {
    return await prisma.specifications.findFirst({
        where: { name },
    });
}

export function listSpecifications(): Promise<Specifications[]> {
    return prisma.specifications.findMany();
}
