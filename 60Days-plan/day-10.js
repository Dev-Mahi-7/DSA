function invertParamid(rows) {
  for (let i = rows; i >= 1; i--) {
    let rowStr = "";
    for (let j = 1; j <= i; j++) {
      rowStr += "* ";
    }
    console.log(rowStr);
  }
}

invertParamid(5);
