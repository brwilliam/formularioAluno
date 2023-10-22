//quando a pagina for carregada
window.onload = () => {
    mostrarAlunos([]);
}
function mostrarAlunos(listaAlunos){
    let elementoDivTabela = document.getElementById('espacoTabela');
    if(listaAlunos.length > 0){
    //limpar elemento div tabela 
   
        elementoDivTabela.innerHTML ='' ;
        let tabela          = document.createElement('table');
        let cabecalhoTabela = document.createElement('thead');
        let corpoTabela     = document.createElement('tbody');

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
                                    </th>`;
        //adicionando cabecalho na tabela                          
        tabela.appendChild(cabecalhoTabela);
        //alimentar o corpo com a lista de clientes
        for (const aluno of listaAlunos){
            const linhaTabela = document.createElement('tr');
            linhaTabela.innerHTML = `<td>${aluno.nome}</td>`
                                    `<td>${aluno.cpf}</td>`
                                    `<td>${aluno.dataNasc}</td>`
                                    `<td>${aluno.genero}</td>`
                                    `<td>${aluno.endereco}</td>`
                                    `<td>${aluno.bairro}</td>`
                                    `<td>${aluno.email}</td>`
                                    `<td>${aluno.celular}</td>`
                                    `<td>${aluno.estadoCivil}</td>`;
            corpoTabela.appendChild(linhaTabela);
        }
        tabela.appendChild(corpoTabela);
        elementoDivTabela.appendChild(tabela);
    }
    else{
        elementoDivTabela.innerHTML = `<div class="alert alert-warning" role="alert">
                                            Nenhum aluno cadastrado!
                                       </div>`
    }

}
