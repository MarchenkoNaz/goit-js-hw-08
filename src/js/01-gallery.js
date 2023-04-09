// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

//!Markup
const galleryList = document.querySelector('.gallery')
const markup = createMarkup(galleryItems)

function createMarkup(arr) {
	return arr.map(el => {
		return `<li class="gallery__item">
					<a class="gallery__link" href="${el.original}">
						<img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}"/>
					</a>
				</li>`
	}).join("")
}
galleryList.insertAdjacentHTML('beforeend', markup)//Insert markup in ul list in html document

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });//Used for showing photos in large size


