// export default {
//   _page: 1,
//   _query: 'pen',
//   _myKey: '17697395-d82fa808be968b3a5a71f0627',
//   getImages() {
//     const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this._page}&per_page=12&key=${this._myKey}`;
//     return fetch(url)
//       .then(res => res.json())
//       .then(({ hits }) => {
//         this.incrementPage();
//         return hits;
//       });
//   },
//   some(text) {
//     console.log(text);
//   },
//   get query() {
//     return this._query;
//   },
//   set query(value) {
//     this._query = value;
//   },
//   resetPage() {
//     this._page = 1;
//   },
//   incrementPage() {
//     this._page++;
//   },
// };
