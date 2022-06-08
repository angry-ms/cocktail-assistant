export function id() {
  return Math.floor(Math.random() * 100) + Date.now();
}

export function filterIngredients(data) {
  const items = [];

  for (const key in data) {
    const singleDrink = data[key];

    for (let index = 1; index <= 15; index++) {
      const key = `strIngredient${index}`;

      if (key in singleDrink) {
        const value = singleDrink[`strIngredient${index}`];

        value && items.push(value);
      }
    }
  }

  return items.filter((item, index) => items.indexOf(item) === index);
}

export function containsObject(obj, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].idDrink === obj.idDrink) {
      return true;
    }
  }

  return false;
}
