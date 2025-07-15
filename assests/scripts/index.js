// Função chamada quando o mouse entra em um card
function handleMouseEnter() {
    // Adiciona a classe de hover ao card para aplicar estilos visuais
    this.classList.add('s-card--hovered');
    // Define o id do body para indicar qual card está em hover
    document.body.id = `${this.id}-hovered`;
}

// Função chamada quando o mouse sai de um card
function handleMouseLeave() {
    // Remove a classe de hover do card
    this.classList.remove('s-card--hovered');
    // Limpa o id do body
    document.body.id = '';
}

// Função que adiciona os event listeners a todos os cards
function addEventListernersToCards() {
    // Seleciona todos os elementos com a classe 's-card'
    const cardElement = document.getElementsByClassName('s-card');

    // Percorre todos os cards encontrados
    for (let i = 0; i < cardElement.length; i++) {
        const card = cardElement[i];
        // Adiciona o evento de mouseenter para ativar o hover
        card.addEventListener("mouseenter", handleMouseEnter);
        // Adiciona o evento de mouseleave para desativar o hover
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

// Aguarda o carregamento do DOM para adicionar os event listeners aos cards
document.addEventListener("DOMContentLoaded", addEventListernersToCards, false);

function selectCarouselItem(selectedButtonElement){
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    if (rotateY) {
        const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
        carousel.style.transform = newTransform;
    } else {
        carousel.style.transform = `rotateY(${rotateYDeg}deg)`;
    }

    const activeButtonElement = document.querySelector('.s-controller__button--active');
    if (activeButtonElement) {
        activeButtonElement.classList.remove('s-controller__button--active');
    }
    selectedButtonElement.classList.add('s-controller__button--active');
}