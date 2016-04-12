'use strict';

// Character Class definition
class Character {
  constructor(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }
}
// Attack Character Function
Character.prototype.attackCharacter = function(defender) {
  var baseDmg = this.attack - defender.defense;
  var randomDmg = floor(Math.Random()*6);
  var totalDmg = randomDmg + baseDmg;
  defender.health = defender.health - totalDmg;
  console.log(this.name + " does " + totalDmg + " damage to " + defender.name);
}

// Main Fight Logic
var player = new Character('Edward Norton', 100, 25, 20);
var enemy  = new Character('Tyler Durden', 100, 25, 20);
var round  = 1;

while (player.health && enemy.health) {
  runRound(round, player, enemy);
  round++;
  console.log('');
}

//runRound Process to display health and check for end game
function runRound(round, p1, p2) {
  console.log("----- Round " + round + " -----");
  p1.attackCharacter(p2);
  if(p2.health<=0){
    console.log(p1.name + " health: " + p1.health);
    console.log(p2.name + " health: " + p2.health);
    function endGame(p1, p2);
  }
  p2.attackCharacter(p1);
  if(p1.health<=0){
    console.log(p1.name + " health: " + p1.health);
    console.log(p2.name + " health: " + p2.health);
    function endGame(p2, p1);
  }
  console.log(p1.name + " health: " + p1.health);
  console.log(p2.name + " health: " + p2.health);
}

function endGame(winner, loser) {
  console.log('\n======== GAME OVER ========');
  console.log(winner.name + " wins against " + loser.name + " with " + winner.health + " health remaining!");
  process.exit();
}
