import express from "express"; 

//@types/express - yarn add @types/express -D para adicionar 
const app = express();

/**
 * GET => Buscar informação 
 * POST => Inserir uma informação na API
 * PUT => Atualizar uma informação
 * Delete => Deletar uma informação 
 * Patch => Alterar uma informação especifica
 */

app.get('/test', (request, response) => {
    return response.send('Ola NLW')
})

app.post('/test-post',(request, response) => {
    return response.send('NLW post')
})

app.listen(3000 , ()=> console.log ('Server is run'));