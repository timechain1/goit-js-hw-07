import { galleryItems } from './gallery-items.js';
// Change code below this line

const lightGallery = document.querySelector(".gallery");

const extend = galleryItems
.map(({ preview, description, original }) => {
  return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
})
.join("");
  

  lightGallery.insertAdjacentHTML('beforeend', extend);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,

});