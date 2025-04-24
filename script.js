function calcularQuantidadeVitorias() {
    let inputNomeHeroi = document.getElementById('inputNomeHeroi').value;
    let inputQtdVitorias = document.getElementById('inputQtdVitoriasHeroi').value;
    let inputQtdDerrotas = document.getElementById('inputQtdDerrotasHeroi').value;

    let resultado = (inputQtdVitorias - inputQtdDerrotas);

    consultarNivelEmRanked(inputNomeHeroi, resultado);
}

function consultarNivelEmRanked(nomeHeroi, qtdVitorias) {
    let nivel = "";
    if (qtdVitorias < 10) {
        nivel = 'Ferro';
    } else if (qtdVitorias >= 10 && qtdVitorias <= 20) {
        nivel = 'Bronze';
    } else if (qtdVitorias > 20 && qtdVitorias <= 50) {
        nivel = 'Prata';
    } else if (qtdVitorias > 50 && qtdVitorias <= 80) {
        nivel = 'Ouro';
    } else if (qtdVitorias > 80 && qtdVitorias <= 90) {
        nivel = 'Diamante';
    } else if (qtdVitorias > 90 && qtdVitorias <= 100) {
        nivel = 'Lendário';
    } else if (qtdVitorias > 100) {
        nivel = 'Imortal';
    }

    let resultado = document.querySelector('.resultadoConsulta');
    resultado.innerHTML = `O Herói de nome ${nomeHeroi} tem de saldo de ${qtdVitorias} e está no nível ${nivel} em Ranked`;

}