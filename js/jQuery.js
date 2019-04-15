let degree = 0;
setInterval(function() {
	$('#solarSystem .planet').css({ transform: 'rotate(' + degree + 'deg)' });
	degree++;
}, 20);
