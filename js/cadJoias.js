//buscando os dados do formularios
let dadosJoias = document.getElementById('joias');

//pegando o evento do formulario
dadosJoias.addEventListener('submit', (event) =>{
    event.preventDefault();

    let dados = new FormData(dadosJoias);
   // console.log(dados);

    //converte os dados para um objeto
    dados = Object.fromEntries(dados.entries()); 

    //console.log(dados);
    postJoias(dados);

})

function postCliente(dadosJoias) {
    fetch('http://localhost/Gallant/admin/ajax/cad-joias.php',{
        method: 'POST',
        body: JSON.stringify(dadosJoias)
    })
    .then((result) =>{
        return result.json();
    }).then((result) =>{
        cadastrarCliente(result)
    }).catch((err) =>{

    });
}