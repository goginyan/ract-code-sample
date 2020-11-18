const findSelectedOrFirst = (arr) => {

  let item = arr[0];
  arr.forEach((obj) => {
    if (obj.selected) {
      item = obj;
    }
  });
  return item;
};


export { findSelectedOrFirst };