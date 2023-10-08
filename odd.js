//1)Print odd numbers in an array
//anonymous  :  
                    let array=[1,2,3,4];
                  for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                     };
//IIFE :       
                (function(array){
             for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
             })([1,2,3,4]);
             
//Arrow Function    
               let oddNumbers = (array) => {
               for(var i = 0 ; i< array.length ; i++){
                  if(array[i]%2!=0){
                     console.log(array[i])
                  } 
               }
            };
            oddNumbers([1,2,3,4]);
                                    