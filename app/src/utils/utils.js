/**
 * Handles fetch request via specified endpoint.
 */
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    return [];
    console.log(e);
  }
};

/**
 * executes fetch request to pokedex api.
 * @param  {String} searchString
 */
const getPokeDexData = (searchString) => {
  fetchData(`https://pokeapi.co/api/v2/pokemon/${searchString}?limit=10`);
};

export { fetchData, getPokeDexData };
