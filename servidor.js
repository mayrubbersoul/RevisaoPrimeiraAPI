const express = require("express");

const app = express();
app.use(express.json());

let ALUNOS = [
    {id: 1, nome: "Iago", curso: "Desenvolvimento de jogos"},
    {id: 2, nome: "Guilherme", curso: "Desenvolvimento de traumas"},
    {id: 3, nome: "Igor", curso: "Desenvolvimento de sites"},
    {id: 4, nome: "Vinícius", curso: "Desenvolvimento de combos"},
    {id: 5, nome: "Marjory", curso: "Desenvolvimento de duuuuur"},
];

app.get("/", (req, res) =>{
    res.status(200).json({
        mensagem: "API Alunos Funcionando"
    });
});

app.get("/alunos", (req, res) =>{
    res.json(ALUNOS);
});

app.post("/alunos/cadastrar", (req, res)=> {
    const {nome, curso} = req.body;

    if(!nome || !curso){
        return res.status(400).json({msg: "Nome e curso são obrigatórios"});
    };

    const id = ALUNOS.length > 0 ? ALUNOS[ALUNOS.length - 1].id + 1 : 1;

    const novoAluno = {
        id: id,
        nome: nome,
        curso: curso
    };
    
    ALUNOS.push(novoAluno);
    
    res.status(201).json({msg: "Aluno cadastrado com sucesso"});
});

app.get("/alunos/:valor", (req, res) =>{
    const valor = Number(req.params.valor);

    const aluno = ALUNOS.find(aluno => aluno.id === valor);

    if (!aluno){
        return res.status(201).json({msg: "Aluno não encontrado"})
    }

    res.status(200).json(aluno);
})

const PORTA = 3000;
app.listen(PORTA, ()=>{
    console.log("Servidor iniciado com sucesso");
    console.log(`http://localhost:${PORTA}`);
});