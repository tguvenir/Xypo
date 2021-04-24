const btnMenu = document.getElementById('btn-menu');
const navBar = document.getElementById('navBar');

navBar.style.right = '-250px';
btnMenu.onclick = function () {
	if (navBar.style.right == '-250px') {
		navBar.style.right = '0';
	} else {
		navBar.style.right = '-250px';
	}
};
