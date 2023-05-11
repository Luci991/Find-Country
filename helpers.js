export const getJson = async function (url) {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error();

    const data = await res.json();

    return data;
  } catch (err) {
    throw err;
  }
};

/**
 *
 * @param {array} array
 * @param {object | number | string} searchData
 * @param
 * @returns boolean
 */

export const findObj = function (array, searchData) {
  if (array.length === 0) return false;

  const results = array.find((s) => s.name === searchData.name);

  if (!results) return false;

  return true;
};
