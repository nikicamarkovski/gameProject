function Main () {

    var battle = new Battle();
    battle.populateArmy();
    battle.createDivs()
    battle.setPosition();
    battle.Loop();
   console.log (battle);

}


Main();









// var LEFT_KEY = 37;
// var UP_KEY = 38;
// var RIGHT_KEY = 39;
// var DOWN_KEY = 40;
// var HERO_MOVEMENT = 3;

// var lastLoopRun = 0;

// var hero = new Object();
// hero.element = 'hero';
// hero.x = 250;
// hero.y = 460;

// var controller = new Object();

// function toggleKey(keyCode, isPressed) {
//   if (keyCode == LEFT_KEY) {
//     controller.left = isPressed;
//   }
//   if (keyCode == RIGHT_KEY) {
//     controller.right = isPressed;
//   }
//   if (keyCode == UP_KEY) {
//     controller.up = isPressed;
//   }
//   if (keyCode == DOWN_KEY) {
//     controller.down = isPressed;
//   }
// }

// function setPosition(sprite) {
//   var e = document.getElementById(sprite.element);
//   e.style.left = sprite.x + 'px';
//   e.style.top = sprite.y + 'px';
// }

// function handleControls() {
//   if (controller.up) {
//     hero.y -= HERO_MOVEMENT;
//     console.log (controller.up);
//   }
//   if (controller.down) {
//     hero.y += HERO_MOVEMENT;
//     console.log (controller.down);
//   }    
//   if (controller.left) {
//     hero.x -= HERO_MOVEMENT;
//   }
//   if (controller.right) {
//     hero.x += HERO_MOVEMENT;
//   }
// }

// function showSprites() {
//   setPosition(hero);
// }

// function loop() {
//  
//    
//   }
//   setTimeout('loop();', 2);
// }

// window.addEventListener( "keydown",  function(evt) {
//   toggleKey(evt.keyCode, true);
// });
// window.addEventListener( "keyup",  function(evt) {
//   toggleKey(evt.keyCode, false);
// });
// console.log(controller)
// loop();