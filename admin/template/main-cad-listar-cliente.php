<?php
require_once "C:/xampp/htdocs/backend/functions.php";
dbcon();
$resultado = $conexao->query("SELECT `id`, `nome`, `sobrenome`, `data_nascimento`, `telefone`, `cpf`, `email`, `cep`, `rua`, `numero`, `bairro`, `cidade`, `estado`, `pais`, `ibge`, `observacao` FROM usuario");


?>
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Listar Cliente</h1>
    </div>
    <div class="table-responsive">
        <table class="table table-primary">
            <thead>
                <tr>
                    <th scope="col">Nome:</th>
                    <th scope="col">Sobrenome:</th>
                    <th scope="col">Data Nascimento:</th>
                    <th scope="col">Telefone:</th>
                    <th scope="col">Email:</th>
                    <th scope="col">Rua:</th>
                    <th scope="col">Cidade:</th>
                    <th scope="col">Opções:</th>
                </tr>
            </thead>
            <tbody id="tabela-cliente">
                <?php
                foreach ($resultado as $dados) {
                ?>
                    <tr>
                        <td><?= $dados['nome'] ?></td>
                        <td><?= $dados['sobrenome'] ?></td>
                        <td><?= $dados['data_nascimento'] ?></td>
                        <td><?= $dados['telefone'] ?></td>
                        <td><?= $dados['email'] ?></td>
                        <td><?= $dados['rua'] ?></td>
                        <td><?= $dados['cidade'] ?></td>
                        <td><a href="http://localhost:81/admin/editar-cliente.php?id=<?= $dados['id'] ?>" class="bi bi-pencil-square">Ed</a>
                            <a onclick="excluirCliente(this)" id="<?= $dados['id'] ?>" name="<?= $dados['id'] ?>" class="ms-1 bi bi-trash">Ex</a>
                        </td>
                    </tr>

                <?php
                }
                ?>

            </tbody>
        </table>
    </div>
</main>