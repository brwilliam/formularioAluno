//DAO= DATA ACCESS OBJECT   

import Aluno from "../Modelo/Aluno.js";
import conectar from "./Conexao.js";

export default class AlunoDAO{

    async gravar(aluno){
        if(aluno instanceof Aluno){
            const conexao = await conectar();
            const sql = 'INSERT INTO aluno (nome, cpf, dataNasc, genero, endereco,\
                             bairro, email, celular, estadoCivil) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, )';
            const parametros = [aluno.nome, aluno.cpf, aluno.dataNasc, aluno.genero, aluno.endereco,
                                aluno.bairro, aluno.email, aluno.celular, aluno.estadoCivil]
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(aluno){
        if(aluno instanceof Aluno){
            const conexao = await conectar();
            const sql = 'UPDATE aluno SET nome = ?, dataNasc = ?, genero = ?, endereco = ?,\
                             bairro = ?, email = ?, celular = ?, estadoCivil = ? WHERE cpf = ?';
            const parametros = [aluno.nome, aluno.dataNasc, aluno.genero, aluno.endereco,
                                aluno.bairro, aluno.email, aluno.celular, aluno.estadoCivil, aluno.cpf]
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(aluno){
        if(aluno instanceof Aluno){
            const conexao = await conectar();
            const sql = 'DELETE FROM aluno WHERE cpf = ?';
            const parametros = [aluno.cpf]
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(termo){
        const conexao = await conectar();
        if(!termo) termo = "";

        const listaAlunos=[];
        const sql = 'SELECT * FROM aluno WHERE nome LIKE ?';
        const parametros = ['%' + termo + '%'];
        const [rows] = await conexao.query(sql, parametros);
        for(const linha of rows){
            const aluno = new Aluno (linha.nome, linha.cpf, linha.dataNasc, linha.genero, 
                                        linha.endereco, linha.bairro, linha.email, linha.celular, linha.estadoCivil);
            listaAlunos.push(aluno);
                                     
        }

        return listaAlunos
    }
}

