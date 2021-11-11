const hamburger = document.querySelector('[data-hamburger]');
const navegacao = document.querySelector('[data-navegacao]');
const botaoFechar = document.querySelector('[data-fechar]')

hamburger.addEventListener('click', () => {
    navegacao.classList.toggle('cabecalho__navegacao--ativo');
})

botaoFechar.addEventListener('click', () => {
    navegacao.classList.remove('cabecalho__navegacao--ativo');
})

navegacao.addEventListener('click', (event) => {
    event.stopPropagation();
})

document.addEventListener('click', (event) => {
    const alvoValido = event.target != hamburger;
    const menuAberto = navegacao.classList.contains('cabecalho__navegacao--ativo');

    if (alvoValido && menuAberto) {
            navegacao.classList.remove('cabecalho__navegacao--ativo');
        }
});