/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var output = document.getElementById("output");
var output2 = document.getElementById("output2");



   
   

   
   function formatString(quoObject){
      
       output.innerHTML =  "\""+quoObject.quote+"\"" ;
       
       output2.innerHTML = "\n -"+quoObject.source;
   };
   
   var newQuote = function(){
   
   var url = "http://localhost:8084/ex4AjaxCalls/NewServlet";
   var conf = {method: 'get'};
   var promise = fetch(url,conf);
   
   promise.then(function(respone){
       
       return respone.text();
       
  
       
   }).then(function(text){
         var quoteObj = JSON.parse(text);
formatString(quoteObj);
   
       
   });
   };
   

newQuote();
setInterval(newQuote,3600000 );  
   
var btn = document.getElementById("btn");
   btn.addEventListener("click", newQuote);
   
