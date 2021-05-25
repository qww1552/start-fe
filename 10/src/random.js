function random(...args) {
    let min;
    let max;
    // 변수에 문자가 있으면 -1
    for (const i of args) {
        const number = parseInt(i);
        if (!Number.isInteger(number)) {
            return -1;
        }
    }

    if (args.length === 1) {
        min = 0;
        max = Math.floor(args[0]);
    } else if (args.length === 2) {
        min = Math.ceil(args[0]);
        max = Math.floor(args[1]);
    }
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

export default random;
