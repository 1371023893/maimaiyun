<?php
//判断cookie是否存在，不存在则为非法访问

$inc;
if (!isset($_COOKIE['admin'])) {
	$inc=false;
}