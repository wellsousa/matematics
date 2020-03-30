
function ordermCrescente(arr){
    for(let i=0; i < arr.length; i++){
        if( (i + 1) < arr.length){
            if (arr[i] > arr[i + 1]){
                let temp = arr[i + 1]
                arr[i+ 1] = arr[i]
                arr[i] = temp
            }
        }
    }

    return arr
}