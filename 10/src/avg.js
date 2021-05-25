function avg(...args) {
    let total = 0;
    let len = 0;
    let numbers;
    if (Array.isArray(args[0])) {
        numbers = args[0];
    } else {
        numbers = args;
    }
    for (let i of numbers) {
        const number = Number.parseInt(i);
        if (Number.isInteger(number)) {
            total += number;
            len++;
        }
    }
    return total / len;
}
export default avg;
