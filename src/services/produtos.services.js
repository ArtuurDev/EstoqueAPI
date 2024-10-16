import { PrismaClient } from "@prisma/client";

export class ProdutoServices {
    constructor() {
        this.prisma = new PrismaClient()
    }

    async create(data) {
        
        const { nome } = data;

        try {
            
            const nomeProduto = await this.prisma.produtos.findMany({
                where: {
                    nome: nome
                }
            });

            if (nomeProduto.length > 0) {
                const error = new Error();
                error.status = 400;
                error.details = {
                    nome: nomeProduto.nome,
                    message: 'Esse produto já existe no estoque'
                };

                throw error;
            }

            const produto = await this.prisma.produtos.create({
                data
            });

            return { message: 'Produto criado com sucesso', produto };

        } catch (erro) {
            console.error(erro);

            if (erro.status) {
                throw erro; 
            }

            return { message: 'Erro inesperado ao criar o produto' };
    }
    }}
