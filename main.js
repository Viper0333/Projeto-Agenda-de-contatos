const form = document.getElementById('form-atividade');  //cria uma variavel contendo o id "form-atividade"

let linhas = '';

form.addEventListener('submit', function(e) { // cria o elemento submit e atualizar a tela 
    e.preventDefault(); //remover comportamento de atualizar pagina

    const inputNomeContato = document.getElementById('nome_contato');
    const inputNumeroTelefone = document.getElementById('numero_telefone');

    

    let linha = '<tr>'; // cria a variavel chamada linha
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += `</tr>`;


    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

});
