const showMore = document.querySelector('.catalog__painters-btn');
const itemsLength = document.querySelectorAll('.catalog__painter-info').length;

let items = 3;

showMore.addEventListener('click', () => {
    items += 3;
    const array = Array.from(document.querySelector('.catalog__list-painters').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('items-visible'));

    if (visItems.length === itemsLength) {
        showMore.style.display = 'none';
    }
})
