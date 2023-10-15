import { Router } from "express";

const rotaLogin = Router();

rotaLogin
  .get("1", (requisicao, resposta) => {
    resposta.redirect("/voltar.html");
  })
  .post("/", (requisicao, resposta) => {
    const usuario = requisicao.body.usuario;
    const senha = requisicao.body.senha;
    if (usuario === 'Renato' && senha ==='123') {
      requisicao.session.usuarioLogado = true;
      resposta.redirect("./cadastroAluno.html");
    } else {
      resposta.redirect("./voltar.html");
    }
  });

export default rotaLogin;
