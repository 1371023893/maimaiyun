<?php
/*
麦麦云网站访问控制系统V1.0    好麦麦源码网旗下:http://www.haomaim.cn
项目地址:
作者:若旧  QQ:1784605674
声明:此程序请勿用于非法用途,否则产生任何后果与开发者无关!
*/
class DB{
	protected $pdo;
	protected $stmt;
	protected $dbhost = 'localhost';
	protected $dbname = 'inc';//数据库名字
	protected $dbuser = 'root';//数据库用户名
	protected $dbpass = 'root';//数据库密码

	public function __construct(){
		$this->pdo=new PDO("mysql:host=$this->dbhost;dbname=$this->dbname",$this->dbuser,$this->dbpass);
	}

	protected function execute($sql,$args=[]){
		$this->stmt=$this->pdo->prepare($sql);

		foreach ($args as $key => $value) {
			if (is_int($value)) {
				$this->stmt->bindValue($key,$value,PDO::PARAM_INT);
			}else{
				$this->stmt->bindValue($key,$value);
			}
		}

		$this->stmt->execute();
		return $this->stmt;
	}

	public function fetchAll($sql,$args=[]){
		return self::execute($sql,$args)->fetchAll(PDO::FETCH_ASSOC);
	}

	public function fetch($sql,$args=[]){
		return self::execute($sql,$args)->fetch(PDO::FETCH_ASSOC);
	}

	public function exec($sql,$args=[]){
		return self::execute($sql,$args)->rowCount();
	}
}