<?php
header('Access-Control-Allow-Origin:*');
session_start();
$server=$_GET;
//setcookie('serverSetCookie',"服务器设置的cookie",time()+3600*24,'/');
setcookie('classGUID','ab s +',time()+3600*24,'/');
$_SESSION["get"]=json_encode($server);
$server["response"]=array(
    "msg"=>"服务器返回数据",
    "time"=>time(),
    "cookie"=>$_COOKIE
);
echo json_encode(array(
    "errcode"=>0,
    "data"=>$server
));
exit();