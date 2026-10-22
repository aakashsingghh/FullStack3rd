var n = false;
if(n===""){
    console.log("This is true");
}

let arr = [1,2,3,4,5,6,7,8,9,11];
console.log(arr);

let nArr1 = arr.map( (n) => {return n**2;});
console.log(nArr1);


let prime = arr.filter( (n) => {
    for(let i=2; i<=n/2; i++){
        if(n%i==0){
            return false;
        }
    }
    return n>1;
});
console.log(prime);

let nArr2 = arr.find( n => n>6);
console.log(nArr2);

let nArr3 = arr.reduce( (sum, n) => sum +=n , 0);
console.log(nArr3);
