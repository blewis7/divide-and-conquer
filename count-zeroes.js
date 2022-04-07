function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let firstZero;
  while (rightIdx >= leftIdx){
    let middleIdx = Math.floor((rightIdx + leftIdx)/2);
    if (arr[middleIdx] === 1){
        leftIdx = middleIdx + 1;
    } else if (arr[middleIdx] === 0 && arr[middleIdx - 1] !== 1 && middleIdx !== 0){
        rightIdx = middleIdx;
    } else if (arr[middleIdx] === 0 && arr[middleIdx - 1] === 1 || middleIdx === 0){
        firstZero = middleIdx;
        return arr.length - firstZero;
    }
  }
  return 0;
}

module.exports = countZeroes