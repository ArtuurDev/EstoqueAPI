import express from 'express'
export const router = express.Router()
import { ProdutoService } from '../services/produtos.services.js'
import { PrismaClient } from '@prisma/client'
const produtoService = new ProdutoService()
const prisma = new PrismaClient()

router.post('/', async (req, res) => {

    try {

    const data = req.body
    
    if (!data.nome || !data.categoria || !data.preco || !data.quantidadeEmEstoque || !data.localizacaoNoDeposito) {

        return res.status(400).json({error: 'todos os campos são obrigatorios'})
    }

    const produto = await produtoService.create(data)

    res.status(201).json(produto)

    }
    catch(err) {
        console.log(err)
        return res.status(500).json({error: 'não foi possivel criar o produto'})
    }

})


router.get('/', async (req, res) => {

    try {
        const produtos = await produtoService.read()
        return res.status(200).json(produtos)

    }
    catch(err) {
        console.log(err)
        return res.status(500).json('erro')
    }


})


router.get('/:id', async (req, res) => {

    try {
        const id = parseInt(req.params.id, 10)

        if (!id) {
            return res.status(400).json({error: 'id do produto não foi informado corretamente'})
        }

        const produto = await produtoService.showProduto(id)

        res.status(200).json(produto)

    }
    catch(err) {
        console.log(err)
        return res.status(500).json({error: 'erro ao buscar'})
    }

})
