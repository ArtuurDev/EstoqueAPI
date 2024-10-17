import { PrismaClient} from "@prisma/client";

export class ProdutoService {

    constructor() {
        
        this.prisma = new PrismaClient()

    }


    async create(data) {


        try {
            const produto = await this.prisma.produtos.create({
                data
            }) 
    
            if (!produto) {
                const error = new Error()
                error.status = 400
                error.details = {
                    message: 'erro ao criar produto' 
                }
    
                throw error
            }
    
            return produto
        } 
        catch(err) {
            console.log(err)
            throw err
        }
       
    } 


    async read() {

        try {

            const produtos = await this.prisma.produtos.findMany()
            
            if (!produtos) {

                const error = new Error()
                error.status = 400
                error.details = {
                    message: 'erro ao buscar produtos'
                }

                throw error
            }

            return produtos
        
        } catch(err) {

            console.log(err)
        
            throw err

            

        } 

}}