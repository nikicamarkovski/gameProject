
function armyOfTanks (name , damage , health) {
  
    allTanks.call(this , name , damage , health);


var root = document.getElementById("root");
  var enemyHealth = document.createElement("p");
  root.appendChild(enemyHealth);

 
   enemyHealth.id = "enemyHealth";

 
  this.EnemyHealth = function () {

   
    enemyHealth.innerHTML = "enemy Health: " + this.health;
    if (this.health < 0 ) {
      enemyHealth.innerHTML = "Enemy Is Dead";
    }
 
  }
 

}

armyOfTanks.prototype = new allTanks();
