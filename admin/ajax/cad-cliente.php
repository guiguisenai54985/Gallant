<?php
error_reporting(E_ERROR ^ E_WARNING);
require_once "C:/xampp/htdocs/Gallant/backend/functions.php";

dbcon();

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

$salvar = $conexao -> query("INSERT INTO `usuario`(`nome`, `sobrenome`, `data_nascimento`, `telefone`, `cpf`, `email`, `cep`, `rua`, `numero`, `bairro`, `cidade`, `estado`, `pais`, `ibge`, `observacao`) VALUES ('$nome', '$sobrenome', '$nascimento',  '$telefone', '$cpf', '$email',  '$cep', '$rua', '$numero', '$bairro', '$cidade', '$estado', '$pais', '$ibge', '$observacao')");
?>