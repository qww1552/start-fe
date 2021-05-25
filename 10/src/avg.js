function avg() {
  let total = 0;
  let len = 0;

  for (let i of arguments) {
    const number = Number.parseInt(i);
    if (Number.isInteger(number)) {
      total += number;
      len++;
    }
  }

  return total / len;
}

export default avg;
