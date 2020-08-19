import refs from './refs';

const apiKey = '17952802-daa7906d75026c0e61ecd1623';
const baseUrl = 'https://pixabay.com/api/';

export default {
  page: 1,
  query: '',

  fetchHits() {
    const url = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;
    return fetch(baseUrl + url)
      .then(res => res.json())
      .then(parsedResponse => {
        this.incrementPage();
        return parsedResponse.hits;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
    refs.morePicBtn.classList.remove('is-hidden');
  },
  resetPage() {
    this.page = 1;
  },
};
