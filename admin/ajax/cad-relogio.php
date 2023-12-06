<?php
//permite o acesso ao arquivo de todos os dominios
header('Access-Control-Allow-Origin: *');
//define o arquivo para json
header('Content-Type: application/json');
//define os metodos de requisitos http
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
//recebe os arquivos do tipo json
$dados = file_get_contents("php://input");
echo $dados
?>