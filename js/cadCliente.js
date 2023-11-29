addEventListener('load', ()=>{
    let tabelaProduto = document.getElementById('tabela-produto').innerHTML;
    let getDados = JSON.parse(localStorage.getItem('produto'));

    getDados.map((produto, index) => {
        tabelaProduto += `<tr id=${index}>
            <td>${getDados[Item].id}</td>
            <td>${getDados[Item].nomeProduto}</td>
            <td>${getDados[Item].marca}</td>
            <td>${getDados[Item].garantia}</td>
        </tr>`;
    })
})
//buscando os dados do formularios
let dadosProdutos = document.getElementById('produto');

//pegando o evento do formulario
dadosProdutos.addEventListener('submit', (event) =>{
    event.preventDefault();

    let dados = new FormData(dadosProduto);
   // console.log(dados);

    //converte os dados para um objeto
    dados = Object.fromEntries(dados.entries()); 

    //console.log(dados);
    postProduto(dados);

})

function postCliente(dadosProdutos) {
    fetch('http://localhost/admin/ajax/cad-produto.php',{
        method: 'POST',
        body: JSON.stringify(dadosProdutos)
    })
    .then((result) =>{
        return result.json();
    }).then((result) =>{
        cadastrarCliente(result)
    }).catch((err) =>{

    });
}

function cadastrarCliente(dadosProdutos) {
    //cria um array (vetor) vazio
    let setDados = new Array();
    //verifica se existe a chave no localStorage
    //se existir salva os dados em setDados
    if(localStorage.hasOwnProperty('produto')){
        setDados = JSON.parse(localStorage.getItem('produto'));
    }
    console.log(setDados);
    //adiciona os dados novos vindos do formulario do cliente ao array(vetor)
    setDados.push(dadosProdutos);
    localStorage.setItem('produto', JSON.stringify(setDados));
   
    let tabelaProduto = document.getElementById('tabela-produto');
    let dados = `<tr>
        <td>${dadosProduto.id}</td>
        <td>${dadosProduto.nomeProduto}</td>
        <td>${dadosProduto.marca}</td>
        <td>${dadosProduto.garantia}</td>
        
        </tr>`;
    tabelaProduto.innerHTML += dados;

}

// let btnCEP = document.getElementById('cep')
// btnCEP.addEventListener('blur', () =>{

// fetch(`http://viacep.com.br/ws/${btnCEP.value}/json/`)
// .then((result) => {
//     console.log(result);
//     return result.json();
// }).then((dados) =>{
//     atualizaForm(dados);
// })
// .catch((err) => {

// });
// })

// function atualizaForm(dados) {
//     let clienteRua = document.getElementById('rua');
//     let clienteBairro = document.getElementById('bairro');
//     let clienteCidade = document.getElementById('cidade');
//     let clienteEstado = document.getElementById('estado');
//     let clienteIbge = document.getElementById('ibge');

//     clienteRua.value = dados.logradouro;
//     clienteBairro.value = dados.bairro;
//     clienteCidade.value = dados.localidade;
//     clienteEstado.value = dados.uf;
//     clienteIbge.value = dados.ibge;
// }
