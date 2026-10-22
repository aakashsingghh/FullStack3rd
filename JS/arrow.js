let arm = 123;
let str = arm.toString();
let arr = str.split('');
let sum1 = 0;
let len = arr.length;
for(let i=0; i<len; i++){
    sum1 += Number(arr[i]) ** len;
}
if(sum1 == arm){
    console.log("armstorng");
}
else{
    console.log("not armstrong")
}


const sum = ((a,b) => a+b );
console.log(sum(5, 15)); 

const product = ((a,b) => a*b );
console.log(product(8, 12));

const sq = ((a) => a*a );
console.log(sq(5));

