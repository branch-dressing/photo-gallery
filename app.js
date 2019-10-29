import { renderItem } from './utils/renderImage.js';
import htmlToDOM from './utils/html-to-DOM.js';
import images from './data/images.js';

const ul = document.getElementById('cards');
const horns = document.querySelector('.horns');

horns.addEventListener('change', () => {
    const filter = horns.value;
    let filteredHorns = null;

    if (!filter) {
        filteredHorns = images;
    } else {
        filteredHorns = images.filter(item => {
            if (item.horns === filter) {
                return item;
            }
        });
    }
    render(filteredHorns);
});

render(images);

function render(imagesToRender) {
    while (ul.lastElementChild) {
        ul.lastElementChild.remove();
    }

    imagesToRender.forEach(item => {
        let renderedImage = renderItem(item);
        let domReadyIamge = htmlToDOM(renderedImage);
        ul.appendChild(domReadyIamge);
    });
}




