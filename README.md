## 前端开发页面需求

如果修改请在文档说明

- [X] 首页 
- [X] 音乐播放
- [ ] 用户注册	（添加表单、Post方法）
- [ ] 调查问卷	（当前小程序test文件夹，直接按钮比一个个选择题目然后滑动选项效率更高）
- [ ] 数据统计	（F2移动端数据可视化）


## API 说明 （日后可能会将4000端口用子域名包装一下）

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

比如：获取《木音(角声)》的URL

URL: `https://www.gricn.top:4000/api/song/167272`

### 获取专辑图片

- URL: `https://www.gricn.top:4000/api/poster/[params]`
- 参数类型: 网易云音乐歌曲id
- 返回值：URL

比如：获取获取《木音(角声)》的专辑图片

URL: `https://www.gricn.top:4000/api/poster/167272`

### 获取测验简略情况（参数待定）

- URL: `https://www.gricn.top:4000/api/test/default/[params]`
- params类型：[用户id，openid]
- 返回值：JSON
- 备注：用户id要在服务器和openid合并检验

### 获取测验详细情况（参数待定）

- URL: `https://www.gricn.top:4000/api/test/details/[params]`
- params类型： [用户id，openid]
- 返回值：JSON
- 备注：用户id要在服务器和openid合并检验

### 微信小程序openid获取

- URL: `https://www.gricn.top:4000/login/[params]`
- params类型： 微信小程序获取的code
- 备注：在服务器记录用户的登录状态

### 微信小程序用户注册
- URL: `https://www.gricn.top:4000/register/[params]`
- params类型： 微信小程序获取的code
- 备注：传递微信小程序POST发送的用户数据

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
     openid text primary key references userinfo(openid),
     timestamp timestamp default current_timestamp,
     score integer
 );


### wuyin(data type)
create type wuyin as enum('jue','zhi','gong','shang','yu','others')

### test(table)
create table musiclist(
	num				smallserial,		 
	music_type		wuyin,
	music_id		varchar(15)			primary key,			
	music_name		text,
);

### frequencyList(data type)
create type frequencylist as enum('never','seldom','somtimes','often','always')

### testdetail(table) 
create table testdetail(
	num				serial,			
	openid    		text				primary key,	
	test_times		smallint,
	t1_1				frequencyList,
	t1_2				frequencyList,			
	t1_3				frequencyList,
	t1_4				frequencyList,
	t1_5				frequencyList,
	t1_6				frequencyList,
	t1_7				frequencyList,
	t2_1				frequencyList,
	t2_2				frequencyList,
	t2_3				frequencyList,
	t2_4				frequencyList,
	t2_5				frequencyList,
	t2_6				frequencyList,
	t2_7				frequencyList,
	t2_8				frequencyList,
	t3_1				frequencyList,
	t3_2				frequencyList,
	t3_3				frequencyList,
	t3_4				frequencyList,
	t3_5				frequencyList,
	t3_6				frequencyList,
	t3_7				frequencyList,
	t3_8				frequencyList,
	t4_1				frequencyList,
	t4_2				frequencyList,
	t4_3				frequencyList,
	t4_4				frequencyList,
	t4_5				frequencyList,
	t4_6				frequencyList,
	t4_7				frequencyList,
	t4_8				frequencyList,
	t5_1				frequencyList,
	t5_2				frequencyList,
	t5_3				frequencyList,
	t5_4				frequencyList,
	t5_5				frequencyList,
	t5_6				frequencyList,
	t5_7				frequencyList,
	t6_1				frequencyList,
	t6_2				frequencyList,
	t6_3				frequencyList,
	t6_4				frequencyList,
	t6_5				frequencyList,
	t6_6				frequencyList,
	t6_7				frequencyList,
	t7_1				frequencyList,
	t7_2				frequencyList,
	t7_3				frequencyList,
	t7_4				frequencyList,
	t7_5				frequencyList,
	t7_6				frequencyList,
	t7_7				frequencyList,
	t8_1				frequencyList,
	t8_2				frequencyList,
	t8_3				frequencyList,
	t8_4				frequencyList,
	t8_5				frequencyList,
	t8_6				frequencyList,
	t8_7				frequencyList,
	t9_1				frequencyList,
	t9_2				frequencyList,
	t9_3				frequencyList,
	t9_4				frequencyList,
	t9_5				frequencyList,
	t9_6				frequencyList,
	t9_7				frequencyList,
	t9_8				frequencyList,
	-- 67 question total
	test_score		smallint
);

### genderselect(data type)
create type genderselect as enum('0','1','2')  -- 0:others; 1:male; 2:female

### userInfo(table)
create table userinfo(
	openid    		text,
	gender			genderSelect,
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

直接使用的代码包括
- 省市三级联动: [如何实现一个自定义数据版省市区三级联动](https://developers.weixin.qq.com/community/develop/article/doc/0000643f674fa81a18a92b37455413)

我们计划在校级创新项目结束后（2021.04.01）按照MIT协议发布开源代码