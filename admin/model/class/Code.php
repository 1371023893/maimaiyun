<?php
//密钥生成
class Code{
	public static function regCode($num){
		$arr=[];
		for ($i=1; $i <=$num ; $i++) { 
			$code=substr(md5(uniqid(microtime()).mt_rand()),0,12);
			$arr[$i-1]=$code;
		}
		return $arr;
	}
}