const {readFileSync, writeFileSync} = require('fs')

console.log('Start')
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

console.log('Fin de la tache en cours')
console.log('Debut de la nouvelle tâche')