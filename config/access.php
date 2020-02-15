<?php
/*
麦麦云网站访问控制系统V1.0    好麦麦源码网旗下:http://www.haomaim.cn
项目地址:https://github.com/1784605674/maimaiyun
作者:若旧  QQ:1784605674
声明:此程序请勿用于非法用途,否则产生任何后果与开发者无关!
*/
//判断cookie是否存在，不存在则为非法访问

$inc;
if (!isset($_COOKIE['admin'])) {
	$inc=false;
}