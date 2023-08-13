let arr=[1,2];
let sum=0;
for(i=3;i<35;i++){
  arr.push(arr[i-3]+arr[i-2]);
  let a=arr.length-3;
  let b= arr[a];
  if(b<=4000000 && b%2==0){
   sum+=b;
} 
}
console.log(sum);
