-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-02-15 12:01:19
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `inc`
--
CREATE DATABASE IF NOT EXISTS `inc` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `inc`;

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE `admin` (
  `id` tinyint(3) UNSIGNED NOT NULL COMMENT '管理员ID',
  `username` varchar(10) DEFAULT 'admin' COMMENT '管理员账号',
  `password` varchar(60) NOT NULL COMMENT '管理员密码',
  `qq` varchar(11) DEFAULT '1784605674' COMMENT '管理员QQ',
  `email` varchar(20) DEFAULT '1784605674@qq.com' COMMENT '管理员邮箱'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `qq`, `email`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', '1784605674', '1784605674@qq.com');

-- --------------------------------------------------------

--
-- 表的结构 `passkey`
--

CREATE TABLE `passkey` (
  `id` int(10) UNSIGNED NOT NULL COMMENT '密钥ID',
  `codekey` char(12) NOT NULL COMMENT '密钥',
  `addtime` int(11) NOT NULL COMMENT '生成日期',
  `exdata` int(11) NOT NULL COMMENT '有效期'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `passkey`
--

INSERT INTO `passkey` (`id`, `codekey`, `addtime`, `exdata`) VALUES
(58, '71edee60c349', 1581683621, 1582288421),
(57, '43cb77a04dbd', 1581683621, 1582288421),
(56, 'a36e618c95d0', 1581683621, 1582288421),
(52, '57ed8d8ef7fa', 1581669488, 1597221488),
(54, '79388ffafa4f', 1581683591, 1584275591);

-- --------------------------------------------------------

--
-- 表的结构 `system`
--

CREATE TABLE `system` (
  `id` tinyint(3) UNSIGNED NOT NULL COMMENT '系统设置',
  `dirname` varchar(60) NOT NULL COMMENT '跳转的主程序路径'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `system`
--

INSERT INTO `system` (`id`, `dirname`) VALUES
(1, 'http://www.haomaim.cn');

--
-- 转储表的索引
--

--
-- 表的索引 `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `passkey`
--
ALTER TABLE `passkey`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `system`
--
ALTER TABLE `system`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin`
--
ALTER TABLE `admin`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '管理员ID', AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `passkey`
--
ALTER TABLE `passkey`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '密钥ID', AUTO_INCREMENT=59;

--
-- 使用表AUTO_INCREMENT `system`
--
ALTER TABLE `system`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '系统设置', AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
