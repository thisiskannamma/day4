//.Remove duplicates from an Array
//Anonymous Function : 
                        let a=[1,2,3,4]
                        let dup = [...a];
                        dup[3]=50
                        console.log(dup);
                      
//IIFE :                
                        (function(array){
                        let dup = [...array];
                        dup[2]=80;
                        console.log(dup);
                       })([1,1,2,3,4])
                       
