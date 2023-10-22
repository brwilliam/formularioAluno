 import { Router } from "express";
 import AlunoCtrl from "../Controle/AlunoCtrl.js"

const rotaAluno = Router(); //manipulando mini aplicação express

const aluCTRL = new AlunoCtrl();

rotaAluno.get('/:termo', aluCTRL.consultar)
.get('/', aluCTRL.consultar)
.post('/', aluCTRL.gravar)
.put('/', aluCTRL.atualizar)
.delete('/', aluCTRL.excluir)


 export default rotaAluno;