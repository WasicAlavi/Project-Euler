let sum = 0;

for (let i = 0; i<1000 ;i++) {
 if(i%3==0 || i%5==0)
 {sum+=i;
 }else if(i%15==0){
  sum-=i;
 }else{sum+=0}
 }
 console.log(sum);


