function Main() {
	
	var fps = 60;
	var state = 0;
	
	var playerImage = new Image();
	
	tick = function() {
		
		switch(state) {
			
			case 1:
				startText.tick();
				optionsText.tick();
				exitText.tick();
				break;
			case 2:
				backText.tick();
				break;
			case 3:
				player.tick();
				hud.tick();
				break;
			case 4:
				deathText.tick();
				backText.tick();
				break;
			default:
			
		}
		
	}
	
	render = function() {
		
		switch(state) {
			
			case 1:
				drawBackground(getColor("BACKGROUND"));
				startText.render();
				optionsText.render();
				exitText.render();
				break;
			case 2:
				drawBackground(getColor("BACKGROUND"));
				backText.render();
				break;
			case 3:
				drawBackground(getColor("WHITE"));
				map.render();
				player.render();
				hud.render();
				break;
			case 4:
				drawBackground(getColor("BACKGROUND"));
				deathText.render();
				backText.render();
				break;
			default:
				drawBackground(getColor("BACKGROUND"));
				drawText(lib.getWidth() / 2, lib.getHeight() / 2, "Exit", "100px Helvetica", getColor("WHITE"));
			
		}
		
	}
	
	loop = function() {
		
		tick();
		setTimeout(function() {
			
			render();
			requestAnimationFrame(loop);
			
		}, 1000 / fps);
		
	}
	
	this.init = function() {
		
		setState(1);
		
		lib = new Lib();
		keyHandler = new KeyHandler();
		
		map = new Map();
		map.init();
		
		player = new Player();
		hud = new Hud();
		
		startText = new MenuText();
		startText.setText("Start");
		startText.setY(lib.getHeight() / 2 - 100);
		startText.setSelected(true);
		
		optionsText = new MenuText();
		optionsText.setText("Options");
		optionsText.setY(lib.getHeight() / 2);
		
		exitText = new MenuText();
		exitText.setText("Exit");
		exitText.setY(lib.getHeight() / 2 + 100);
		
		backText = new MenuText();
		backText.setText("Back to main menu");
		backText.setY(lib.getHeight() / 2 + 300);
		
		deathText = new MenuText();
		deathText.setText("You died!");
		deathText.setY(lib.getHeight() / 2);
		
		playerImage.src = "player_sprites.png";
		
		window.addEventListener("keydown", keyHandler.keyPress, false);
		window.addEventListener("keyup", keyHandler.keyReleased, false);
		requestAnimationFrame(loop);
		
	}
	
	getState = function() {
		
		return state;
		
	}
	
	setState = function(newState) {
		
		state = newState;
		
	}
	
	getPlayerImage = function() {
		
		return playerImage;
		
	}
	
}

main = new Main();
main.init();