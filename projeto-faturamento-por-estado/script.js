function calcularPercentuais() {
    const faturamento = {
        SP: 98658985.22,
        RJ: 598625.33,
        BH: 9878777.77,
        RS: 2985585.28,
        Outros: 1895.53
    };


    const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);


    for (const estado in faturamento) {
        const valor = faturamento[estado];
        const percentual = ((valor / total) * 100).toFixed(2);
        
        document.getElementById(`${estado.toLowerCase()}Faturamento`).innerText = valor.toFixed(2);
        document.getElementById(`${estado.toLowerCase()}Percentual`).innerText = percentual;
    }
}
