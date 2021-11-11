const http = require('http')

const myServer = http.createServer((req, res) => {
    res.write('Merci Jéhovah #Dieu', 'utf-8')
    res.end()
})

myServer.listen(5000)