const pi = 3.14;

function calculation(a, b) {
  const factor = 5;
  const result = (a + b) * factor * pi;
  const total = doubleIt(result);
  const value = addtwo(total);
  function addtwo(a) {
    return a + 2;
  }
  return value;
}

function doubleIt(x) {
  const result = x * 2;
  return result;

  //   const addition = num + pi;
}
