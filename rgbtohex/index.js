const sanatize = num => {
    if (num > 255) {
        return 255
    } else if (num < 0) {
        return 0
    }
    return num
};
const getHex = num => {
    if (num < 10) return String(num);
    let hex = { "10": "A", "11": "B", "12": "C", "13": "D", "14": "E", "15": "F" }
    return hex[String(num)]
}
const decToHex = num => {
    if (typeof num == "string") return num;
    let continue_loop = true;
    let result = [];
    let acumulate = num;
    while (continue_loop) {
        let operation = parse(acumulate);
        acumulate = operation.int;
        result.push(getHex(operation.ramining))
        if (acumulate == 0) continue_loop = false;
    }
    if (result.length == 1) {
        result.unshift(0);
    }
    result = result.reverse().join("");
    return result;
}
const parse = num => {
    num = num / 16;
    return { int: parseInt(num), ramining: (num - parseInt(num)) * 16 }
}
function rgb(r, g, b) {
    let _rgb = [sanatize(r), sanatize(g), sanatize(b)];
    var hex = _rgb.reduce((counter, num) => {
        return decToHex(counter) + decToHex(num)
    })
    console.log(hex)
    return hex
}
rgb(0, 0, -20);