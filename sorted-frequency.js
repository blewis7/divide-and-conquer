function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx === -1) return firstIdx;
    let lastIdx = findLast(arr, num);
    return lastIdx - firstIdx + 1;
}

function findFirst(arr, num){
    let low = 0;
    let high = arr.length -1;
    while (high >= low){
        let mid = Math.floor((high + low)/2);
        let midVal = arr[mid];
        if (midVal > num){
            high = mid - 1;
        } else if (midVal < num){
            low = mid + 1;
        } else if (midVal === num && arr[mid - 1] === num){
            high = mid;
        } else if (midVal === num && arr[mid - 1] !== num || mid === 0){
            return mid;
        }
    }
    return -1;
}

function findLast(arr, num){
    let low = 0;
    let high = arr.length -1;
    while (high >= low){
        let mid = Math.floor((high + low)/2);
        let midVal = arr[mid];
        if (midVal > num){
            high = mid - 1;
        } else if (midVal < num){
            low = mid + 1;
        } else if (midVal === num && arr[mid + 1] === num){
            low = mid;
        } else if (midVal === num && arr[mid + 1] !== num || mid === arr.length - 1){
            return mid;
        }
    }
    return -1;
}


module.exports = sortedFrequency