export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw Error('Cannot process');
  }

  groceries.forEach((key, value) => {
    if (key === 1) {
      groceries.set(value, 100);
    }
  });
}
