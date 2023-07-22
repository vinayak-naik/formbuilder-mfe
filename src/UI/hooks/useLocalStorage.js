const setItem = (key, inputValue) => {
  localStorage.setItem(key, JSON.stringify(inputValue));
};

const getItem = (key) => {
  const storedValue = localStorage.getItem(key);
  return JSON.parse(storedValue);
};

const removeItem = (key) => {
  localStorage.removeItem(key);
};

export { setItem, getItem, removeItem };
