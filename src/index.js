import './styles.css';
import refs from './js/refs.js';
import apiService from './js/apiService';
import hitsTpl from './templates/hits.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

refs.form.addEventListener('submit', handlerInput);
refs.morePicBtn.addEventListener('click', loadMorePicFn);
refs.gallery.addEventListener('click', handlerClickImage);

function handlerInput(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.query;

  clearListImages();

  apiService.resetPage();
  apiService.searchQuery = input.value;
  apiService.fetchHits().then(insertListImages);
  input.value = '';
}

function loadMorePicFn() {
  apiService
    .fetchHits()
    .then(insertListImages)
    .finally(() => scroll());
}

function insertListImages(hits) {
  const markup = hitsTpl(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearListImages() {
  refs.gallery.innerHTML = '';
}

function scroll() {
  setTimeout(() => {
    scrollBy({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  }, 700);
}

function handlerClickImage(e) {
  if (e.target.nodeName === 'IMG') {
    const largeImageURL = e.target.dataset.source;
    basicLightbox
      .create(
        `
    <img src="${largeImageURL}" width="1200" height="960">`,
      )
      .show();
  }
}
