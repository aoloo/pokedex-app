/**
 * Handles fetch request via specified endpoint.
 */
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (e) {
    return { text: "not found" };
  }
};

/**
 * Gets item from localstorage based by key.
 * @param  {} key
 */
const getLocalStorageItem = (key) => {
  if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key));
};

/**
 * Saves item to localstorage.
 * @param  {String} key
 * @param  {Int | Number | Object} item
 */
const saveToLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

/**
 * executes fetch request to pokedex api.
 * @param  {String} searchString
 */
const getPokeDexData = async (searchString) => {
  return await fetchData(
    `https://pokeapi.co/api/v2/pokemon/${searchString}?limit=10`
  );
};

export { fetchData, getPokeDexData, getLocalStorageItem, saveToLocalStorage };
