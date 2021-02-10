function Map() {
	
	var grass = new Image();
	var treeTop = new Image();
	var treeTrunk = new Image();
	
	var balehoelGrid11 = [
		
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		
	];
	
	var balehoelGrid12 = [
		
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		
	];
	
	var balehoelGrid13 = [
		
		[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		
	];
	
	var balehoelGrid21 = [
		
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
		
	];
	
	var balehoelGrid22 = [
	
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	
	];
	
	var balehoelGrid23 = [
		
		[0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		
	];
	
	var balehoelGrid31 = [
		
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
		
	];
	
	var balehoelGrid32 = [
		
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		
	];
	
	var balehoelGrid33 = [
		
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		
	];
	
	this.render = function() {
		
		drawMap("BALEHOEL");
		
	}
	
	this.init = function() {
		
		grass.src = "grass_sprite.jpg";
		treeTop.src = "tree_sprite_top.png";
		treeTrunk.src = "tree_sprite_bottom.png";
		
	}
	
	drawMap = function(map) {
		
		var indexX = 0;
		var indexY = 0;
		
		if(map = "BALEHOEL") {
			
			if(player.x > 0 - lib.getWidth() && player.x < 0 && player.y > lib.getHeight() && player.y < lib.getHeight() * 2) {
				
				for(var i = 0; i < balehoelGrid11.length; i++) {
				
					for(var o = 0; o < balehoelGrid11[i].length; o++) {
						
						if(balehoelGrid11[i][o] == 0) {
							
							drawImage(indexX, indexY, lib.getWidth() / 15, lib.getHeight() / 10, grass);
							
						}
						
						indexX += lib.getWidth() / 15;
						
					}
					indexX = 0;
					indexY += lib.getHeight() / 10;
			
				}
				
			}
			if(player.x > 0 - lib.getWidth() && player.x < 0 && player.y > 0 && player.y < lib.getHeight()) {
				
				for(var i = 0; i < balehoelGrid12.length; i++) {
				
					for(var o = 0; o < balehoelGrid12[i].length; o++) {
						
						if(balehoelGrid12[i][o] == 0) {
							
							drawImage(indexX, indexY, lib.getWidth() / 15, lib.getHeight() / 10, grass);
							
						}
						
						indexX += lib.getWidth() / 15;
						
					}
					indexX = 0;
					indexY += lib.getHeight() / 10;
			
				}
				
			}
			if(player.x > 0 - lib.getWidth() && player.x < 0 && player.y > 0 - lib.getHeight() && player.y < 0) {
				
				for(var i = 0; i < balehoelGrid13.length; i++) {
				
					for(var o = 0; o < balehoelGrid13[i].length; o++) {
						
						if(balehoelGrid13[i][o] == 0) {
							
							drawImage(indexX, indexY, lib.getWidth() / 15, lib.getHeight() / 10, grass);
							
						}
						
						indexX += lib.getWidth() / 15;
						
					}
					indexX = 0;
					indexY += lib.getHeight() / 10;
			
				}
				
			}
			if(player.x > 0 && player.x < lib.getWidth() && player.y > lib.getHeight() && player.y < lib.getHeight() * 2) {
				
				for(var i = 0; i < balehoelGrid21.length; i++) {
				
					for(var o = 0; o < balehoelGrid21[i].length; o++) {
						
						if(balehoelGrid21[i][o] == 0) {
							
							drawImage(indexX, indexY, lib.getWidth() / 15, lib.getHeight() / 10, grass);
							
						}
						
						indexX += lib.getWidth() / 15;
						
					}
					indexX = 0;
					indexY += lib.getHeight() / 10;
			
				}
				
			}
			if(player.x > 0 && player.x < lib.getWidth() && player.y > 0 && player.y < lib.getHeight()) {
				
				for(var i = 0; i < balehoelGrid22.length; i++) {
				
					for(var o = 0; o < balehoelGrid22[i].length; o++) {
						
						if(balehoelGrid22[i][o] == 0) {
							
							drawImage(indexX, indexY, lib.getWidth() / 15, lib.getHeight() / 10, grass);
							
						}
						else if(balehoelGrid22[i][o] == 1) {
							
							drawImage(indexX, indexY, lib.getWidth() / 15, lib.getHeight() / 10, grass);
							drawImage(indexX, indexY - lib.getHeight() / 10, lib.getWidth() / 15, lib.getHeight() / 10, treeTop);
							drawImage(indexX, indexY, lib.getWidth() / 15, lib.getHeight() / 25, treeTrunk);
							
						}
						
						indexX += lib.getWidth() / 15;
						
					}
					indexX = 0;
					indexY += lib.getHeight() / 10;
			
				}
				
			}
			if(player.x > 0 && player.x < lib.getWidth() && player.y > 0 - lib.getHeight() && player.y < 0) {
				
				for(var i = 0; i < balehoelGrid23.length; i++) {
				
					for(var o = 0; o < balehoelGrid23[i].length; o++) {
						
						if(balehoelGrid23[i][o] == 0) {
							
							drawImage(indexX, indexY, lib.getWidth() / 15, lib.getHeight() / 10, grass);
							
						}
						
						indexX += lib.getWidth() / 15;
						
					}
					indexX = 0;
					indexY += lib.getHeight() / 10;
			
				}
				
			}
			if(player.x > 0 + lib.getWidth() && player.x < lib.getWidth() * 2 && player.y > lib.getHeight() && player.y < lib.getHeight() * 2) {
				
				for(var i = 0; i < balehoelGrid31.length; i++) {
				
					for(var o = 0; o < balehoelGrid31[i].length; o++) {
						
						if(balehoelGrid31[i][o] == 0) {
							
							drawImage(indexX, indexY, lib.getWidth() / 15, lib.getHeight() / 10, grass);
							
						}
						
						indexX += lib.getWidth() / 15;
						
					}
					indexX = 0;
					indexY += lib.getHeight() / 10;
			
				}
				
			}
			if(player.x > 0 + lib.getWidth() && player.x < lib.getWidth() * 2 && player.y > 0 && player.y < lib.getHeight()) {
				
				for(var i = 0; i < balehoelGrid32.length; i++) {
				
					for(var o = 0; o < balehoelGrid32[i].length; o++) {
						
						if(balehoelGrid32[i][o] == 0) {
							
							drawImage(indexX, indexY, lib.getWidth() / 15, lib.getHeight() / 10, grass);
							
						}
						
						indexX += lib.getWidth() / 15;
						
					}
					indexX = 0;
					indexY += lib.getHeight() / 10;
			
				}
				
			}
			if(player.x > 0 + lib.getWidth() && player.x < lib.getWidth() * 2 && player.y > 0 - lib.getHeight() && player.y < 0) {
				
				for(var i = 0; i < balehoelGrid33.length; i++) {
				
					for(var o = 0; o < balehoelGrid33[i].length; o++) {
						
						if(balehoelGrid33[i][o] == 0) {
							
							drawImage(indexX, indexY, lib.getWidth() / 15, lib.getHeight() / 10, grass);
							
						}
						
						indexX += lib.getWidth() / 15;
						
					}
					indexX = 0;
					indexY += lib.getHeight() / 10;
			
				}
				
			}
			
		}
		
	}
	
}

