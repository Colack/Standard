/*
  Completed By Colack (8/16/22)
*/

// Print a Main Diagonal
function printDiagonal(dia, n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i == j) {
        console.log(dia[i][j] + ",");
      }
    }
  }
}

// Print a Secondary Diagonal
function printSecondaryDiagonal(dia, n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if ((i + j) == (n - 1)) {
        console.log(dia[i][j] + ",");
      }
    }
  }
}
