// IMPORT MODULES under test here:
import { renderItem } from '../utils/renderImage.js';
import images from '../data/images.js';


const test = QUnit.test;

test('renders an html string', function(assert) {
    let item = images[4];
    
    let expected = /*html*/`
    <li>
        <h2>Basically a Unicorn</h2>
        <img src="https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg">
        <p>No. of Horns: 1</p>
    </li>`;

    const html = renderItem(item);

    assert.htmlEqual(html, expected);
});