export function convertObject(obj) {
  let newarr = [];

  for (let key in obj) {
    if (obj[key] === true) {
      newarr.push(`ele.aminites.includes(${JSON.stringify(key)})`);
    }
  }

  return newarr;
}
