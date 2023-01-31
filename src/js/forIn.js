export default function orderByProps(obj, arr) {
  const firstObj = [];
  const secondObj = [];

  for (const key in obj) {
    if (arr.includes(key)) {
      firstObj.push({ key, value: obj[key] });
    } else {
      secondObj.push({ key, value: obj[key] });
    }
  }
  firstObj.sort((a, b) => arr.indexOf(a.key) - arr.indexOf(b.key));
  secondObj.sort((a, b) => (a.key > b.key ? 1 : -1));
  return [...firstObj, ...secondObj];
}
