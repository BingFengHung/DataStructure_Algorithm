function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function BubbleSort(array) {
    let length = array.length;

    // 比較回合數
    for(let i = 0; i < length - 1; i++) {
        // 每回合兩兩元素進行比較幾次
        for(let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j+1);
            }
        }
    }

    return array;
}

console.log(BubbleSort([3, 1, 4, 5, 6, 2, 11, 8]))