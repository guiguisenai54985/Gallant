<?php
error_reporting(E_ERROR ^ E_WARNING);
require_once "C:/xampp/htdocs/Gallant/backend/functions.php";

dbcon();
$id = $_POST['id'];

$salvar = $conexao -> query("DELETE FROM 'usuario' WHERE id = '$id' ");
?>