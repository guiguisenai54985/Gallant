
// buscando os dados do formulario
let updateCliente = document.getElementById('edit_cliente');

// pegando o evento de envio do formulario
updateCliente.addEventListener('submit', (event) => {
    event.preventDefault();
    let dados = new FormData(updateCliente);
   // console.log(dados);
    // converte os dados para um objeto
   // dados = Object.fromEntries(dados.entries());
   // console.log(dados);
    postCliente(dados);
})

function postCliente(updateCliente) {
    fetch('http://localhost:81/admin/ajax/edit-cliente.php', {
        method: 'POST',
        body: updateCliente
    })
        .then((result) => {
            //console.log(result);
        location.reload();  
        return result.json();
    })
    .then((result) => {
       // console.log(result);
        cadastrarCliente(result);
    
    }
    )  
    .catch((err) => {
        
    });
}

let btn_CEP = document.getElementById('cep');
btn_CEP.addEventListener('blur', () => {
    
fetch(`http://viacep.com.br/ws/${btn_CEP.value}/json/`)
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

function excluirCliente(event) {
   


      fetch('http://localhost:81/admin/ajax/excluir-cliente.php', {
        method: 'POST',
        body: event.id
    })
        .then((result) => {
            //console.log(result);
      //  location.reload();  
        
    })
    .then((result) => {
       // console.log(result);
    
    
    }
    )  
    .catch((err) => {
        
    });
    

}