// let array = [ 1,2,3,4,5,6,7,8 ]
// function even( arrayParam ) {
//     if( arrayParam % 2 === 0 ){
//         return true;
//     }else{
//         return false;
//     }
// }
// even(7)
// even(8)
// even(5)
// even(3)






function prime(num){
   if(num<=1){
       console.log("is not a prime number");
   }else if(num<=3){
       console.log("is a prime number");
   }else if(num%3===0){
       console.log("is not a prime number");
   }else if(num%2===0){
       console.log("is not a prime number");
   }else if(num%5===0){
       console.log("is not a prime number");
   } else{
       console.log("is a prime number");
   }
}

prime(61)



function power(num1){
let result =0
   for(let i = 0; i<=num1;i++){
   
      result+=i
   if(2**result===num1){
          console.log("is a power of 2");
       }else{
           console.log("is not a power of two");
    }
   }
       
}

power(8)



// is power of true