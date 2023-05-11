import { getJson, findObj } from "./helpers.js";

export let state = {};
export let bookmarks = [];

export const getCountry = async function (name) {
  try {
    const [data] = await getJson(`https://restcountries.com/v2/name/${name}`);

    state = {
      imgPNG: data.flags.png,
      name: data.name,
      flag: data.flag,
      region: data.region,
      capital: data.capital,
      population: data.population,
      currencies: data.currencies[0].code,
      language: data.languages[0].name,
      bookmark: findObj(bookmarks, data),
    };
  } catch (err) {
    throw err;
  }
};

export const addBookmark = function () {
  state.bookmark = true;
  bookmarks.push(state);
  updateLocalStorage(bookmarks);
};

export const removeBookmark = function () {
  state.bookmark = false;
  const index = bookmarks.findIndex((mark) => mark.name === state.name);

  bookmarks.splice(index, 1);
  console.log(index, bookmarks);

  updateLocalStorage(bookmarks);
};

const updateLocalStorage = function (data) {
  localStorage.setItem("bookmark", JSON.stringify(data));
};

const getLocalStorage = function () {
  const data = localStorage.getItem("bookmark");

  if (!data) return;

  bookmarks = JSON.parse(data);
};

getLocalStorage();
