const apiKey = '17952802-daa7906d75026c0e61ecd1623';

function fetchHits(searchQuery) {
  let page = 1;
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => data.hits)
    .catch(error => console.log(error));
}

export default fetchHits;
