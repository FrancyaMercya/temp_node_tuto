const os = require('os')

const user = os.userInfo()

console.log(user)

console.log(`Le système a pris ${os.uptime()} séconde(s) pour s'executé`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS)

/** Path module */
const path = require('path')

console.log(path.sep)

const filepathx = path.join('/sous_dossier/', 'filex.txt')

console.log(filepathx)

const base = path.basename(filepathx)

console.log(base)

const absolute = path.resolve(__dirname, 'sous_dossier', 'filex.txt')

console.log(absolute)

/** */

const first = readFileSync('./sous_dossier/folderx/first.txt', 'utf8')

const second = readFileSync('./sous_dossier/folderx/second.txt', 'utf8')

console.log(first)

console.log(second)

const livre = 'Merise2.txt';
writeFileSync(
    `./sous_dossier/${livre}`,
    `Here is the content of this book, my merise book : ${first}, ${second}`,
    {flag: 'a'}
)

/** */

const {readFile, writeFile} = require('fs')
console.log('Debut')
readFile('./sous_dossier/Merise2.txt', 'utf8', (err, result)=>{
    if (err) {
        console.error(err)
    }
    const first = result
    
    readFile('./sous_dossier/filex.txt', 'utf8', (err, result)=>{
        if(err){
            console.error(err)
        }
        const second = result

        writeFile(
            './sous_dossier/folderx/third.txt',
            `Here is your job result 1)${first}, 2)${second}`,
            (err, result) => {
                if (err){
                    console.log(err)
                }
                // console.log(result)
                console.log('Fin de la tâche en cours')
            }
        )
    })
})
console.log('Nous passons la tâche suivante')