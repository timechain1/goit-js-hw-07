import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imagesGallery  = createGalleryCardsItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesGallery );

function createGalleryCardsItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" 
    href="large-image.jpg">
    <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
  </a>
</div>
`;
}).join('');
}

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return;
    } else {
        const gallery = basicLightbox.create(`<img src= "${event.target.dataset.source}" alt="${event.target.alt}"/>`,
            {
                onClose: (instance) => { window.removeEventListener('keydown', onEscKeyPress);}
            });
            gallery.show();  

        window.addEventListener('keydown', onEscKeyPress);

        function onEscKeyPress(event) {
            if (event.code === 'Escape') {
                gallery.close();
            }
        }
    }
}