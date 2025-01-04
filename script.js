let photos = [1, 2, 3, 4, 5, 6, 7, 8,9];
let gallery_container = document.querySelector('.gallery_container');

// Dynamically create cards with images
photos.forEach((item, i) => {
    let div = document.createElement('div');
    div.classList.add('card', `img-${i}`);

    gallery_container.appendChild(div);
    let box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = `<img src="public/${item}.jpg" alt="Photo ${item}">`;
    div.appendChild(box)
});
