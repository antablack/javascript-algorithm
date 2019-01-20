let romanNumber = { "0": 0, "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }
const splitArray = roman => roman.toUpperCase().split("");

function solution(roman) {
    roman = splitArray(roman);
    let number = 0;
    for (let index in roman) {
        index = parseInt(index);
        let next = roman[index + 1] ? roman[index + 1] : "0";
        let current = roman[index];
        let previous = roman[index - 1] ? roman[index - 1] : "0";
        if ((romanNumber[previous] < romanNumber[current]) && index > 0) continue;
        if (romanNumber[current] < romanNumber[next]) {
            number += romanNumber[next] - romanNumber[current]
        } else {
            number += romanNumber[current]
        }
    }
    return number;
}

console.log(solution("XXIV"));