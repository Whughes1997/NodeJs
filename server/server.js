const path = require('path');
const fs = require('fs');
const request = require('request')

const datapath = path.join(__dirname, "../chirps.json")


request('https://reddit.com/r/popular.json.'), (err, res, body) => {

    if (err) console.log(err)

    res.body.data.url.forEach(item => {
        console.log(item.chirps.author.url.title)
    })
}

let chirps = [
    { name: "I like cheese" },
    { name: "beeo boop robot" },
    { name: "the fitness gram pacer test" },
    { name: "yabadubbadubba" },
    { name: "Elden ring is bomb" }
]

let data = JSON.stringify(chirps)

fs.writeFile(datapath, data, (err) => {
    console.log(err)
})