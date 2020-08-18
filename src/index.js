import './styles.css';
import fetchHits from './js/fetch';
import updateMarkup from './js/markup';

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  refs.gallery.innerHTML = '';
  form.reset();
  fetchHits(inputValue).then(updateMarkup);
});
