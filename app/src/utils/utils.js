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

const getLocalStorageItem = (name) => {
  if (localStorage.getItem(name)) return JSON.parse(localStorage.getItem(name));
};

const saveToLocalStorage = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
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
