function insertionSort(arr) {
    
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];  
        let j = i - 1;     

        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }

    return arr;
}


let arr = [33, 9, 17, 23, 5];
console.log("Original array:", arr);
let sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);
