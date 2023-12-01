<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/admin/index.php">
                <span data-feather="home" class="align-text-bottom"></span>
                HOME
              </a>
            </li>
          <li class="mb-1">
          <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-produto" aria-expanded="false">
            Menu
          </button>
          <div class="collapse" id="dashboard-produto">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="/admin/cadastro-produto.php" class="link-dark d-inline-flex text-decoration-none rounded">Cadastro de Produto</a></li>
              <li><a href="/admin/listar-produto.php" class="link-dark d-inline-flex text-decoration-none rounded">Listar produto</a></li>
              <li><a href="/admin/cadastroCompra.php" class="link-dark d-inline-flex text-decoration-none rounded">cadastro de compra</a></li>
              <li><a href="/admin/listarCompras.php" class="link-dark d-inline-flex text-decoration-none rounded">Listar compras</a></li>
            </ul>
          </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>