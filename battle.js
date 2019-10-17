function Battle() {

  this.maintank = new myTank("Main Tank", getRandomNumber(150, 250), 2000);

  this.armyoftank = [];
  var rootId = document.getElementById("root");
  this.coins = 0;

  var coins = document.createElement("div");
  coins.id = "coins";
  rootId.appendChild(coins);
  coins.innerHTML = "Coins:  " + this.coins;
  var main = this.maintank;
  var rootId = document.getElementById("root");
  main = document.createElement("div");
  main.id = ("hero");
  var image = document.createElement("img");
  main.appendChild(image);
  image.src = "image/tank1.jpg";
  image.id = "tank1";
  rootId.appendChild(main);
  imagetank1 = document.getElementById("tank1");

  var winner = document.createElement("div");
  rootId.appendChild(winner);
  winner.id = "win";
  // var button = document.createElement("button");
  // rootId.appendChild(button);
  // button.id = "button";
  // button.innerHTML = "restart";


  var heroj = document.getElementById("hero");
  this.populateArmy = function () {

    for (var i = 0; i < 3; i++) {
      var army = new armyOfTanks("tenkovi", getRandomNumber(150, 220), 2200);
      this.armyoftank.push(army);
 }

  }

  this.createDivs = function () {
    var createenemy = this.armyoftank.length;
    for (var i = 0; i < this.armyoftank.length; i++) {
      if (this.isArmyStillAlive)
        createenemy = document.createElement("div");
      createenemy.id = ("enemy" + i);
      rootId.appendChild(createenemy);
      var imageenemy = document.createElement("img");
      createenemy.appendChild(imageenemy);
      imageenemy.src = "image/tank1.jpg";
      imageenemy.id = ("image" + i);

    }

    var enemy0 = document.getElementById("enemy0");
    var enemy1 = document.getElementById("enemy1");
    var enemy2 = document.getElementById("enemy2");

    this.movingEnemies(enemy0, enemy1, enemy2);

  }

  var LEFT_KEY = 37;
  var UP_KEY = 38;
  var RIGHT_KEY = 39;
  var DOWN_KEY = 40;
  var SPACE_KEY = 32;

  heroj.X = 400;
  heroj.Y = 430;
  heroj.w = 50;
  heroj.h = 50;


  var HERO_MOVEMENT = 5;
  var laserShoot = 10;
  var enemySpeed = 3;
  var enemySpeed1 = 3;
  var enemySpeed2 = 3;


  this.setPosition = function () {
    heroj.style.left = heroj.X + "px";
    heroj.style.top = heroj.Y + "px";
  };



  this.keyPress = function (keyCode) {


    if (heroj.X + heroj.w >= 880) {
      heroj.X = 880 - heroj.w;

    }
    if (heroj.Y >= 440) {
      heroj.Y = 440;

    }
    if (heroj.Y <= 4) {
      heroj.Y = 4;
    }
    if (heroj.X <= 4) {
      heroj.X = 4;
    }

    if (keyCode == LEFT_KEY) {
      heroj.X -= HERO_MOVEMENT;
      heroj.style.left = heroj.X + "px";
    }
    if (keyCode == RIGHT_KEY) {
      heroj.X += HERO_MOVEMENT;
      heroj.style.left = heroj.X + "px";
    }
    if (keyCode == DOWN_KEY) {
      heroj.Y += HERO_MOVEMENT;
      heroj.style.top = heroj.Y + "px";
    }
    if (keyCode == UP_KEY) {

      heroj.Y -= HERO_MOVEMENT;
      heroj.style.top = heroj.Y + "px";

    }
    if (keyCode == SPACE_KEY) {

      this.controlPosition();

    }

  }





  this.controlPosition = function () {

    var laserDiv = document.createElement("div");
    laserDiv.id = "tankLaser";

    rootId.appendChild(laserDiv);

    laserDiv.Y = heroj.Y - 40;
    laserDiv.X = heroj.X + 25;

    var a = setInterval(() => {
    
      if (laserDiv.Y < 0) {
        laserDiv.remove();
        clearInterval(a);


      };

      if (laserDiv.Y < enemy0.y + 40 && laserDiv.Y + 40 > enemy0.y && laserDiv.X > enemy0.x && laserDiv.X < enemy0.x + 50) {
        this.armyoftank[0].setHealth(this.armyoftank[0].getHealth() - this.maintank.getDamage());

        clearInterval(a);
        laserDiv.remove();
        this.coins += 100;
        coins.innerHTML ="Coins:  "+  this.coins;
        console.log(this.coins);
      
      } if (laserDiv.Y < enemy1.y + 40 && laserDiv.Y > enemy1.y && laserDiv.X > enemy1.x && laserDiv.X < enemy1.x + 50) {
        this.armyoftank[1].setHealth(this.armyoftank[1].getHealth() - this.maintank.getDamage());

        laserDiv.remove();
        clearInterval(a);
        this.coins += 100;
        coins.innerHTML ="Coins:  " +  this.coins;
       console.log(this.coins);


      } if (laserDiv.Y < enemy2.y + 40 && laserDiv.Y + 40 > enemy2.y && laserDiv.X > enemy2.x && laserDiv.X < enemy2.x + 50) {
        this.armyoftank[2].setHealth(this.armyoftank[2].getHealth() - this.maintank.getDamage());
        clearInterval(a);
        laserDiv.remove();
        console.log(this.armyoftank[2].getHealth())
        this.coins += 100;
        coins.innerHTML ="Coins:  " +  this.coins;
        console.log(this.coins);
      };

      laserDiv.style.left = laserDiv.X + "px";
      laserDiv.style.top = laserDiv.Y + "px";
      laserDiv.Y -= laserShoot;

      this.isMainTankStillAlive();

     }, 15);

  }

  this.movingEnemies = function (enemy0, enemy1, enemy2) {
    enemy0.x = 10;
    enemy1.x = 400;
    enemy2.x = 800;
    enemy0.y = 20;
    enemy1.y = 20;
    enemy2.y = 20;

  }

  setInterval(function () {
    if (enemy0.x > 250) {
      enemySpeed = -3
    }
    if (enemy0.x < 10) {
      enemySpeed = + 3;
    }
    enemy0.style.left = enemy0.x + "px";

    enemy0.x += enemySpeed;

  }, 20);


  setInterval(function () {
    if (enemy1.x > 550) {
      enemySpeed1 = -3;

    }
    if (enemy1.x < 400) {
      enemySpeed1 = + 3;
    };

    enemy1.x += enemySpeed1;
    enemy1.style.left = enemy1.x + "px";
    enemy1.x += enemySpeed1;

  }, 30);


  setInterval(function () {
    if (enemy2.x > 840) {
      enemySpeed2 = -3;

    }
    if (enemy2.x < 660) {
      enemySpeed2 = + 3;
    }

    enemy2.x += enemySpeed2;

    enemy2.style.left = enemy2.x + "px";

    enemy2.x += enemySpeed2;

  }, 50);


  this.createEnemyLaser = () => {


    var enemyLaser0 = document.createElement("div");
    enemyLaser0.id = "laser0";
    rootId.appendChild(enemyLaser0);

    var enemyLaser1 = document.createElement("div");
    enemyLaser1.id = "laser1";

    var enemyLaser2 = document.createElement("div");
    enemyLaser2.id = "laser2";

    rootId.appendChild(enemyLaser1);
    rootId.appendChild(enemyLaser2);

    enemyLaser0.Y = enemy0.y + 40;
    enemyLaser0.X = enemy0.x + 15;
    enemyLaser0.style.left = enemyLaser0.X + "px";
    enemyLaser0.style.top = enemyLaser0.Y + "px";

    enemyLaser1.Y = enemy1.y + 40;
    enemyLaser1.X = enemy1.x + 15;
    enemyLaser1.style.left = enemyLaser1.X + "px";
    enemyLaser1.style.top = enemyLaser1.Y + "px"; 

    enemyLaser2.Y = enemy2.y + 40;
    enemyLaser2.X = enemy2.x + 15;
    enemyLaser2.style.left = enemyLaser2.X + "px";
    enemyLaser2.style.top = enemyLaser2.Y + "px";

    var b = setInterval(() => {

      if (this.army0()) {
        enemyLaser0.remove();
        clearInterval(b);
       } 

      if (enemyLaser0.Y > 450) {
        enemyLaser0.remove();

        clearInterval(b);
      }            
      if (enemyLaser0.Y > heroj.Y - 50 && enemyLaser0.Y + 40 < heroj.Y + 50 && enemyLaser0.X > heroj.X && enemyLaser0.X < heroj.X + 50) {
        this.maintank.setHealth(this.maintank.getHealth() - this.armyoftank[0].getDamage());
        clearInterval(b);

        enemyLaser0.remove();
        console.log(this.maintank.getHealth() + "   nula tank")

      }

      enemyLaser0.Y += 10;
      enemyLaser0.style.top = enemyLaser0.Y + "px";

      }, 30);


    var c = setInterval(() => {

        if(this.army1()){
          clearInterval(c);
          enemyLaser1.remove();
        }
      if (enemyLaser1.Y > 450) {
        clearInterval(c);
        enemyLaser1.remove();


      }               
      if (enemyLaser1.Y > heroj.Y - 50 && enemyLaser1.Y + 40 < heroj.Y + 50 && enemyLaser1.X > heroj.X && enemyLaser1.X < heroj.X + 50) {

        this.maintank.setHealth(this.maintank.getHealth() - this.armyoftank[1].getDamage());
        clearInterval(c);

        enemyLaser1.remove();
        console.log(this.maintank.getHealth() + "  prv tank")
      }

      enemyLaser1.Y += 10;
      enemyLaser1.style.top = enemyLaser1.Y + "px";


    }, 30);


    var d = setInterval(() => {
       
      if (this.army2()) {
        enemyLaser2.remove();
        clearInterval(d);
      }
      if (enemyLaser2.Y > 450) {
        enemyLaser2.remove();

        clearInterval(d);
      }
      if (enemyLaser2.Y > heroj.Y - 50 && enemyLaser2.Y + 40 < heroj.Y + 50 && enemyLaser2.X > heroj.X && enemyLaser2.X < heroj.X + 50) {
        this.maintank.setHealth(this.maintank.getHealth() - this.armyoftank[2].getDamage());
        clearInterval(d);

        enemyLaser2.remove();
      }

      enemyLaser2.Y += 10;
      enemyLaser2.style.top = enemyLaser2.Y + "px";
      this.maintank.Health();
      this.isMainTankStillAlive();
      this.printTheWinner();

    }, 30);

    if (this.army0()) {
      enemyLaser0.style.display = "none";
      enemyLaser0.remove();
    }
    if (this.army1()) {
      enemyLaser1.style.display = "none";
      enemyLaser1.remove();
    }
    if (this.army2()) {
      enemyLaser2.style.display = "none";
      enemyLaser2.remove();
    }

    setTimeout(this.createEnemyLaser, 1000);
    this.isArmyStillAlive();

  }

    window.addEventListener("keydown", event => {
    this.keyPress(event.keyCode);
  });

   this.Loop = function () {

    this.createEnemyLaser();
 };

  this.isArmyStillAlive = function () {

    for (var i = 0; i < this.armyoftank.length; i++) {
      this.armyoftank[i].EnemyHealth();
      if (this.armyoftank[0].getHealth() < 0) {

        enemy0.style.display = "none";

      } if (this.armyoftank[1].getHealth() < 0) {
        enemy1.style.display = "none";

      } if (this.armyoftank[2].getHealth() < 0) {

        enemy2.style.display = "none";
      }
    }
  }

  this.isMainTankStillAlive = () => {

    if (this.maintank.getHealth() < 0) {
      heroj.style.display = "none";
      heroj.remove();

      return true;
    }
    return false
  }
  this.checkAmry = function () {

    for (var i = 0; i < this.armyoftank.length; i++) {
      if (this.armyoftank[i].getHealth() > 0) {
        return true;
      }

    }
    return false;
  }


  this.army0 = function () {
    if (this.armyoftank[0].getHealth() > 0) {
      return false;
    }
     
    
    return true;
  }
  this.army1 = function () {
    if (this.armyoftank[1].getHealth() > 0) {
      return false;
    }
    return true;
  }
  this.army2 = function () {
    if (this.armyoftank[2].getHealth() > 0) {
      return false;
    }
    return true;
  }

  this.printTheWinner = () => {
    var army = this.checkAmry();

    if (!army) {
      winner.style.display = "block";
      winner.innerHTML = "you win";
      // button.style.display = "block";

    } if (this.isMainTankStillAlive()) {
      winner.style.display = "block";
      winner.innerHTML = "you lose";
      // button.style.display = "block";
    }
  }


  repair = document.createElement("img");
  rootId.appendChild(repair);
  repair.src = "image/repair.png";
  repair.id = "repair";
  var message = document.createElement("div");
  rootId.appendChild(message);
  message.id = "message"

  repair.addEventListener("click" ,  () => {
     
             var price = 1000;
      if (this.coins < price) {
        message.innerHTML = "Not enought Coins"
      
       
      
      } else {
   this.maintank.setHealth(this.maintank.getHealth() + 800);
   this.coins -= 1000;
  coins.innerHTML=  this.coins ;
  message.innerHTML = "Repair on the way "
      }
  })



};
