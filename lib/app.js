#!/usr/bin/env node

'use strict';

var game = require('./game');

var components = require('./components')

var readline = require('readline');

var map = require('./map.js')

var rl = readline.createInterface({
  input: process.stdin,                  //prompt variables
  output: process.stdout
});

//find room name

/*var roomName = function(next_direction, name_current_room) {
		//for (i = 0; i < game.rooms.length; i ++);
		//	if (game.rooms[i].north === name_current_room) {
		for (var key in game.rooms) {
			//if (game.rooms[key] === name_current_room) {
			//	console.log(game.rooms[key].name);
			//}
			if (game.rooms[key].name === name_current_room){
				console.log(game.rooms[key].next_direction)
			}

		}
	};*/
//console.log(game.rooms[i].name);

//console.log(map(game));



var currentRoom = game.rooms[0];

var treasure = false;

function gotTreasure() {
	if (game.rooms.name === 'K'){
		console.log("You've got the treasure!!!");
		treasure = true;
		process.kill();  ///ends program
	}
}

//function switchDirection () {
//		console.log("You are currently in room " + currentRoom.name)
//		console.log(components.createRoom(currentRoom.name))

//}

function moveNorth() {
	var newRoom = '';
	if(currentRoom.north){
		newRoom = currentRoom.north;
		for (var i = 0; i < game.rooms.length; i++) {
			if (newRoom === game.rooms[i]){
				currentRoom = game.rooms[i];
				//console.log("You are currently in room " + newRoom);
				//console.log(components.createRoom(newRoom));
			}
		}
				console.log("You are currently in room " + newRoom);
				console.log(components.createRoom(newRoom));
	}
	else {
		console.log('cant go that way!!!');
	}
}

function moveEast() {
	var newRoom = '';
	if(currentRoom.east){
		newRoom = currentRoom.east;
		for (var i = 0; i < game.rooms.length; i++) {
			if (newRoom === game.rooms[i]){
				currentRoom = game.rooms[i];
				
			}
				console.log(components.createRoom(currentRoom));
		}
				console.log("You are currently in room " + newRoom);
				
	}
	else {
		console.log('cant go that way!!!');
	}
}


function moveWest() {
	var newRoom = '';   //empty string
	if(currentRoom.west){
		newRoom = currentRoom.west;
		for (var i = 0; i < game.rooms.length; i++) {
			if (newRoom === game.rooms[i]){
				currentRoom = game.rooms[i];
			}
		}
				console.log("You are currently in room " + newRoom);
				console.log(components.createRoom(newRoom));
	}
	else {
		console.log('cant go that way!!!');
	}
}

function moveSouth() {
	var newRoom = '';
	if(currentRoom.south){
		newRoom = currentRoom.south;
		for (var i = 0; i < game.rooms.length; i++) {
			if (newRoom === game.rooms[i]){
				currentRoom = game.rooms[i];
			}
		}
				console.log("You are currently in room " + newRoom);
				console.log(components.createRoom(newRoom));
	}
	else {
		console.log('cant go that way!!!');
	}
}


console.log(components.createRoom(game.rooms[0]));

rl.question("welcome to the game. Please enter the room you see on the screen.", function(room){
	if (currentRoom.name === room){
		console.log("PROCEED at your own will.");
		activity();
	}
	else {
		console.log("Try again");
	}
});

function activity() {

	rl.question('Which direction would you like to go???', function(direction){
		if(!treasure) {
			switch(direction.toLowerCase()) {       //review switch statement notation
				case "north":
					moveNorth();
					//switchDirection();
					gotTreasure();
					break;
				case "east":
					moveEast();
					//switchDirection();
					gotTreasure();
					break;
				case "west":
					moveWest();
					//switchDirection();
					gotTreasure();
					break;
				case "south":
					moveSouth();
					//switchDirection();
					gotTreasure();
					break;
				default:
					console.log('ERROR, ERROR');
					break;
			}
			activity();
		}
	});
}




	/*	console.log(components.createRoom(game.rooms[4]));
	}
			else if (answer1 === "east") {
				console.log(components.createRoom(game.rooms[2]));
			}	
				else if (answer1 === "west"){
					console.log(components.createRoom(game.rooms[0]));
				}
					else (console.log('Incorrect please try again!!'));
	rl.question('Your are standing on square ' + roomName(answer1, 'B') + ' Please pick another direction.', function(next_direction) {
			console.log(components.createRoom(roomName(next_direction, 'B')));
	});
});
*/  //first try ...infinite loop for roomName is too hard





//








 