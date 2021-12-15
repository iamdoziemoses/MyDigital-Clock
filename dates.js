var clock = document.querySelector(".clock");

var tick = () => {
	var now = new Date()
	var future = new Date('January 1 2022 11:59:00')

	var diff = future.getTime() - now.getTime();

	var daysRemain = Math.round(diff / 1000 / 60 / 60 / 24);

	var h = now.getHours()
	var m = now.getMinutes()
	var s = now.getSeconds()
	var meridian = "AM"

	if (m < 10) {
		m = "0" + m
	}

	if (s < 10) {
		s = "0" + s;
	}

	if (h >= 12) {
		meridian = "PM"
	}

	if (h > 12) {
		h = (h - 12);
	}
	var html = `
		<div>${daysRemain} days remaining</div>
	    <h4>${h}<h4>:
	    <h4>${m}<h4>:
	    <h4>${s}<h4>
		<h4>${meridian}</h4>
	`
	clock.innerHTML = html;


}


setInterval(tick, 1000)