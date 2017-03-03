/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




var obsever = document.getElementById("svg2");
var output = document.getElementById("output");

obsever.addEventListener("click",colorf);






function getInfo(code){
 
    
    
      var url = "https://restcountries.eu/rest/v1/alpha?codes="+code;
   var conf = {method: 'get'};
   var promise = fetch(url,conf);
   
   promise.then(function(respone){
       
       return respone.text();
       
  
       
   }).then(function(text){

   var quoteObj = JSON.parse(text);

 
   
   seOutPut(quoteObj[0]);
   console.log(quoteObj[0]);


   });
   


}

function seOutPut(counObj){
    var str = " | Name: "+counObj.name + " | Nativename: "+ counObj.nativeName + " | Capital: "+counObj.capital+ " \n\
| Subregion: "+counObj.subregion;
 
    output.innerHTML = str;
    
}



function colorf(evt){
    
  var t = evt.target;
      getInfo(t.id);

($('#path' + t.id).css({ fill: "#ff0000" }));  


 
 

}


