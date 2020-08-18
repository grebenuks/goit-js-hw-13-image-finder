import hitsTpl from '../templates/hits.hbs';

const refs = {
  gallery: document.querySelector('.gallery'),
};

function updateMarkup(hits) {
  const markup = hitsTpl(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
