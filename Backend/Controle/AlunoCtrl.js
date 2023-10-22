import { application } from "express";
import Aluno from "../Modelo/Aluno.js";

export default class AlunoCtrl{
    //classe controla os metodos GET POST PUT e DELETE

    gravar(requisicao, resposta){
        // no formato JSON
        resposta.type('application/json');
        if(requisicao.method === 'POST' && requisicao.is("application/json")){
            const dados = requisicao.body;
            const nome = dados.nome;
            const cpf = dados.cpf;
            const dataNasc = dados.dataNasc;
            const genero = dados.genero;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const email = dados.email;
            const celular = dados.celular;
            const estadoCivil = dados.estadoCivil;
            if (nome && cpf && dataNasc && genero && endereco && bairro && email && celular && estadoCivil){
                const aluno = new Aluno (nome, cpf, dataNasc, genero, endereco, bairro, email, celular, estadoCivil);
                aluno.gravar().then(()=>{
                    resposta.json({
                        status:true,
                        mensagem:"Aluno cadastrado com sucesso."
                    })
                    
                }).catch((erro)=>{
                    resposta.json({
                        status:false,
                        mensagem:"Erro ao cadastrar o aluno: " + erro.message
                    })
                });
            }
            else{
                resposta.json({
                    status:false,
                    mensagem:"Informe todos os dados do aluno conforme a documentação."
                })
            }
            
        }
        else{
            resposta.json({
                status:false,
                mensagem:"Requisição invalida! Informe um aluno no formato JSON."
            })
        }
    }
    atualizar(requisicao, resposta){
        resposta.type('application/json');
        if (requisicao.method === "PUT" && requisicao.is('application.json')){
            const dados = requisicao.body;
            const nome = dados.nome;
            const cpf = dados.cpf;
            const dataNasc = dados.dataNasc;
            const genero = dados.genero;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const email = dados.email;
            const celular = dados.celular;
            const estadoCivil = dados.estadoCivil;
            if (nome && cpf && dataNasc && genero && endereco && bairro && email && celular && estadoCivil){
                const aluno = new Aluno (nome, cpf, dataNasc, genero, endereco, bairro, email, celular, estadoCivil);
                aluno.atualizar().then(()=>{
                    resposta.json({
                        status:true,
                        mensagem:"Cliente atualizado com sucesso."
                    })
                }).catch((erro)=>{
                    resposta.json({
                        status: false,
                        mensagem: "Erro ao atualizar aluno:" + erro.message
                    })
                })
            }
            else{
                resposta.json({
                    status:false,
                    mensagem:"Informe todos os dados do aluno conforme a documentação."
                })
            }
        } 
        else{
            resposta.json({
                status:false,
                mensagem:"Requisição invalida! Informe um aluno no formato JSON para ser atualizado."
            })
        }
        
    }
    excluir(requisicao, resposta){
        resposta.type('application/json');
        if(requisicao.method === "DELETE" && requisicao.is('application/json')){
            const dados = requisicao.body;
            const cpf = dados.cpf;
            if (cpf){
                const aluno = new Aluno (
                cpf,
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',

            );
                aluno.excluir().then(()=>{
                    resposta.json({
                        status:true,
                        mensagem:"Aluno excluido com sucesso."
                    })
                }).catch((erro)=>{
                    resposta.json({
                        status:false,
                        mensagem:"Erro ao excluir o aluno: " + erro.message
                    })
                })
            }
            else{
                resposta.json({
                    status:false,
                    mensagem:"Informe o CPF do aluno para ser excluido."
                });
            }
        }
        else{
            resposta.json({
                status:false,
                mensagem:"Requisição invalida! Informe um aluno no formato JSON para ser excluido."
            })
        }
    }
    consultar(requisicao, resposta){
        resposta.type('application/json');
        if(requisicao.method === "GET"){
            let termo = requisicao.query.termo;
            if(!termo) termo ="";
            const aluno = new Aluno();
            aluno.consultar(termo).then((listaAlunos)=>{
                resposta.json(listaAlunos);
            }).catch((erro)=>{
                resposta.json({
                    status:false,
                    mensagem:"Erro ao consultar aluno: " + erro.message
                })
            })
        }else{
            resposta.json({
                status:false,
                mensagem:"Consulta invalida! Informe um aluno."
            })
        }
            
        
    }
}



