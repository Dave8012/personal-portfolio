//JavaScript for my Portfoilio Website

//Date and Time Functions
function startDate() {
	n = new Date();
	y = n.getFullYear();
	m = n.getMonth() + 1;
	d = n.getDate();
	days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	months = ["January", "February", "March", "April", "May", "June", "July", "August",
		"September", "October", "November", "December"];

	document.getElementById("date").innerHTML = "Current Date - " + days[n.getDay()] +
		", " + months[n.getMonth()] + " " + d + ", " + y;
	var t2 = setTimeout(startDate, 1000);
}

function startTime() {
	var today = new Date();
	var hour = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	ampm = checkAmpm(hour);
	hour = checkHour(hour);
	minutes = checkTime(minutes);
	seconds = checkTime(seconds);
	document.getElementById('time').innerHTML = "Current Time - " + hour +
		":" + minutes + ":" + seconds + " " + ampm;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};
	return i;
}

function checkAmpm(i) {
	if (i >= 12 && i <= 24) {
		i = "PM";
	}
	if (i >= 0 && i < 12) {
		i = "AM";
	}
	return i;
}

function checkHour(i) {
	if (i > 12) {
		i = i - 12;
	}
	if (i == 0) {
		i = 12;
	}
	return i;
}