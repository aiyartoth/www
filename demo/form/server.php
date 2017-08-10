<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/10
 * Time: 17:22
 */


p($_POST);
function p($data){
    echo "<pre>".print_r($data,true)."</pre>";
}