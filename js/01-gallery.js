import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector("div.gallery");
const newGallery = galleryItems
.map((image)=> `<div class="gallery__item">
<a class="gallery__link" href="${image.original}">
  <img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
  />
</a>
</div>`)
.join("");

gallery.insertAdjacentHTML("beforeend", newGallery);

const instance = basicLightbox.create(`
  <img src="" />
`);
const url = instance.element().querySelector("img");

function onClickPicture(event) {
    event.preventDefault();
    if (event.target.nodeName !=="IMG"){
        return;
    }
    url.src = event.target.dataset.source;
    instance.show();
    window.addEventListener("keydown", onModalEscape);
}

function onModalEscape(event) {
    if (event.code === "Escape"){
        console.log("Close modal");
        instance.close();
        window.removeEventListener("keydown", onModalEscape);
        return;
    }
}

gallery.addEventListener("click", onClickPicture);
