// buscando os dados do formulario
let dadosCliente = document.getElementById('cliente');

// pegando o evento de envio do formulario
dadosCliente.addEventListener('submit', (event) => {
    event.preventDefault();
    let dados = new FormData(dadosCliente);
   // console.log(dados);
    // converte os dados para um objeto
   ///dados = Object.fromEntries(dados.entries());
   // console.log(dados);
    postCliente(dados);
})

function postCliente(dadosCliente) {
    fetch('http://localhost:81/admin/ajax/cad-cliente.php', {
        method: 'POST',
        body: dadosCliente
    })
        .then((result) => {
            //console.log(result);
        document.getElementById("cliente").reset();
        alert("cadastrado com sucesso");
    
    })
    .then((result) => {
       // console.log(result);
       
    
    }
    )  
    .catch((err) => {
        
    });
}


let btnCEP = document.getElementById('cep');
btnCEP.addEventListener('blur', () => {
    
fetch(`http://viacep.com.br/ws/${btnCEP.value}/json/`)
.then((result) => {
    return result.json();
})
.then((dados) => {
    atualizarForm(dados);
})
.catch((err) => {
    
}); 
    
})

function atualizarForm(dados) {
    let clienteRua    = document.getElementById('rua');
    let clienteBairro = document.getElementById('bairro');
    let clienteCidade = document.getElementById('cidade');
    let clienteEstado = document.getElementById('estado');
    let clienteIBGE = document.getElementById('ibge');

    clienteRua.value = dados.logradouro;
    clienteBairro.value = dados.bairro;
    clienteCidade.value = dados.localidade;
    clienteEstado.value = dados.uf;
    clienteIBGE.value = dados.ibge;
    
}
