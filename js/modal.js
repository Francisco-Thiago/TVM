const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');
const item = document.querySelectorAll('.item');

[...item].map(itemSelected => {
    itemSelected.addEventListener('click', (el) =>{
        modal.style.display = "flex";
        console.log(el.target.parentNode);
    })
})

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
})
