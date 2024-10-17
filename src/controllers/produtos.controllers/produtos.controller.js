import express from 'express'
import { ProdutoService } from '../../services/produtos.services/produtos.services.js'
const routerProdutos = express.Router()
const produtoService = new ProdutoService()




routerProdutos.post('/', async (req, res) => {

    const data = req.body

    if (!data.nome || typeof data.nome !== 'string') {
        return res.status(400).json({message: 'O nome do produto deve ser uma string e todos os campos são obrigatorios'})
    }
    if (!data.preco || typeof data.preco !== 'number') {
        return res.status(400).json({message: 'O preço do produto deve ser um number e todos os campos são obrigatorios'})
    }
    if (!data.localizacaoNoDeposito || typeof data.localizacaoNoDeposito !== 'string') {
        return res.status(400).json({message: 'A localização do produto deve ser uma string e todos os campos são obrigatorios'})
    }
    if (!data.quantidadeEmEstoque || typeof data.quantidadeEmEstoque !== 'number') {
        return res.status(400).json({message: 'A quantidade do estoque do produto deve ser um number e todos os campos são obrigatorios'})
    }
    if (!data.categoriaId || typeof data.categoriaId !== 'number') {
        return res.status(400).json({message: 'A categoria do produto deve ser um number e todos os campos são obrigatorios'})
    }
    if (!data.movimentacoes || typeof data.movimentacoes !== 'number') {
        return res.status(400).json({message: 'A movimentação do produto deve ser um number e todos os campos são obrigatorios'})
    }


    try {

        const produto = await produtoService.create(data)
        return res.status(200).json({message: 'produto criado com sucesso'})
    } catch (err) {
        const status = err.status || 500
        const message = err.details || 'erro interno no servidor'

        return res.status(status).json({message})
    }



})

routerProdutos.get('/produtos', async (req, res) => {

    try {

        const produtos = await produtoService.read()
        return res.status(200).json(produtos)

    }
    catch(err) {
        const status = err.status || 500
        const message = err.details || 'erro interno no servidor'

        return res.status(status).json({message})
    }

})
export default routerProdutos