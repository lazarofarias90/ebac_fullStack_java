// A função pura, como pedida no exercício
function calcularArea(base, altura) {
    return base * altura; // Retorna a multiplicação dos fatores
}

// Parte da interação com o usuário
alert("Vamos calcular a área de um retângulo?");

let baseInformada = Number(prompt("Qual o valor da base?"));
let alturaInformada = Number(prompt("Qual o valor da altura?"));

// Chamando a função e guardando o retorno em uma variável
let resultado = calcularArea(baseInformada, alturaInformada);

alert("O valor da área é: " + resultado);