import { PrismaClient } from "@prisma/client"

export class ProdutoService {
    
    constructor () {

        this.prisma = new PrismaClient()
    }


    async create(data) {

        try {
            const produto = await this.prisma.produtos.create({
                data
            }) 

        return produto
        
        } catch (err) {

            console.log(err)
        
        }

    }

    async showProduto(id) {

        try {

            const produto = await this.prisma.produtos.findFirst({
                where: {
                    id
                }
            })

            if (!produto) {

                return {message: 'produto não encotrado'}
            }

            return produto

        } 
        catch(err) {
            console.log(err)
            return {message: 'erro ao completar a açao'}
        }
    }

    async read() {

        try {

            return this.prisma.produtos.findMany()

        }

        catch (err) {
            console.log(err)
            return {message: 'erro inesperado'}
        }
    }

}