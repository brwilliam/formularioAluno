export default function autenticar(requisicao, resposta, next){
    if (requisicao.session.usuarioLogado === true){
        next();
    } 
    else {
        resposta.redirect('/aluno6-ppiadsead/login.html');
    }
}
