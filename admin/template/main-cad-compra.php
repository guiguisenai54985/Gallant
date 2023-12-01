<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Cadastro de compras</h1>
    </div>
  <div class="container">
    <form id="cliente" name="cliente" action="" method="post" class = "form-control">
      <legend>Dados do Produto</legend>
      <div class = "row">
        <div class="col-md-1">
          <label for = "id">id:</label>
          <input class = "form-control" type = "text" name = "id" id="id" value = ""></input>
        </div>
        <div class="col-md-5">
          <label for = "nomeProduto">Nome do produto:</label>
          <input class = "form-control" type = "text" name = "nomeProduto" id="nomeProduto" value = ""></input>
        </div>
      </div>
      <div class = "row mt-2">
        <div class="col-md-4">
          <label for = "preco">Preço do produto:</label>
          <input class = "form-control" type = "text" name = "preco" id="preco" value = ""></input>
        </div>
        <div class="col-md-3">
          <label for = "fonecedor">Fonecedor:</label>
          <input class = "form-control" type = "date" name = "fonecedor" id="fonecedor" value = ""></input>
        </div>
        <div class="col-md-3">
          <label for = "garantia">Garantia do produto:</label>
          <input class = "form-control" type = "date" name = "garantia" id="garantia" value = ""></input>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-3">
          <button class="btn btn-dark" type="submit"><i class="bi bi-check-lg"></i>Cadastrar produto</button>
        </div>
      </div>
    </form>
  </div>
</main>   