const hamburger = document.querySelector('[data-hamburger]');
const navegacao = document.querySelector('[data-navegacao]');
const botaoFechar = document.querySelector('[data-fechar]')

hamburger.addEventListener('click', () => {
    navegacao.classList.toggle('cabecalho__navegacao--ativo');
})

botaoFechar.addEventListener('click', () => {
    navegacao.classList.remove('cabecalho__navegacao--ativo');
})

document.addEventListener('scroll', () => {
    setTimeout(() => {navegacao.classList.remove('cabecalho__navegacao--ativo');}, 500);
});