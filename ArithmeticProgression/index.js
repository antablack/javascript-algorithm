const getIncrementers = (list) => {
    let result = [];
    for (var index in list) {
        index = parseInt(index);
        let current = list[index];
        let next = list[index + 1] ? list[index + 1] : 0;
        if (next != 0 && !result.includes(item => item.num == (next - current))) {
            result = updateList(result, next - current)
        }
    }
    return result.sort((a, b) => b.count - a.count).map(item => item.num);
}

function updateList(list, num){
    let update = list.find(item => item.num == num);
    if(!update){
        list.push({num, count: 1})
    } else {
        update.count += 1
    }
    return list;
}

const getSeries = (min, max, increment) => {
    let result = [];
    if(min > max){
        for (let i = min; i >= max; i += increment) {
            result.push(i);
        }
    } else {
        for (let i = min; i <= max; i += increment) {
            result.push(i);
        }
    }
    return result;
}
const getMin = (list) => list[0];
const getMax = (list) => list[list.length - 1];
const getDiferenceOfValues = (list1, list2) => list1.find(num1 => !list2.includes(num1))


/*var findMissing = function (list) {
    let incrementers = getIncrementers(list);
    let min = getMin(list);
    let max = getMax(list);
    let series = [];
    for (let index in incrementers) {
        let _serie = getSeries(min, max, incrementers[index]);
        if(getMax(_serie) == max){
            series = _serie;
            break;
        }
    }
    return getDiferenceOfValues(series, list);
}*/

var findMissing = function (list) {
    // calculate diference (lastnumber - firstnumber) / number of items
    var step = (list[list.length - 1] - list[0]) / (list.length);
    // calculate item by position (index * diference) + firstnumber 
    return list.find((val, index) => val !== ((index * step) + list[0])) - step;
  }

let text = getSeries(-11, -413363, -8);
console.log(text.splice(1000, 1))
console.log("field missing ->", findMissing(text))
