function p(data, isObj) {
  if (!isObj) {
    console.log(data);
  } else {
    console.dir(data);
  }
}

export {p};