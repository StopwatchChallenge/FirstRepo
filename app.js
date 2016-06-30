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
	document.getElementById("output").innerHTML = "00:00:00:00";
	document.getElementById("lapOutput").innerHTML = "";
}

function increment() {

	if(running == true) {

		setTimeout(function() {
			time++;
			var min = Math.floor(time/100/60);
			var sec = Math.floor(time/100 % 60);
			var hour = Math.floor(time/10/60/60);
			var tenth = Math.floor(time%100);

			if(hour<10){
				hour = "0" + hour;
			}

			if(min<10){
				min = "0" + min;
			}
			if(sec<10){
				sec = "0" + sec;
			}
			if(tenth<10){
				tenth = "0" + tenth;
			}
			


			document.getElementById("output").innerHTML = hour + ":" + min + ":" + sec + ":" + tenth;
			increment();
	}, 10);
	}

	
};

function lap() {

		var currentValue = document.getElementById("output").innerHTML;
	
		var lapOutput = document.getElementById("lapOutput");
		

		if(lapOutput.innerHTML === "") {
				lapOutput.innerHTML = "Lap";
		}

		lapOutput.innerHTML = lapOutput.innerHTML + "<div>" + currentValue + "</div>";



};
