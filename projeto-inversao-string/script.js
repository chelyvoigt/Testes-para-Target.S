function inverterString() {

    const input = document.getElementById('inputString').value;
    
   
    let stringInvertida = '';
    

    for (let i = input.length - 1; i >= 0; i--) {
        stringInvertida += input[i];
    }
    

    document.getElementById('resultado').innerText = stringInvertida;
}
