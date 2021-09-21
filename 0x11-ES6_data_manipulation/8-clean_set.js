export default function cleanSet(set, startString) {
  const result = [];

  set.forEach((key) => {
    if (key.startsWith(startString) && startString !== '') {
      result.push(key.substr(startString.length));
    }
  });

  return result.join('-');
}
