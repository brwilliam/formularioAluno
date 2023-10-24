const botaoCadastrar = document.getElementById('cadastrar');
const formulario = document.getElementById('formAluno');

function obterAlunosFormulario(){
    return{
        nome:document.getElementById('nome').value,
        cpf:document.getElementById('cpf').value,
        dataNasc:document.getElementById('dataNasc').value,
        genero:document.getElementById('genero').value,
        endereco:document.getElementById('endereco').value,
        bairro:document.getElementById('bairro').value,
        email:document.getElementById('email').value,
        celular:document.getElementById('celular').value,
        estadoCivil:document.getElementById('estadoCivil').value,
    }
}

function limparFormulario(){
        document.getElementById('nome').value = '';
        document.getElementById('cpf').value = '';
        document.getElementById('dataNasc').value = '';
        document.getElementById('genero').value = '';
        document.getElementById('endereco').value = '';
        document.getElementById('bairro').value = '';
        document.getElementById('email').value = '';
        document.getElementById('celular').value = '';
        document.getElementById('estadoCivil').value = 'Selecione uma opção';
}

botaoCadastrar.onclick=()=>{
    if(formulario.checkValidity()){
        const aluno = obterAlunosFormulario();
        cadastrarAluno(aluno);
        limparFormulario();
    }
    formulario.classList.add('was-validated');

}
//quando a pagina for carregada
window.onload = () => {
    obterAlunos();
}

function mostrarMensagem(mensagem,tipo){
    let divMensagem = document.getElementById('mensagem');
    divMensagem.innerHTML= `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
    setTimeout(()=>{
        divMensagem.innerHTML = '';     
    }, 5000);
}

function obterAlunos(){
    fetch('https://129.146.68.51/aluno6-ppiadsead/alunos',{method:'GET'}).then((resposta)=>{
        if (resposta.status === 200){
            return resposta.json();
        }
        else{
            return [];
        }
    }).then((listaAlunos)=>{
        mostrarAlunos(listaAlunos);
    }).catch((erro)=>{
        mostrarMensagem('Não foi possivel obter os alunos do backend. Erro: '+ erro.mensage,'danger');
    })
}

function cadastrarAluno(aluno){
    fetch('https://129.146.68.51/aluno6-ppiadsead/alunos',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(aluno)
    }).then((resposta)=> {
        if (resposta.status === 200){
            return resposta.json();
        }
        else{
            return {
                status:false,
                mensagem: 'Não foi possivel enviar o aluno para o banco de dados.'
            };
        }
    }).then((respostaBackEnd)=>{
        if (respostaBackEnd.status){
            mostrarMensagem(respostaBackEnd.mensagem,'sucess');
            obterAlunos();
        }
        else{
            amostrarMensagem(respostaBackEnd.mensagem,'danger');
        }

    }).catch((erro)=>{
        mostrarMensagem(erro.mensage,'danger');
    })
}

function mostrarAlunos(listaAlunos) {
    let elementoDivTabela = document.getElementById('espacoTabela');

    if (listaAlunos.length > 0) {
        // Limpar elemento div tabela 
        elementoDivTabela.innerHTML = '';

        let tabela = document.createElement('table');
        tabela.className = 'table table-dark';
        let cabecalhoTabela = document.createElement('thead');
        let corpoTabela = document.createElement('tbody');

        cabecalhoTabela.innerHTML = `<tr>
                                        <th>nome</th>
                                        <th>cpf</th>
                                        <th>dataNasc</th>
                                        <th>genero</th>
                                        <th>endereco</th>
                                        <th>bairro</th>
                                        <th>email</th>
                                        <th>celular</th>
                                        <th>estadoCivil</th>
                                    </tr>`;

        tabela.appendChild(cabecalhoTabela);

        for (const aluno of listaAlunos) {
            const linhaTabela = document.createElement('tr');
            linhaTabela.innerHTML = `<td>${aluno.nome}</td>
                                    <td>${aluno.cpf}</td>
                                    <td>${aluno.dataNasc}</td>
                                    <td>${aluno.genero}</td>
                                    <td>${aluno.endereco}</td>
                                    <td>${aluno.bairro}</td>
                                    <td>${aluno.email}</td>
                                    <td>${aluno.celular}</td>
                                    <td>${aluno.estadoCivil}</td>`;
            corpoTabela.appendChild(linhaTabela);
        }

        tabela.appendChild(corpoTabela);
        elementoDivTabela.appendChild(tabela);
    } else {
        elementoDivTabela.innerHTML = '<div class="alert alert-warning" role="alert">Nenhum aluno cadastrado!</div>';
    }
}
