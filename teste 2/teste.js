
function verificarFibonacci() {
    let num = parseInt(document.getElementById("inputNumber").value);
    let a = 0, b = 1;
    let pertence = false;

    
    while (a <= num) {
        if (a === num) {
            pertence = true;
            break;
        }
        let proximo = a + b;
        a = b;
        b = proximo;
    }

    let resultado = document.getElementById("result");
    if (pertence) {
        resultado.innerHTML = `O número ${num} pertence à sequência de Fibonacci.`;
        resultado.style.color = 'blue';
    } else {
        resultado.innerHTML = `O número ${num} NÃO pertence à sequência de Fibonacci.`;
        resultado.style.color = 'red';
    }
}
