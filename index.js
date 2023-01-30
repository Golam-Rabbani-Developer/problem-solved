// write a function to rotate a number with an input rotating times 

function rotateArray(array, number) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        arr.push(array[i]);
    };
    for (var j = 1; j <= number; j++) {
        arr.shift(arr.push(arr[0]));
    }
    console.log(arr);
}

const numbers = [1, 2, 3, 4, 5]

rotateArray(numbers, 2);