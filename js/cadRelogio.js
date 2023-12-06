
//buscando os dados do formularios
let dadosrelogios = document.getElementById('relogio');

//pegando o evento do formulario
dadosrelogios.addEventListener('submit', (event) =>{
    event.preventDefault();

    let dados = new FormData(dadosrelogio);
   // console.log(dados);

    //converte os dados para um objeto
    dados = Object.fromEntries(dados.entries()); 

    //console.log(dados);
    postrelogio(dados);

})

function postCliente(dadosrelogios) {
    fetch('http://localhost/admin/ajax/cad-relogio.php',{
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


