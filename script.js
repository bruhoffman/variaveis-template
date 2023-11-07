const cidade = prompt("Digite a cidade onde mora:");
let cep = Number(prompt("Digite o CEP da tua cidade:"));
let turistica = confirm("A cidade é turistica? OK para SIM e Cancelar para NÂO");

console.log("cidade:", typeof cidade, ", cep:", typeof cep, ", turistica:", typeof turistica);
console.log("A cidade", cidade, "de CEP", cep, "é uma cidade turistica?", turistica);