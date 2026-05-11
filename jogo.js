//DECLARAÇÃO DE ARRAY

let frutas = [];    //Declaração vazia usando colchetes
//OU
let frutas_cheio = ["maçã", "banana", "uva"];

// Outra forma de declaração
let carros = new Array();   //Esta também é uma forma ce criar um array

/**********/

//PARA INSERIR VALORES
carros.push("Ferrari"); //Insere o valor na última posição do array

carros.pop();   //Remove o último valor do array

// Vamos supor que eu queira inserir o valor morango, mas antes de maçã
frutas_cheio.unshift("morango");   //Insere o valor na posição 0 do array
// Nossos valore ficariam frutas_cheio = ["morango", "maçã", "banana", "uva"]

frutas_cheio.shift();   //Remove o valor da primeira posição do array
// Nossos valores voltariam a ficar frutas_cheio = ["maçã", "banana", "uva"]

frutas_cheio.push("laranja");
// ["maçã", "banana", "uva", "laranja"]

frutas_cheio.splice(1, 1);   //Remove a banana
// ["maçã", "uva", "laranja"]

// No uso do splice, o primeiro argumento disponível é o índice do array e o segundo argumento é quantidade de itens a serem removidos

/***********/
// Outra forma de romover valores
let numeros = [10,20, 30, 40];

// Quero remover o valor 30

let novo = numeros.filter(n => n !== 30);

// Novo = [10, 20, 40]

/**********/
// Array em JavaScript, além de ser infinito, aceita valores de múltiplos formatos

let misto = [10, "texto", true];

//Declaração de array como matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][1]);   //Retorna o valor 2 (linha 0, coluna 1)

/********************************************************************
 * ******************************************************************
 */

// OBJETO
// Objetos são declarados com pares chaves-valor
let pessoa = {
    nome: "João",
    idade: 25
};

console.log("Olá, " + pessoa.nome);   //Vai aparecer "Olá, João"

let array_pessoa = ["João," 25];  //Se fosse em um array

console.log("Olá, " + array_pessoal[0]);

// Voltando ao objeto
pessoa.nome = "Maria";   //Susbstitui o nome

console.log(pessoa.nome);   //Agora aparece "Maria", não mais "João"

pessoa.profissao = "Professora";

console.log(pessoa.profissao);   //Vai aparecer professora

delete pessoa.idade;   //Remove a propriedade idade

let exemplo = {
    numero: 10,
    texto: "oi",
    booleano: true,
    lista: [1, 2, 3],
    outroObjeto: { x: 1}
};   //Posso guardar número, texto, booeleano, arrays e outro objeto dentro de um objeto

let pessoa = {
    nome: "João",
    falar: function() {
        console.log("Olá")
    }
}