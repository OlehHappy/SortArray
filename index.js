var x = [1, 5, 3, 6, 7, 4, 6, 3, 8, 4, 1, 7];

// Search numers which has doubles
function searchDoubles(arr) {
  for(i = 0; i < x.length; i++) {
    console.log("x[" + i + "] = " + x[i]);
    for(j = i; j >= 0; j--) {
      if (x[i] = x[j]) {
        console.log(x[i] + " has double");
        break;
      };
    };
  };
};
searchDoubles(x);
