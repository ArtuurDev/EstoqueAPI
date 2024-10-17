import express from 'express'
const app = express() 
import routerProdutos from './src/controllers/produtos.controllers/produtos.controller.js';
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// 
app.use('/', routerProdutos)


app.listen(3000, () => {

    console.log('app rodando')
})