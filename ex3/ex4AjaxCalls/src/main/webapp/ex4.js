/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var obsever = document.getElementById("observer");

obsever.addEventListener("click",colorf);






function colorf(evt){
  var dir = evt.target;
  
  var result = " -- ";
  switch(dir.id){
  
            case "rect2861":
            case "path2865":
            result = "East";
            break;
            
            case "path2873":
            case "rect2869":
            result = "West";
            break;
            
             case "path2845":
             case "rect2841":
            result = "South";
            break;
            
             case "rect2816":
           case "path2822":
            result = "North";
            break;
      
      
  }

  
 document.getElementById("txt").innerHTML = result; 
 
 

}