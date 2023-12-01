addEventListener('load', ()=>{
    let tabelaCompra = document.getElementById('tabela-compra').innerHTML;
    let getDados = JSON.parse(localStorage.getItem('compra'));

    getDados.map((compra, index) => {
        tabelaCompra += `<tr id=${index}>
            <td>${getDados[Item].id}</td>
            <td>${getDados[Item].nomeProduto}</td>
            <td>${getDados[Item].marca}</td>
            <td>${getDados[Item].garantia}</td>
        </tr>`;
    })
})
//buscando os dados do formularios
let dadosCompra = document.getElementById('compra');

//pegando o evento do formulario
dadosCompra.addEventListener('submit', (event) =>{
    event.preventDefault();

    let dados = new FormData(dadosCompra);
   // console.log(dados);

    //converte os dados para um objeto
    dados = Object.fromEntries(dados.entries()); 

    //console.log(dados);
    postProduto(dados);

})

function postCliente(dadosCompras) {
    fetch('http://localhost/admin/ajax/cad-produto.php',{
        method: 'POST',
        body: JSON.stringify(dadosCompras)
    })
    .then((result) =>{
        return result.json();
    }).then((result) =>{
        cadastrarCliente(result)
    }).catch((err) =>{

    });
}

function cadastrarCliente(dadosCompras) {
    //cria um array (vetor) vazio
    let setDados = new Array();
    //verifica se existe a chave no localStorage
    //se existir salva os dados em setDados
    if(localStorage.hasOwnProperty('compra')){
        setDados = JSON.parse(localStorage.getItem('compra'));
    }
    console.log(setDados);
    //adiciona os dados novos vindos do formulario do cliente ao array(vetor)
    setDados.push(dadosCompras);
    localStorage.setItem(compra, JSON.stringify(setDados));
   
    let tabelaCompra = document.getElementById('tabela-compra');
    let dados = `<tr>
        <td>${dadosCompra.id}</td>
        <td>${dadosCompra.nomeProduto}</td>
        <td>${dadosCompra.marca}</td>
        <td>${dadosCompra.garantia}</td>
        
        </tr>`;
    tabelaCompra.innerHTML += dados;

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
