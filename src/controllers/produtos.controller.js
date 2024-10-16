import express from 'express';
const router = express.Router();
import { ProdutoServices } from '../services/produtos.services.js';

const produtoServices = new ProdutoServices();

router.post('/', async (req, res) => {
    const data = req.body;


    if (!data.nome || !data.localizacaoNoDeposito || !data.quantidadeEmEstoque || !data.preco || !data.categoria) {
        return res.status(400).json({ error: 'Todos os campos são necessários' });
    }

    try {
        
        const produtos = await produtoServices.create(data);
        return res.json(produtos);
    } 
    catch (error) {
        
        const status = error.status || 500;
        const message = error.details || 'Erro interno do servidor';
        return res.status(status).json({ message });
    }
});

export default router;
