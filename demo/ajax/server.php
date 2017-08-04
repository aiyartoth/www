<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/3
 * Time: 10:29
 */
session_start();
$g = $_GET;
$p = $_POST;
$s = $_SESSION;
$r = array(
    "msg" > "服务器已经接受信息，并准备返回"
);
echo json_encode(array(
    "errcode" => 0,
    "data" => array(
        "res" => $r,
        "get" => $g,
        "post" => $p,
        "session" => $s
    )
));
exit();