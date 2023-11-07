// Módulo 1 - Variáveis - Prática 3 da Aula
/*
const aluno = prompt("Qual é o teu nome?");
let idade = prompt("Qual é a tua idade?");
let presenca = confirm("Quer participar do curso da Labenu?");

console.log("Estudante", aluno, "tem", idade, "anos! Presença", presenca);
console.log("aluno:", typeof aluno, ", idade:", typeof idade, ", presença:", typeof presenca);

let idadeNum = Number(idade);
console.log("Utilizando-se do recuro do casting, a variável idade de string passa para:");
console.log("idade:", typeof idadeNum);
*/

// Módulo 1 - Variáveis - Exercícios Prática Extra da Aula
/*
const cidade = prompt("Digite a cidade onde mora:");
let cep = Number(prompt("Digite o CEP da tua cidade (informar somente os números)"));
let turistica = confirm("A cidade é turistica? OK para SIM e Cancelar para NÂO");

console.log("cidade:", typeof cidade, ", cep:", typeof cep, ", turistica:", typeof turistica);
console.log("A cidade", cidade, "de CEP", cep, "é uma cidade turistica?", turistica);
*/

let a = 30
let b = 50
let c
console.log("O valor de A é", a, "e o valor de B é", b);
console.log("Redistribuindo os valores...")

c = b
b = a
a = c

console.log("... A passa a valer", a, "e B passa a valer", b)