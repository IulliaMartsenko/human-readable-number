/**
 * Превращает цифры в читаемые строки
 * @param {number} n - число от 0 до 9
 * @param {boolean} isVisibleZero - вернет 'zero' или пустую строку
 * @returns string
 */
function digitToReadableStr(n, isVisibleZero = true) {
    switch (n) {
        case 0:
            return isVisibleZero ? 'zero' : "";
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
    }
}

/**
 * Превращает цифры в читаемые строки
 * @param {number} n - число от 10 до 19
 * @returns string
 */
function numbersFromTenToNineteenToReadableStr(n) {
    switch (n) {
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
    }
}

/**
 * Превращает десятки в читаемые строки
 * @param {number} n - десятки от 2 до 9
 * @returns string
 */
function tensToReadableStr(n) {
    switch (n) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
    }
}

function main(n) {
    if (n === 0) {
        return digitToReadableStr(n);
    }

    let result = "";
    let arr = ("" + n).split("").map(Number);

    if (arr.at(-2) < 2) {
        result += arr.at(-2) === 0
            ? digitToReadableStr(arr.at(-1), false)
            : numbersFromTenToNineteenToReadableStr(Number(String(arr.at(-2)) + String(arr.at(-1))));
    } else {
        const digit = digitToReadableStr(arr.at(-1), false);
        const tens = arr.at(-2) > 0 ? tensToReadableStr(arr.at(-2)) : "";
        result += (tens + " " + digit).trim();
    }
    if (arr.at(-3) >= 1) {
        result = (digitToReadableStr(arr.at(-3)) + " hundred " + result).trim();
    }
    return result;

    // 0 - 19 - 20-99;

    //  100- 999


}

console.log(main(800));

module.exports = main;

/*
* [1,2,3] one hundred twenty tree
* [1,1,9] one hundred nineteen
* [1,0,9] one hundred nine
* [1,2] twelve
* [2,3] twenty tree
* [3] tree
*
*
*
* x + 'hundred' + y + z - 123, 256, 869
*
* 1.19, 201, 15, 300, 210, 10, 3
*
*
*
*/
