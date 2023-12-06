addEventListener('load', ()=>{
    let tabelajoias = document.getElementById('tabela-joias').innerHTML;
    let getDados = JSON.parse(localStorage.getItem('joias'));

    getDados.map((joias, index) => {
        tabelajoias += `<tr id=${index}>
            <td>${getDados[Item].id}</td>
            <td>${getDados[Item].nomejoias}</td>
            <td>${getDados[Item].marca}</td>
            <td>${getDados[Item].garantia}</td>
        </tr>`;
    })
})
//buscando os dados do formularios
let dadosjoiass = document.getElementById('joias');

//pegando o evento do formulario
dadosjoiass.addEventListener('submit', (event) =>{
    event.preventDefault();

    let dados = new FormData(dadosjoias);
   // console.log(dados);

    //converte os dados para um objeto
    dados = Object.fromEntries(dados.entries()); 

    //console.log(dados);
    postjoias(dados);

})

function postCliente(dadosjoiass) {
    fetch('http://localhost/admin/ajax/cad-joias.php',{
        method: 'POST',
        body: JSON.stringify(dadosjoiass)
    })
    .then((result) =>{
        return result.json();
    }).then((result) =>{
        cadastrarCliente(result)
    }).catch((err) =>{

    });
}

function cadastrarCliente(dadosjoiass) {
    //cria um array (vetor) vazio
    let setDados = new Array();
    //verifica se existe a chave no localStorage
    //se existir salva os dados em setDados
    if(localStorage.hasOwnProperty('joias')){
        setDados = JSON.parse(localStorage.getItem('joias'));
    }
    console.log(setDados);
    //adiciona os dados novos vindos do formulario do cliente ao array(vetor)
    setDados.push(dadosjoiass);
    localStorage.setItem('joias', JSON.stringify(setDados));
   
    let tabelajoias = document.getElementById('tabela-joias');
    let dados = `<tr>
        <td>${dadosjoias.id}</td>
        <td>${dadosjoias.nomejoias}</td>
        <td>${dadosjoias.marca}</td>
        <td>${dadosjoias.garantia}</td>
        
        </tr>`;
    tabelajoias.innerHTML += dados;

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
