const fs = require('fs')
const data = require('./data.json')
let value = []
let result

for (i = 0; i < data.songs.length; i++) {
    let pack = {}
    let music_ar = []

    for (j = 0; j < data.songs[i].ar.length; j++) {
        music_ar.push(data.songs[i].ar[j].name)
    }

    pack.music_id = data.songs[i].id
    pack.music_name = data.songs[i].name
    pack.music_authors = music_ar

    // value.push({ pack })
    // value.push(pack)
    // value[i]=pack
    // they all error: [object Object],[object Object],...,[object Object]

    value.push(JSON.stringify(pack))
    result = "[" + value + "]"
}

fs.writeFile('./data/yu.json', result, err => {
    if (err) throw err
    console.log("写入成功")
})
