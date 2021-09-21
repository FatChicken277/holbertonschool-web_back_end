export default function cleanSet(set, startString) {
  const result = [];

  if (!startString || startString.length === 0) {
    return '';
  }

  set.forEach((key) => {
    if (key && key.startsWith(startString)) {
      result.push(key.substr(startString.length));
    }
  });

  return result.join('-');
}
