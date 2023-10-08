//2)Convert all the strings to title caps in a string array
   
 //anonymous :   
                    let str="TIME IS PRECIOUS"
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    console.log(str.join(' '));
                
//IIFE :              
                    (function (str) {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    console.log(str.join(' '));
                  })("ELIZA IS MY NAME");
 //Arrow Function :
                     let titleCase = (str) => {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    console.log(str.join(' '));
                  }  
                  titleCase("HARD WORK NEVER FAILS")
