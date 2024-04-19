function insertionSort(arr) {
    const n = arr.length;

    // Traverse through the array
    for (let i = 1; i < n; i++) {
        // Store the current element to be compared
        let current = arr[i];

        // Start from the end of the sorted portion
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into the correct position
        arr[j + 1] = current;
    }

    return arr;
}

// Example usage:
const array = [5, 3, 8, 4, 2, 7, 1];
console.log("Original array:", array);
console.log("Sorted array:", insertionSort(array));
