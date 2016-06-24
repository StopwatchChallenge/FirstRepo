var time = 0;
var running = false;

function startPause() {
	if(running == false){
		running = true;
		increment();
		document.getElementById("startPause").innerHTML = "Pause";
	}
	else {
		running = false;
		document.getElementById("startPause").innerHTML = "Resume";
	}

}



function reset() {
	running = false;
	time = 0;
	document.getElementById("startPause").innerHTML = "Start";
	document.getElementById("output").innerHTML = "0:00:00:00";
}

function increment() {

	if(running == true) {

		setTimeout(function() {
			time++;
			var min = Math.floor(time/10/60);
			var sec = Math.floor(time/10 % 60);
			var hour = Math.floor(time/10/60/60);
			var tenth = time%10;

			if(min<10){
				min = "0" + min;
			}
			if(sec<10){
				sec = "0" + sec;
			}
			if(tenth<10){
				tenth = tenth + "0";
			}
			

			document.getElementById("output").innerHTML = hour + ": " + min + ": " + sec + ": " + tenth;
			increment();
	}, 100);
	}
};