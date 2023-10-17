export default class Aluno{
    //definindo de forma privada os atributos da classe
    #nome
    #cpf
    #dataNasc
    #genero
    #endereco
    #bairro
    #email
    #celular
    #estadoCivil

    constructor(nome, cpf, dataNasc, genero, endereco, bairro, email, celular, estadoCivil){
        this.#nome = nome
        this.#cpf = cpf
        this.#dataNasc = dataNasc
        this.#genero = genero
        this.#endereco = endereco
        this.#bairro = bairro
        this.#email = email
        this.#celular = celular
        this.#estadoCivil = estadoCivil
    }
    //torna acessivel o atributo privado
    get nome(){ 
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }
    //================================================
    get cpf(){ 
        return this.#cpf;
    }

    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }
    //================================================
    get dataNasc(){ 
        return this.#dataNasc;
    }

    set dataNasc(novodataNasc){
        this.#dataNasc = novodataNasc;
    }
    //================================================
    get genero(){ 
        return this.#genero;
    }

    set genero(novoGenero){
        this.#genero = novoGenero;
    }
    //================================================
    get endereco(){ 
        return this.#endereco;
    }

    set endereco(novoEndereco){
        this.#endereco = novoEndereco;
    }
    //================================================
    get bairro(){ 
        return this.#bairro;
    }

    set bairro(novoBairro){
        this.#nome = novoBairro;
    }
    //================================================
    get email(){ 
        return this.#email;
    }

    set email(novoEmail){
        this.#email = novoEmail;
    }
    //================================================
    get celular(){ 
        return this.#celular;
    }

    set celular(novoCelular){
        this.#celular = novoCelular;
    }
    //================================================
    get estadoCivil(){ 
        return this.#estadoCivil;
    }

    set estadoCivil(novoEstadoCivil){
        this.#estadoCivil = novoEstadoCivil;
    }

    //definindo para um formato JSON

    toJSON(){
        return{
            nome: this.#nome,
            cpf: this.#cpf,
            dataNasc: this.#dataNasc,
            genero: this.#genero,
            endereco: this.#endereco,  
            bairro: this.#bairro,
            email: this.#email,
            celular: this.#celular,
            estadoCivil: this.#estadoCivil, 
        }
    }
}