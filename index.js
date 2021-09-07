const express = require('express') //importa o express

const server = express() //cria variavel chamada server que chama a função express

server.use(express.json()) //faz com que o express entenda o JSON

const geeks = [] //As informações ficarão armazenadas dentro deste array []

server.get('/geeks', (req, res) => {
        return res.json(geeks)
    }) // rota para listar todos os geeks

server.get('/geeks/:index', (req, res) => {
        return res.json(req.user)
    }) // Rota para listar os geeks

server.post('/geeks', (req, res) => {
    const { name } = req.body // assim esperamos buscar o name informado dentro do body da requisição
    geeks.push(name)
    return res.json(geeks) // retorna a informação da variável geeks
})

server.put('/geeks/:index', (req, res) => {
        const { index } = req.params // recupera o index com os dados
        const { name } = req.body

        geeks[index] = name //sobrepõe o index obtido na rota de acordo com o novo valor

        return res.json(geeks)
    }) //retorna novamente os geeks atualizados após o update

server.delete('/geeks/:index', (req, res) => {
        const { index } = req.params //recupera o index com os dados

        geeks.splice(index, 1) //percorre o vetor até o index selecinado e deleta uma posição no array

        return res.send()
    }) //retorna os dados após a exclusão

server.listen(3000) //faz com que o servidor seja executado na porta 3000 do seu localhost:3000