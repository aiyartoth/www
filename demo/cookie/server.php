<?php
header('Access-Control-Allow-Origin:*');
session_start();
$server=$_GET;
$_SESSION["get"]=json_encode($server);
$server["response"]=array(
    "msg"=>"服务器返回数据",
    "time"=>time()
);
echo json_encode(array(
    "errcode"=>0,
    "data"=>$server
));
exit();