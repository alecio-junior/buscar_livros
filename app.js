//pegar o input
// se for sim, mostra as categorias disponiveis, pergunta qual categoria ela escolhe
//se não, mostra todos os livros em ordem crescente pela quantidade de paginas

const livros = require("./database")
const readline = require('readline-sync')

const entradaInicial = readline.question('deseja buscar um livro ? s/n ')

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis')
    console.log('Produtividade e estilo de vida ' , '/Historia brasileira' ,'/Tecnologia')
   
    const entradaCategoria = readline.question('Qual categoria voce escolhe: ')

    const retorno = livros.filter(livros => livros.categoria === entradaCategoria)

    console.table(retorno)
}else{

   const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todos os livros disponivies:');
    console.table(livrosOrdenados);

}
