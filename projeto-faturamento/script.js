
const faturamentoDados = [
        {"dia": 1, "valor": 22224.1664},
        {"dia": 2, "valor": 24537.6698},
        {"dia": 3, "valor": 26139.6134},
        {"dia": 4, "valor": 0.0},
        {"dia": 5, "valor": 0.0},
        {"dia": 6, "valor": 26742.6612},
        {"dia": 7, "valor": 0.0},
        {"dia": 8, "valor": 42889.2258},
        {"dia": 9, "valor": 46251.155574},
        {"dia": 10, "valor": 11191.4722},
        {"dia": 11, "valor": 0.0},
        {"dia": 12, "valor": 0.0},
        {"dia": 13, "valor": 387.4823},
        {"dia": 14, "valor": 373.783128},
        {"dia": 15, "valor": 2659.7563},
        {"dia": 16, "valor": 48924.2448},
        {"dia": 17, "valor": 18419.261224},
        {"dia": 18, "valor": 0.0},
        {"dia": 19, "valor": 0.0},
        {"dia": 20, "valor": 35240.551826},
        {"dia": 21, "valor": 4385532525.6844452},
        {"dia": 23, "valor": 4355.0662},
        {"dia": 24, "valor": 13327.102524},
        {"dia": 25, "valor": 0.0},
        {"dia": 26, "valor": 0.0},
        {"dia": 27, "valor": 25681.831148},
        {"dia": 28, "valor": 171855.1221},
        {"dia": 29, "valor": 13228850.868495},
        {"dia": 30, "valor": 84145555.6175525}
    ];
    

function loadAndProcessData() {
   
    const resultados = calcularFaturamento(faturamentoDados);

    updateDOMWithResults(resultados);
    
    consoleLogResultados(resultados, faturamentoDados);
}

function calcularFaturamento(faturamento) {
    let menor = Infinity;
    let maior = -Infinity;
    let soma = 0;
    let diasComFaturamento = 0;
    let diasAcimaDaMedia = 0;

    for (let i = 0; i < faturamento.length; i++) {
        const valor = faturamento[i].valor;

        if (valor > 0) {
            if (valor < menor) menor = valor;
            if (valor > maior) maior = valor;
            soma += valor;
            diasComFaturamento++;
        }
    }

    const media = soma / diasComFaturamento;

    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i].valor > media) {
            diasAcimaDaMedia++;
        }
    }

    return {
        menorFaturamento: menor === Infinity ? 0 : menor,
        maiorFaturamento: maior === -Infinity ? 0 : maior,
        diasAcimaDaMedia: diasAcimaDaMedia,
        media: media
    };
}

function updateDOMWithResults(resultados) {
    document.getElementById('menor').innerText = resultados.menorFaturamento.toFixed(2);
    document.getElementById('maior').innerText = resultados.maiorFaturamento.toFixed(2);
    document.getElementById('dias-acima').innerText = resultados.diasAcimaDaMedia;
}

function consoleLogResultados(resultados, faturamentoMensal) {
    console.log(`Menor valor de faturamento: R$${resultados.menorFaturamento.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$${resultados.maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias acima da média: ${resultados.diasAcimaDaMedia}`);

    console.log('\nDias com faturamento superior à média:');
    faturamentoMensal.forEach(item => {
        if (item.valor > resultados.media) {
            console.log(`${item.dia}: R$${item.valor.toFixed(2)}`);
        }
    });
}

function handleError(error) {
    console.error('Erro ao processar os dados:', error);
    document.getElementById('menor').innerText = 'Erro';
    document.getElementById('maior').innerText = 'Erro';
    document.getElementById('dias-acima').innerText = 'Erro';
}

document.addEventListener('DOMContentLoaded', loadAndProcessData);