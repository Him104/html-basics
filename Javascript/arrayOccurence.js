const arr = [1, 1, 1, 2, 3, 2, 3, 4, 5, 6, 67, 5, 6, 7, 8];

const occurences = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;

  return acc;
}, {});

console.log(occurences);
