


function allTanks (name , damage , health) {

    this.name = name ;
    this.damage = damage ;
    this.health = health ;

    this.getHealth = function () {

        return this.health ;
    }
    this.setHealth = function (health) {
        this.health = health ; 
    }

    this.getName = function () {

        return this.name ;
    }

    this.getDamage = function () {
       
        return this.damage ;
    }
}





