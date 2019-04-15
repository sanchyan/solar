// var canvas = document.getElementById('canvas');
// var context = canvas.getContext('2d');
// let background = new Image();
// background.src = 'https://source.unsplash.com/Q_RBVFFXR_g';
// background.onload = () => context.drawImage(background, 0, 0, canvas.width, canvas.height);

// // let sun = new Image();
// // sun.onload = () => context.drawImage(sun, 0, 0);
// // sun.src = '/images/sunny.svg';
// context.fillStyle = 'white';
// context.fillRect(100, 5, 10, 10);
let looper;
let degrees = 0;

let rotateAnimation = (planet, speed) => {
	let elem = document.getElementById('sun');
	elem.style.transform = 'rotate(' + degrees + 'deg)';
	looper = setTimeout("rotateAnimation('" + sun + "'," + speed + ')', speed);
	degrees++;
	if (degrees > 359) {
		degrees = 1;
	}
};
rotateAnimation('sun', 15);
