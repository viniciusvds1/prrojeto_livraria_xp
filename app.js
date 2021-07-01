const livros = require('./database')
const readline = require('readline-sync')
const putInit = readline.question("Deseja buscar um livro?S/N")

if(putInit.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis: ')
    console.log('categoria 1', 'categoria 2')

    const putCategory = readline.question("Qual categoria você escolhe: ")
    
    const back = livros.filter(livro => livro.categoria === putCategory)
    console.table(back)
}else {
    const ordenBy =  livros.sort((a,b) => a.id - b.id)
    console.log('Esses são todos os livros disponiveis: ')
    console.table(ordenBy)

}