<?php
header('Access-Control-Allow-Origin:*');
$server=$_GET;
$server["response"]=array(
    "msg"=>"服务器返回数据",
    "time"=>time()
);
echo json_encode(array(
    "errcode"=>0,
    "data"=>$server
));
exit();