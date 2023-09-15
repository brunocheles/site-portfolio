/* Animação de carregamento da tela */
const myObserver = new IntersectionObserver((itens) => {
    itens.forEach((item) => {
        if(item.isIntersecting) {
            item.target.classList.add(animacao_class);
        }else {
            item.target.classList.remove(animacao_class);
        }
    })
})
const animate_itens = document.querySelectorAll('[data-anima]');
const animacao_class = 'animacao';
console.log(animate_itens);

animate_itens.forEach((item) => myObserver.observe(item))