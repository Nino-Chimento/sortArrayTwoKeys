const sortArrayObjs = (arr, prop1, prop2) => {
  let sort1 = [...arr].sort((a, b) => {
    if (a[prop1] == b[prop1]) {
      if (a[prop2] == b[prop2]) return 0;
      return a[prop1] < b[prop1] ? -1 : 1;
    } else {
      return a[prop1] < b[prop1] ? -1 : 1;
    }
  });
  return sort1;
};
