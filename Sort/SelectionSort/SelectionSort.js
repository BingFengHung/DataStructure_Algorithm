function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function SelectionSort(array) {
    let length = array.length;

    // 比較回合為陣列元素減一
    for (let i = 0; i < length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        if (min != i) {
            swap(array, i, min);
        }
    }

    return array;
}

console.log(SelectionSort([4, 1, 3, 2, 6, 7, 8]));