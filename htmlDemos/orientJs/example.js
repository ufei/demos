function findAllOccurrences(arr, target) {
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]==target){
            result.push(i);
        }
    }
    return result;
}

console.log(findAllOccurrences('abcdefabc'.split(''), 'a').sort());