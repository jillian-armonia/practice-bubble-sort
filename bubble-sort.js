
function bubbleSort(arr) {
  let swapped = false;
    // Iterate through the array
    for (let i = 0; i < arr.length; i++){
      let current = arr[i];
      let next = arr[i + 1]

      if (current > next){
        arr[i] = next;
        arr[i + 1] = current;
        // If the current value is greater than its neighbor to the right

        // Swap those values

        // Do not move this console.log
        console.log(arr.join(","));
        swapped = true;
      }
    }


    // If you get to the end of the array and no swaps have occurred, return
    if (!swapped) return;
    // Otherwise, repeat from the beginning

    swapped = false;
    bubbleSort(arr);
}

module.exports = bubbleSort;
