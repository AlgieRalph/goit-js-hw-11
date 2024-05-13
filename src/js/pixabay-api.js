export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43852085-6a7db55ca74e985baf6f89804';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
