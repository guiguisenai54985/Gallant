<?php 
/* incluindo o arquivo com os 
dados do banco de dados */
require_once "C:/xampp/htdocs/backend/mysql.php";

/* função de conexão com o banco */
function dbcon(){
global $mysql_database, $mysql_host, $mysql_senha, $mysql_usuario, $conexao;

$conexao = new mysqli($mysql_host, $mysql_usuario, $mysql_senha, $mysql_database);
if($mysqli -> connect_errno){
    echo "Falha ao conectar: (" . $mysqli ->connect_errno . ")" . $mysqli -> connect_errno;
}
}
?>