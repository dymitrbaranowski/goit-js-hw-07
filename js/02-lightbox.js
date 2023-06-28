import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery");
const galleryCardsSet = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item" style="border-radius: 4px; background: transparent; box-shadow: none;">
  <a class="gallery__item" href="${original}" style= "box-shadow: none;" style="border-radius: 4px;">
  <img class="gallery__image" src="${preview}" alt="${description}" style="border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px; background: rgba(255, 255, 255, 0.3); box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 2px 1px -1px rgb(0 0 0 / 12%);"/>
</a>
</div>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", galleryCardsSet);


// const items = [];

// galleryItems.forEach((element) => {
//   const galleryLink = document.createElement("a");
//   galleryLink.className = "gallery__link";
//   galleryLink.href = element.original;
//   const galleryImage = document.createElement("img");
//   galleryImage.className = "gallery__image";
//   galleryImage.src = element.preview;
//   galleryImage.setAttribute("title", element.description);
//   galleryImage.alt = element.description;

//   galleryLink.append(galleryImage);
//   items.push(galleryLink);
// });
// gallery.append(...items);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});

