var menuId = document.getElementById("menu");

var a = document.createElement("a");
menuId.appendChild(a);
a.href = "file:///C:/Users/Dace/Desktop/game%20for%20project/folder1/index.html";
a.innerHTML = "Start";
a.id = "start";
var getA = document.getElementById("start");

var area = document.createElement("div");
menuId.appendChild(area);
area.id = "position";
var areaId = document.getElementById("position");

var enemy1 = document.createElement("div");
var enemy2 = document.createElement("div");
areaId.appendChild(enemy1);
areaId.appendChild(enemy2);
enemy1.id ="one";
enemy2.id = "two";

