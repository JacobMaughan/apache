function KeyHandler() {
	
	moveKeys = [false, false, false, false];
	
	this.keyPress = function(rawKey) {
		
		key = rawKey.keyCode;
		
		if(getState() == 1) {
			
			if(key == 38 || key == 87) {
				
				if(optionsText.getSelected() == true) { optionsText.setSelected(false); startText.setSelected(true); }
				else if(exitText.getSelected() == true) { exitText.setSelected(false); optionsText.setSelected(true); }
				
			}
			else if(key == 40 || key == 83) {
				
				if(startText.getSelected() == true) { startText.setSelected(false); optionsText.setSelected(true); }
				else if(optionsText.getSelected() == true) { optionsText.setSelected(false); exitText.setSelected(true); }
				
			}
			else if(key == 13) {
				
				if(startText.getSelected() == true) { setState(3); startText.setSelected(false); }
				else if(optionsText.getSelected() == true) { setState(2); optionsText.setSelected(false); backText.setSelected(true); }
				else if(exitText.getSelected() == true) { setState(0); }
				
			}
			
		}
		else if(getState() == 2) {
			
			if(key == 38 || key == 87) {
				
				
				
			}
			else if(key == 40 || key == 83) {
				
				
				
			}
			else if(key == 13) {
				
				if(backText.getSelected() == true) { setState(1); backText.setSelected(false); optionsText.setSelected(true); }
				
			}
			
		}
		else if(getState() == 3) {
			
			if(key == 37 || key == 65) { moveKeys[0] = true; moveKeys[2] = false; }
			else if(key == 38 || key == 87) { moveKeys[1] = true; moveKeys[3] = false; }
			else if(key == 39 || key == 68) { moveKeys[2] = true; moveKeys[0] = false; }
			else if(key == 40 || key == 83) { moveKeys[3] = true; moveKeys[1] = false; }
			
		}
		else if(getState() == 4) {
			
			if(key == 13) { setState(1); backText.setSelected(false); startText.setSelected(true);}
			
		}
		
	}
	
	this.keyReleased = function(rawKey) {
		
		key = rawKey.keyCode;
		
		if(getState() == 3) {
			
			if(key == 37 || key == 65) { moveKeys[0] = false; }	
			else if(key == 38 || key == 87) { moveKeys[1] = false; }
			else if(key == 39 || key == 68) { moveKeys[2] = false; }
			else if(key == 40 || key == 83) { moveKeys[3] = false; }
			
		}
		
	}
	
}