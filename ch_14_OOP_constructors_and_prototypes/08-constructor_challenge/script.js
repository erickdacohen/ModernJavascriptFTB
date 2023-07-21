/*
Create a constructor to create a Player object with 
a name, level set to 1, and points set to 0
*/

function Player(name) {
	this.name = name
	this.lvl = 1
	this.points = 0
}
/**
 * Create a method on the prototype called gainXp that takes in a number
 * from one to 10 and add it to the player's points. if points are >=10
 * then add 1 to lvl and points -10
 */

Player.prototype.gainXp = function (p) {
	this.points += p
	if (this.points >= 10) {
		this.points -= 10
		this.lvl++
	}
}

/**
 * Create another prototype called describe that displays the player's stats
 */

Player.prototype.describe = function () {
	console.log(`${this.name} is level ${this.lvl} with ${this.points} points`)
}

let player1 = new Player('Bob')
console.log(player1)

player1.gainXp(4)
player1.gainXp(9)
player1.gainXp(4)
player1.describe()
