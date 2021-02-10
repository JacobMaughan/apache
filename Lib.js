function Lib() {
	
	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');
	
	var width = canvas.width;
	var height = canvas.height;
	
	draw = function(x, y, width, height, color) {
		
		ctx.fillStyle = color;
		ctx.fillRect(x, y, width, height);
		
	}
	
	drawBackground = function(color) {
		
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, width, height);
		
	}
	
	drawText = function(x, y, text, font, color) {
		
		ctx.font = font;
		ctx.textAlign = "center";
		ctx.fillStyle = color;
		ctx.fillText(text, x, y);
		
	}
	
	drawSprite = function(x, y, width, height, img, imgX, imgY, imgWidth, imgHeight) {
		
		ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight, x, y, width, height);
		
	}
	
	drawImage = function(x, y, width, height, img) {
		
		ctx.drawImage(img, x, y, width, height);
		
	}
	
	constrainToCanvas = function(object) {
		
		if(object.x > width - object.width) { object.x = width - object.width; }
		if(object.y > height - object.height) { object.y = height - object.height; }
		if(object.x < 0) { object.x = 0; }
		if(object.y < 0) { object.y = 0; }
		
	}
	
	loopCanvas = function(object) {
		
		if(object.x > width - object.width) { object.x = 0; }
		if(object.y > height - object.height) { object.y = 0; }
		if(object.x < 0) { object.x = width - object.width; }
		if(object.y < 0) { object.y = height - object.height; }
		
	}
	
	getCollision = function(object0, object1) {
		
		if(object0.x < object1.x + object1.width && object0.x + object0.width > object1.x) {
			
			if(object0.y < object1.y + object1.height && object0.y + object0.height > object1.y) {
				
				return true;
				
			}
			else {
				
				return false;
				
			}
			
		}
		else {
			
			return false;
			
		}
		
	}
	
	move = function(object, direction) {
		
		switch(direction) {
			
			case "UP":
				object.velX = 0;
				object.velY = -1;
				break;
			case "DOWN":
				object.velX = 0;
				object.velY = 1;
				break;
			case "LEFT":
				object.velX = -1;
				object.velY = 0;
				break;
			case "RIGHT":
				object.velX = 1;
				object.velY = 0;
				break;
			case "UP_LEFT":
				object.velX = -1;
				object.velY = -1;
				break;
			case "UP_RIGHT":
				object.velX = 1;
				object.velY = -1;
				break;
			case "DOWN_LEFT":
				object.velX = -1;
				object.velY = 1;
				break;
			case "DOWN_RIGHT":
				object.velX = 1;
				object.velY = 1;
				break;
			default:
				object.velX = 0;
				object.velY = 0;
				break;
			
		}
		
	}
	
	getColor = function(color) {
		
		switch(color) {
			
			case "BLACK":
				return "rgb(0, 0, 0)";
				break;
			case "WHITE":
				return "rgb(255, 255, 255)";
				break;
			case "RED":
				return "rgb(255, 0, 0)";
				break;
			case "GREEN":
				return "rgb(0, 255, 0)";
				break;
			case "BLUE":
				return "rgb(0, 0, 255)";
			case "BACKGROUND":
				var gradient = ctx.createLinearGradient(0, width, height, 0);
				gradient.addColorStop(0,"#141e30");
				gradient.addColorStop(0.5, "#141e30");
				gradient.addColorStop(1,"#243b55");
				return gradient;
				break;
			case "MAIN_MENU_TEXT":
				return "rgb(255, 255, 255)";
				break;
			case "MAIN_MENU_TEXT_SELECTED":
				return "rgb(229, 204, 127)";
			case "PLAYER":
				return "rgb(65, 105, 255)";
				break;
			default:
				return "rgb(255, 0, 220)";
			
		}
		
		return "";
		
	}
	
	random = function(length) {
		
		return Math.floor(Math.random() * length);
		
	}
	
	this.getWidth = function() {
		
		return width;
		
	}
	
	this.getHeight = function() {
		
		return height;
		
	}
	
}