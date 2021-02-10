function Player() {
	
	this.width = 90;
	this.height = 140;
	
	this.x = lib.getWidth() / 2;
	this.y = lib.getHeight() / 2;
	this.velX = 0;
	this.velY = 0;
	this.speedX = 5;
	this.speedY = 5;
	
	this.visualX = lib.getWidth() / 2;
	this.visualY = lib.getHeight() / 2;
	
	this.lastMove = "DOWN";
	
	this.maxHealth = 100;
	this.health = 100;
	
	this.tick = function() {
		
		move(this, getMovement());
		
		this.x += this.velX * this.speedX;
		this.y += this.velY * this.speedY;
		
		this.visualX += this.velX * this.speedX;
		this.visualY += this.velY * this.speedY;
		
		if(this.visualX < 0) { this.visualX = lib.getWidth(); }
		if(this.visualY < 0) { this.visualY = lib.getHeight(); }
		if(this.visualX > lib.getWidth()) { this.visualX = 0; }
		if(this.visualY > lib.getHeight()) { this.visualY = 0; }
		
		if(this.health <= 0) { setState(4); backText.setSelected(true); this.health = this.maxHealth;}
		
	}
	
	this.render = function() {
		
		if(getMovement() != "") { this.lastMove = getMovement()}
		
		if(this.lastMove == "LEFT") { drawSprite(this.visualX - this.width / 2, this.visualY - this.height / 2, this.width, this.height, getPlayerImage(), 90 * 2, 0, 90, 140); }
		else if(this.lastMove == "UP") { drawSprite(this.visualX - this.width / 2, this.visualY - this.height / 2, this.width, this.height, getPlayerImage(), 90 * 4, 0, 90, 140); }
		else if(this.lastMove == "RIGHT") { drawSprite(this.visualX - this.width / 2, this.visualY - this.height / 2, this.width, this.height, getPlayerImage(), 90 * 6, 0, 90, 140); }
		else if(this.lastMove == "DOWN") { drawSprite(this.visualX - this.width / 2, this.visualY - this.height / 2, this.width, this.height, getPlayerImage(), 90 * 0, 0, 90, 140); }
		
		else if(this.lastMove == "UP_LEFT") { drawSprite(this.visualX - this.width / 2, this.visualY - this.height / 2, this.width, this.height, getPlayerImage(), 90 * 3, 0, 90, 140); }
		else if(this.lastMove == "UP_RIGHT") { drawSprite(this.visualX - this.width / 2, this.visualY - this.height / 2, this.width, this.height, getPlayerImage(), 90 * 5, 0, 90, 140); }
		else if(this.lastMove == "DOWN_LEFT") { drawSprite(this.visualX - this.width / 2, this.visualY - this.height / 2, this.width, this.height, getPlayerImage(), 90 * 1, 0, 90, 140); }
		else if(this.lastMove == "DOWN_RIGHT") { drawSprite(this.visualX - this.width / 2, this.visualY - this.height / 2, this.width, this.height, getPlayerImage(), 90 * 7, 0, 90, 140); }
		
	}
	
	getMovement = function() {
		
		// Straight Movement
		if(moveKeys[0] == true && moveKeys[1] == false && moveKeys[2] == false && moveKeys[3] == false) { return "LEFT"; }
		else if(moveKeys[1] == true && moveKeys[0] == false && moveKeys[2] == false && moveKeys[3] == false) { return "UP"; }
		else if(moveKeys[2] == true && moveKeys[0] == false && moveKeys[1] == false && moveKeys[3] == false) { return "RIGHT"; }
		else if(moveKeys[3] == true && moveKeys[0] == false && moveKeys[1] == false && moveKeys[2] == false) { return "DOWN"; }
		
		// Diagonal Movement
		else if(moveKeys[1] == true && moveKeys[0] == true && moveKeys[2] == false && moveKeys[3] == false) { return "UP_LEFT"; }
		else if(moveKeys[1] == true && moveKeys[2] == true && moveKeys[0] == false && moveKeys[3] == false) { return "UP_RIGHT"; }
		else if(moveKeys[3] == true && moveKeys[0] == true && moveKeys[2] == false && moveKeys[1] == false) { return "DOWN_LEFT"; }
		else if(moveKeys[3] == true && moveKeys[2] == true && moveKeys[0] == false && moveKeys[1] == false) { return "DOWN_RIGHT"; }
		
		return "";
		
	}
	
}

function Hud() {
	
	this.maxBarWidth = 150;
	this.maxBarHeight = 30;
	
	this.outlineWidth = this.maxBarWidth + 20;
	this.outlineHeight = this.maxBarHeight + 20;
	
	this.barWidth = 150;
	
	this.x = lib.getWidth() - this.outlineWidth - 10;
	this.y = lib.getHeight() - this.outlineHeight - 10;
	this.velX = 0;
	this.velY = 0;
	this.speedX = 10;
	this.speedY = 10;
	
	this.tick = function() {
		
		this.barWidth = this.maxBarWidth * (player.health / player.maxHealth);
		
	}
	
	this.render = function() {
		
		draw(this.x, this.y, this.outlineWidth, this.outlineHeight, getColor("BACKGROUND"));
		draw(this.x + 10, this.y + 10, this.barWidth, this.maxBarHeight, getColor("RED"));
		
	}
	
}

function MenuText() {
	
	this.x = lib.getWidth() / 2;
	this.y = 0
	this.velX = 0;
	this.velY = 0;
	this.speedX = 10;
	this.speedY = 10;
	
	this.text = "DEFAULT";
	this.font = "60px Helvetica";
	
	this.selected = false;
	
	this.tick = function() {
		
		this.x += this.velX * this.speedX;
		this.y += this.velY * this.speedY;
		
	}
	
	this.render = function() {
		
		if(this.selected == true) {
			
			drawText(this.x, this.y, this.text, this.font, getColor("MAIN_MENU_TEXT_SELECTED"));
			
		}
		else if(this.selected == false){
			
			drawText(this.x, this.y, this.text, this.font, getColor("MAIN_MENU_TEXT"));
			
		}
		
	}
	
	this.setY = function(newY) {
		
		this.y = newY;
		
	}
	
	this.setText = function(newText) {
		
		this.text = newText;
		
	}
	
	this.setSize = function(newSize) {
		
		this.fontSize = newSize;
		
	}
	
	this.setSelected = function(newSelected) {
		
		this.selected = newSelected;
		
	}
	
	this.getSelected = function() {
		
		return this.selected;
		
	}
	
}