const express = require("express");

const app = express();
app.get("/",(req,res) =>{
    res.json({
        mensagem: "API Alunos funcionando"
    })
})

const PORTA = 3000;
app.listen(PORTA, () =>{
    console.log("Servisor iniciado com sucesso");
    console.log(`http://localhost:${PORTA}`);
});