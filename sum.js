//3)Sum of all numbers in an array 
//anonymous  :       
                     var array=[1,2,3,4];
                    var sum = 0;
                    for(var i = 0 ; i< array.length ; i++){
                    sum = sum + array[i];
                    }
                    console.log( sum);
                
//IIFE :       
            (function(array){
             var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   console.log(sum);
             })([1,2,3,4]);
//Arrow:       
            let add = (array)=>{
             var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   console.log(sum);
                   }
                   add([1,2,3,4]);