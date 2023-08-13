let sum;
let sum1;
let sum2;

for(let i=0; i<101;i++){
  sum1+=i**2;
}

for(let i=0; i<101;i++){
  sum+=i;
  sum2=sum**2;
}

console.log(sum2 - sum1);