
//buscando os dados do formularios
let dadosRelogios = document.getElementById('relogio');

//pegando o evento do formulario
dadosRelogios.addEventListener('submit', (event) =>{
    event.preventDefault();

    let dados = new FormData(dadosRelogio);
   // console.log(dados);

    //converte os dados para um objeto
    dados = Object.fromEntries(dados.entries()); 

    //console.log(dados);
    postRelogio(dados);

})

function postCliente(dadosrelogios) {
    fetch('http://localhost/Gallant/admin/ajax/cad-relogio.php',{
        method: 'POST',
        body: JSON.stringify(dadosrelogios)
    })
    .then((result) =>{
        return result.json();
    }).then((result) =>{
        cadastrarCliente(result)
    }).catch((err) =>{

    });
}


