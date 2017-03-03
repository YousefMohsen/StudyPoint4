/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// a)

var boys = ["Peter", "lars","Ole"];
var girls = ["Janne", "Hanne","Sanne"];


//b)
var all = boys.concat(girls);//merges to arrays to one

//all.forEach(function(name){
//    console.log(name);
//});

//c)
var arrayToStringCommas = all.join(",");//reduce the array to a single string
var arrayToStringHyphens = all.join(" - ");

 //console.log(arrayToStringCommas);
 // console.log(arrayToStringHyphens);
  
  //d)
  all.push("Lone","Gitte");//adds elements to the end of the array
  //e)
  all.unshift("Hans","Kurt");//adds elements to the start of the array
 

//f)
all.shift();//removes item from the start of the array

//g)
all.pop(); //removes item from the end of the array

//h
all.splice(4,2);//removes the first 2 items after index 4

//i)

all.reverse(); //reverese 

//j)
all.sort(); //sort the array 


//Array methods with callbacks
//l)

var upperCaseArray = all.map(function(name){
    
   return name.toUpperCase(); 
});



 
 
 //m)
 
 var filteredArray = all.filter(function(name){
     
     return name[0] === "L" ||  name[0] === "l";
 });
 
 var test = filteredArray.join(" - ");

 console.log(test);