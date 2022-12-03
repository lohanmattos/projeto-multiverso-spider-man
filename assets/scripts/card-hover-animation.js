function handleMouseEnter(){
    this.classList.add("s-card--hovered");
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove("s-card--hovered");
    document.body.id = '';
}

function addEventListenersToCards(){
    const cardelements = document.getElementsByClassName("s-card");
    console.log(cardelements);

    for (let index = 0; index < cardelements.length; index++) {
        const card = cardelements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);