let photos = [1,2,3,4,5,6]
let gallery_container = document.querySelector('.gallery_container')
photos.forEach((item)=>{
    let div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `<img src='public/${item}.jpg /'>`
    gallery_container.appendChild('div')
})