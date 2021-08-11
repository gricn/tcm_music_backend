第一个作品，如今回看有很多不足。比如音乐存储没有用缓存、CSS设计不太符合规范、代码写的那是个啥……

不过作为人生第一个作品，就这样吧。

------

## 前端开发页面需求

如果修改请在文档说明

- [X] 首页 
- [X] 音乐播放
- [X] 用户注册	（添加表单、Post方法）
- [X] 调查问卷	（当前小程序test文件夹，直接按钮比一个个选择题目然后滑动选项效率更高）
- [ ] 数据统计	（F2移动端数据可视化）


## API 说明

### 调取五音音乐歌单
- URL: `https://www.gricn.top:4000/public/[params].json`
- params类型：可从右边列表中选取一个值[jue, zhi, gong, shang, yu]
- 返回类型：JSON {music_name(string), music_author(string), music_id(string)}

比如，调取角歌单（jue）：
- URL: `https://www.gricn.top:4000/public/jue.json`
- 返回值：

[{
    music_name:'',
    music_author:'',
    music_id:''
},{...},...,{...}]

### 获取歌曲url
- URL: `https://www.gricn.top:4000/api/song/[params]`
- params类型：网易云音乐歌曲id
- 返回值： URL

比如：获取《木音(角声)》的URL:
- URL: `https://www.gricn.top:4000/api/song/167272`

### 获取专辑图片
- URL: `https://www.gricn.top:4000/api/poster/[params]`
- 参数类型: 网易云音乐歌曲id
- 返回值：URL

比如：获取获取《木音(角声)》的专辑图片:
- URL: `https://www.gricn.top:4000/api/poster/167272`

### 获取测验简略情况（参数待定）
- URL: `https://www.gricn.top:4000/api/test/default/[params]`
- params类型：[用户id，openid]
- 返回值：JSON
- 备注：用户id要在服务器和openid合并检验

## 获取测验详细情况（参数待定）
- URL: `https://www.gricn.top:4000/api/test/details/[params]`
- params类型： [用户id，openid]
- 返回值：JSON
- 备注：用户id要在服务器和openid合并检验

### 微信小程序openid获取
- URL: `https://www.gricn.top:4000/getopenid/[params]`
- params类型： 微信小程序获取的code
- 备注：获取用户的openid并返还给小程序端

### 判断用户注册情况
- URL: `https://www.gricn.top:4000/isregistered/[params]`
- params类型： 微信小程序缓存中获取的openid
- 返回值：Boolean (True为已注册，False为未注册)
- 备注：返还Boolean值给小程序端

### 用户注册
- URL: `https://www.gricn.top:4000/register/[params]`
- params类型： 微信小程序缓存中获取的openid发送到服务器数据库存储
- 接收内容：openid, gender, age, location
- 备注：POST方法

----

## 数据库表单
### login(table)
 create table login(
     no serial,
     openid text,
     timestamp timestamp default current_timestamp
 );

### test(table)
 create table test(
     no serial,
     openid text,
     timestamp timestamp default current_timestamp,
     yangxu_score real,
	 yinxu_score real,
	 qixu_score real,
	 tanshi_score real,
	 shire_score real,
	 xueyu_score real,
	 tebin_score real,
	 qiyu_score real,
	 pinghe_score real
 );


### wuyin(data type)
create type wuyin as enum('jue','zhi','gong','shang','yu','others')

### musiclist(table)
create table musiclist(
	num				smallserial,		 
	music_type		wuyin,
	music_id		varchar(15)			primary key,			
	music_name		text,
);

<!-- ### frequencyList(data type)
create type frequencylist as enum(0,1,2,3,4); -->

### testdetail(table) 
create table testdetail(		
	openid    		text				not null,	
	test_times		smallint,
	question_id		text,
	question_value	smallint
	-- 67 questions total
);

### userInfo(table)
create table userinfo(
	num		serial,
	openid    		text 		primary key,
	gender			Boolean, 	-- male:true; female:false
	age				smallint,
	province_id		varchar(12)
);

### musiclistenrecord(table)
create table musiclistenrecord(
	openid    		text				primary key	references userinfo(openid),
	music_id		varchar(15) 		references musiclist(music_id),
	listen_times	smallint
);

## 致谢
本项目使用的开源项目包括：

- [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) - MIT
- [antv/f2](https://github.com/antvis/f2) -  MIT
- [colorUI](https://github.com/weilanwl/ColorUI) - MIT
- [weui-miniprogram](https://github.com/wechat-miniprogram/weui-miniprogram) - MIT
- [china_regions](https://github.com/wecatch/china_regions) - Apache 2.0
- [pm2](https://github.com/Unitech/pm2) - GNU-AGPL-3.0

直接使用的代码包括
- 省市三级联动: [如何实现一个自定义数据版省市区三级联动](https://developers.weixin.qq.com/community/develop/article/doc/0000643f674fa81a18a92b37455413)

我们计划在校级创新项目结束后（2021.04.01）按照MIT协议发布开源代码
