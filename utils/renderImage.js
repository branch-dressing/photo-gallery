

export function renderItem(item) {
    const li = document.createElement('li');
    
    const h2 = document.createElement('h2');
    h2.textContent = item.title;
    li.appendChild(h2);

    const img = document.createElement('img');
    img.src = item.url;
    li.appendChild(img);

    const p = document.createElement('p');
    p.textContent = 'No. of Horns: ' + item.horns;
    li.appendChild(p);

    return li;
}