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
- params类型：JSON：  网易云音乐歌曲URL & 专辑海报 URL
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

- URL: "https://www.gricn.top:4000/login/[params]"
- params类型： 微信小程序获取的code
- 备注：在服务器记录用户的登录状态

----

## 数据库表单

### login(table)
 create table login(
     no serial,
     openid text ,
     timestamp timestamp default current_timestamp
 );

### test(table)
 create table test(
     no serial,
     openid text primary key references userinfo(openid),
     timestamp timestamp default current_timestamp,
     score
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

### test(table)  -- redesign
create table testdetail(
	num				serial,			
	openid    		text				primary key,			
	test_times		smallint,
	1_1				frequencyList,
	1_2				frequencyList,			
	1_3				frequencyList,
	1_4				frequencyList,
	1_5				frequencyList,
	1_6				frequencyList,
	1_7				frequencyList,
	2_1				frequencyList,
	2_2				frequencyList,
	2_3				frequencyList,
	2_4				frequencyList,
	2_5				frequencyList,
	2_6				frequencyList,
	2_7				frequencyList,
	2_8				frequencyList,
	3_1				frequencyList,
	3_2				frequencyList,
	3_3				frequencyList,
	3_4				frequencyList,
	3_5				frequencyList,
	3_6				frequencyList,
	3_7				frequencyList,
	3_8				frequencyList,
	4_1				frequencyList,
	4_2				frequencyList,
	4_3				frequencyList,
	4_4				frequencyList,
	4_5				frequencyList,
	4_6				frequencyList,
	4_7				frequencyList,
	4_8				frequencyList,
	5_1				frequencyList,
	5_2				frequencyList,
	5_3				frequencyList,
	5_4				frequencyList,
	5_5				frequencyList,
	5_6				frequencyList,
	5_7				frequencyList,
	6_1				frequencyList,
	6_2				frequencyList,
	6_3				frequencyList,
	6_4				frequencyList,
	6_5				frequencyList,
	6_6				frequencyList,
	6_7				frequencyList,
	7_1				frequencyList,
	7_2				frequencyList,
	7_3				frequencyList,
	7_4				frequencyList,
	7_5				frequencyList,
	7_6				frequencyList,
	7_7				frequencyList,
	8_1				frequencyList,
	8_2				frequencyList,
	8_3				frequencyList,
	8_4				frequencyList,
	8_5				frequencyList,
	8_6				frequencyList,
	8_7				frequencyList,
	9_1				frequencyList,
	9_2				frequencyList,
	9_3				frequencyList,
	9_4				frequencyList,
	9_5				frequencyList,
	9_6				frequencyList,
	9_7				frequencyList,
	9_8				frequencyList,
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
)

### musiclistenrecord(table)  -- redesign
create table musiclistenrecord(
	openid    		text				primary key	references userinfo(openid),
	musicID			varchar(15) 		references musiclist(music_id),
	listen_times	smallint
);


