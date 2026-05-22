//Multiplication Table  Write a function that takes a number and prints its multiplication table from 1 to 10. table(3) → 3x1=3, 3x2=6 ...//
const n=5
function table(n){
    for(let i=1;i<=10;i++){
        console.log(n*i);
        
    }
}
table(n)