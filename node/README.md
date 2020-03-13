# API 说明

## 调取五音音乐歌单

- URL: `https://www.gricn.top:4000/public/[params].json`
- params类型：可从右边列表中选取一个值[jue, zhi, gong, shang, yu]
- 返回类型：JSON {music_name(string), music_author(string), music_id(string)}

比如，调取角歌单（jue）：

- URL: `https://www.gricn.top:4000/public/jue.json`
- 返回值：

{
    music_name:'',
    music_author:'',
    music_id:''
}

## 获取歌曲url&专辑海报

- URL: `https://www.gricn.top:4000/api/song/[params]`
- params类型：JSON：  网易云音乐歌曲URL & 专辑海报 URL
- 返回值： URL

比如：获取xxx

URL: `https://www.gricn.top:4000/api/song/xxxxxx`

## 获取专辑图片

- URL: `https://www.gricn.top:4000/api/poster/[params]`
- 参数类型: 网易云音乐歌曲id
- 返回值：URL

比如：获取xxx

URL: `https://www.gricn.top:4000/api/poster/xxxxx`

## 获取测验简略情况（参数待定）

- URL: `https://www.gricn.top:4000/api/test/default/[params]`
- params类型：[用户id，openid]
- 返回值：JSON
- 备注：用户id要在服务器和openid合并检验

## 获取测验详细情况（参数待定）

- URL: `https://www.gricn.top:4000/api/test/details/[params]`
- params类型： [用户id，openid]
- 返回值：JSON
- 备注：用户id要在服务器和openid合并检验
