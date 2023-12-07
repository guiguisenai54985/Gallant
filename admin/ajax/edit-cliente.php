<?php
error_reporting(E_ERROR ^ E_WARNING);
require_once "C:/xampp/htdocs/Gallant/backend/functions.php";

dbcon();
$id = $_POST['id'];
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$nascimento = $_POST['nascimento'];
$telefone = $_POST['telefone'];
$cpf = $_POST['cpf'];
$email = $_POST['email'];
$cep = $_POST['cep'];
$rua = $_POST['rua'];
$numero = $_POST['numero'];
$bairro = $_POST['bairro'];
$cidade = $_POST['cidade'];
$estado = $_POST['estado'];
$pais = $_POST['pais'];
$ibge = $_POST['ibge'];
$observacao = $_POST['observacao'];

$salvar = $conexao -> query("UPDATE `usuario` SET `nome`='$nome',`sobrenome`='$sobrenome',`data_nascimento`='$nascimento',`telefone`='$telefone',`cpf`='$cpf',`email`='$email',`cep`='$cep',`rua`='$rua',`numero`='$numero',`bairro`='$bairro',`cidade`='$cidade',`estado`='$estado',`pais`='$pais',`ibge`='$ibge',`observacao`='$observacao' WHERE id = '$id' ");
?>