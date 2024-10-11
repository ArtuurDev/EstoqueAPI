import express from 'express'
const app = express() 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
import {router} from './src/controllers/produtos.controller.js'


// 
app.use('/', router)

app.listen(3000, () => {

    console.log('app rodando')
})