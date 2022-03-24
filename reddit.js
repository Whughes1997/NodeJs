request('https://reddit.com/r/popular.json.'), (err, res, body) => {

    if (err) console.log(err)

    res.body.data.url.forEach(item => {
        console.log(item.chirps.author.url.title)

    })
}

const datapath = path.join(__dirname, "../popular-articles.json")