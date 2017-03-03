/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var output = document.getElementById("output");


   function formatString(quoObject){
    
       output.innerHTML =  quoObject;
       
    
   };
   
   
   var getTime = function(){
   
   var url = "http://localhost:8084/ex4AjaxCalls/TimeServlet";
   var conf = {method: 'get'};
   var promise = fetch(url,conf);
   
   promise.then(function(respone){
       
       return respone.text();
       
  
       
   }).then(function(text){

   var quoteObj = JSON.parse(text);

    formatString(quoteObj);

   
       
   });
   

   };

  
  setInterval(getTime,1000 ); 
   
//   
//       out.println(d.getHours());
//    out.println(d.getMinutes());
//     out.println(d.getSeconds());