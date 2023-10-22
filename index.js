import express from "express";
import autenticar from "./seguranca/Autenticacao.js";
import session from "express-session";
import rotaLogin from "./rotas/rotaLogin.js";
import rotaAluno from "./Backend/Rotas/rotaAluno.js";

//ip 0.0.0.0 todas interfaces disponiveis
const host = '0.0.0.0';
//porta disponivel para meu usuario na tabela
const porta='3206';

const app = express();

app.use(express.json()); // dizendo ao servidor como processar json

app.use(express.urlencoded({ extended: false }));
//origem da requisição.usuario
app.use(session({
    secret:'MinhAChAveS3crEt4',
    resave: true, //salvar a sessao
    saveUninitialized: false, // nao autenticado, sem secao valida
    cookie:{
        maxAge: 1000 * 60 * 30 //30min
    }
}));

//publicar da pasta publico //conteudo estatico
app.use(express.static('./publico'));

//requisiçoes rota aluno
app.use('/alunos', rotaAluno);

app.use('/login', rotaLogin);
//autencicar para acessar protegido
app.use(autenticar, express.static('./protegido'));




app.listen(porta, host, () => {
    console.log("Servidor escutando em ", host, porta);
})