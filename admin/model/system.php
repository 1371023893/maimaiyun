<?php
include '../../config/Database.php';

//获取前端传入的路径
$dirname=$_POST['dir'];

$sql="UPDATE system SET dirname = :dirname WHERE id = :id";

$args=[':dirname' => $dirname,':id' => 1];

$DB=new DB;
echo $DB->exec($sql,$args);