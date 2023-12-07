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