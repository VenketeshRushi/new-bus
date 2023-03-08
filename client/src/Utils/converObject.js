export function convertObject(obj) {
  let newarr = [];

  for (let key in obj) {
    if (obj[key] === true) {
      console.log(key);
      if (key === "DTB6") {
        newarr.push(`(Number(ele.departure<6))`);
      } else if (key === "DT612") {
        newarr.push(
          `(Number(ele.departure)>=6) && (Number(ele.departure)<=12)`
        );
      } else if (key === "DT126") {
        newarr.push(
          `(Number(ele.departure)>12) && (Number(ele.departure)<=18)`
        );
      } else if (key === "DTA6") {
        newarr.push(`(Number(ele.departure>18))`);
      } else if (key === "ATB6") {
        newarr.push(`(Number(ele.arrival<6))`);
      } else if (key === "AT612") {
        newarr.push(`(Number(ele.arrival)>=6) && (Number(ele.arrival)<=12)`);
      } else if (key === "AT126") {
        newarr.push(`(Number(ele.arrival)>12) && (Number(ele.arrival)<=18)`);
      } else if (key === "ATA6") {
        newarr.push(`(Number(ele.arrival>18))`);
      } else {
        newarr.push(`ele.aminites.includes(${JSON.stringify(key)})`);
      }
    }
  }

  return newarr;
}
