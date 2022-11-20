import API from '../Utils/index';

const fetchRecipes = async (query, callback) => {
  const response = await fetch(
    `${API.ROOT_URL}?app_id=${API.APP_ID}&app_key=${API.APP_KEY}&type=public&q=${query}`
  );
  const data = await response.json();
  callback(data.hits);
};

export default fetchRecipes;
