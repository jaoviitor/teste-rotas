const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/add', (res, req) =>{
    const {name, email} = req.body;

    res.send('Usuário adicionado com sucesso!');
})

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});