function getRandomValue(intial,final){
    const res =  Math.floor(Math.random()*(intial-final))
    return res;
}
console.log(getRandomValue(30,100));