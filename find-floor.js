function findFloor(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end){
      let mid = Math.floor((start + end)/2);
      if (val >= arr[end]){
        return arr[end];
      }
      if (arr[mid] === val) return val;
      if (mid > 0 && val < arr[mid] && val >= arr[mid - 1]){
          return arr[mid - 1];
      } else if (arr[mid] < val){
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }
  return -1;
}

module.exports = findFloor