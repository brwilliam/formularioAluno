CREATE TABLE aluno (
    nome varchar (100) not null,
    cpf varchar (11) not null primary key,
    dataNasc varchar (10) not null,
    genero varchar (20) not null,
    endereco varchar (100) not null,
    bairro varchar (100) not null,
    email varchar (100) not null,
    celular varchar (20) not null,
    estadoCivil varchar (20) not null
);