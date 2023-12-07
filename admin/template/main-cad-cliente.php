<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Cadastrar cliente</h1>
    </div>
  <div class="container">
    <form id="cliente" name="cliente" action="" method="post" class = "form-control">
      <legend>Dados Pessoais</legend>
      <div class = "row">
        <div class="col-md-5">
          <label for = "nome">Nome:</label>
          <input class = "form-control" type = "text" name = "nome" id="nome" value = ""></input>
        </div>
        <div class="col-md-5">
          <label for = "sobrenome">Sobrenome:</label>
          <input class = "form-control" type = "text" name = "sobrenome" id="sobrenome" value = ""></input>
        </div>
        <div class="col-md-2">
          <label for = "nascimento">Data de Nascimento:</label>
          <input class = "form-control" type = "date" name = "nascimento" id="nascimento" value = ""></input>
        </div>
      </div>
      <div class = "row mt-2">
        <div class="col-md-3">
          <label for = "telefone">Telefone:</label>
          <input class = "form-control" type = "text" name = "telefone" id="telefone" value = ""></input>
        </div>
        <div class="col-md-3">
          <label for = "cpf">CPF:</label>
          <input class = "form-control" type = "text" name = "cpf" id="cpf" value = ""></input>
        </div>
        <div class="col-md-6">
          <label for = "email">E-mail:</label>
          <input class = "form-control" type = "email" name = "email" id="email" value = ""></input>
        </div>
      </div>
      <legend class = "mt-2">Endereço:</legend>
      <div class="row">
        <div class="col-md-2">
          <label for="cep">CEP:</label>
          <input class = "form-control" type="text" name="cep" id="cep">
        </div>
        <div class="col-md-4">
          <label for="rua">Rua:</label>
          <input class = "form-control" type="text" name="rua" id="rua">
        </div>
        <div class="col-md-3">
          <label for="numero">Número:</label>
          <input class = "form-control" type="text" name="numero" id="numero">
        </div>
        <div class="col-md-3">
          <label for="bairro">Bairro:</label>
          <input class = "form-control" type="text" name="bairro" id="bairro">
        </div>
        <div class="row mt-2">
          <div class="col-md-4">
            <label for="cidade">Cidade:</label>
            <input class="form-control" type="text" name="cidade" id="cidade">
          </div>
          <div class="col-md-4">
            <label for="estado">Estado:</label>
            <input class="form-control" type="text" name="estado" id="estado">
          </div>
          <div class="col-md-4">
            <label for="pais">País:</label>
            <input class="form-control" type="text" name="pais" id="pais">
          </div>
          <div class="col-md-4">
            <label for="ibge">IBGE:</label>
            <input class="form-control" type="text" name="ibge" id="ibge">
          </div>
        </div>
        <div class="row mt-2 mb-2">
          <div class="input-group">
            <span class="input-group-text">Observação</span>
            <textarea id="obsevacao" name="observacao" class="form-control" aria-label="observacao" ></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <button class="btn btn-dark" type="submit"><i class="bi bi-check-lg"></i>Cadastrar cliente</button>
        </div>
      </div>
    </form>
  </div>
</main>   