


function myTank (name , damage , health) {
    allTanks.call(this, name, damage , health);
    var root  = document.getElementById("root");
    var health = document.createElement("div");
    root.appendChild(health);
    health.id = "heroHealth";
  
this.Health = function () {
    

    health.innerHTML = "Hero Health : " +  this.health   ;
    

    if (this.health < 0) {
        health.innerHTML = "You are Dead"
    }
  
}
   
    
   
}
myTank.prototype = new allTanks();



