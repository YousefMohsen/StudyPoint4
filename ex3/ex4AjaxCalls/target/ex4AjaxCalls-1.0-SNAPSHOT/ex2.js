/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var output = document.getElementById("output");

var nbtn =  document.getElementById("nbtn");
var btn =  document.getElementById("btn");




   
   function formatString(quoObject){
    
       output.innerHTML =  quoObject.name+" "+quoObject.lname +" - age: "+quoObject.age;
       
    
   };
   
   
   var getNewPerson = function(){
   
   var url = "http://localhost:8084/ex4AjaxCalls/PersonServlet";
   var conf = {method: 'get'};
   var promise = fetch(url,conf);
   
   promise.then(function(respone){
       
       return respone.text();
       
  
       
   }).then(function(text){
         var quoteObj = JSON.parse(text);
formatString(quoteObj);
   
       
   });
   };
   
   
var addNewPerson = function(){
    var name = document.getElementById("newName").value;
var laName = document.getElementById("newLastName").value;
var age = parseInt(document.getElementById("newAge").value);

  alert(name+" "+laName+" "+age);
    var newObj = {"name":name,"lname":laName,"age":age};  
   
   var url = "http://localhost:8084/ex4AjaxCalls/PersonServlet";
   var conf = {method: 'post',body: newObj};
fetch(url,conf).then(function(res){
      
      return res.json();
  }).then(function(data){
      alert(JSON.stringify(data));
  });

   };
   
getNewPerson(); 
nbtn.addEventListener("click",getNewPerson);
btn.addEventListener("click",addNewPerson);