const botaoCompartilhar = document.querySelector('[data-share]');
const mensagem = document.querySelector('[data-endline]');
const urlLink = window.location.href;
const shareData = {
    title: 'Projeto Blue Wand',
    text: 'Cuidar de si mesmo é a coisa mais masculina que você pode fazer! Conheça a Blue Wand, uma comunidade maranhense de apoio a homens com câncer de pênis.',
    url: urlLink
}

botaoCompartilhar.addEventListener('click', async () => {

    if (navigator.share) {

        try {
            await navigator.share(shareData)
    
        } catch(err) {
            console.error('Error: ' + e);
        }

    } else {
        mensagem.classList.toggle('visible');
        navigator.clipboard.writeText(urlLink);
    }

});