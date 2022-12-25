function swapValues(x,y){
    let temp = x;
    x = y;
    y = temp;
    return [x,y];
}

console.log(swapValues(1,5));