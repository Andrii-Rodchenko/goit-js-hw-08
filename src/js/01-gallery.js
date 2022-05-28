// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");

const markupGallery = createGalleryLayout(galleryItems);

galleryEl.innerHTML = markupGallery;

function createGalleryLayout(array) { 
const markup = array.map(({preview, original, description}) => {
    return   `  
    <div>
   <a class="gallery__item" href=${original} onclick = "event.preventDefault()">
  <img class="gallery__image" 
  src="${preview}"
  alt="${description}"/>
</a>
  </div>`
}).join(" ")
    return markup
} 

galleryEl.addEventListener("click", handleImageClick)

function handleImageClick(event) {
    const { target } = event;
    if (!target.classList.contains("gallery__image")) {
    return    
    } else {  console.log(target.getAttribute("alt"))
        const lightbox = new SimpleLightbox(".gallery__item", {
            captionsData: "alt",
            captionDelay: 250, 
        });
   lightbox.on('show.simplelightbox');
    }
  
}
