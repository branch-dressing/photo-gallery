import { renderItem } from './utils/renderImage.js';
import htmlToDOM from './utils/html-to-DOM.js';
import images from './data/images.js';

const ul = document.getElementById('cards');

images.forEach(item => {
    let renderedImage = renderItem(item);
    let domReadyIamge = htmlToDOM(renderedImage);
    ul.appendChild(domReadyIamge);
});

