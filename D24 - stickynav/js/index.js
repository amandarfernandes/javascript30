const nav = document.getElementById("main");
const navTop = nav.offsetTop;

function fixNav() {
	console.log(navTop, window.scrollY);
	if (window.scrollY >= navTop) {
		document.body.classList.add('fixed-nav');
		document.body.style.paddingTop = nav.offsetHeight;
	}
	else {
		document.body.classList.remove('fixed-nav')
		document.body.style.paddingTop = nav.offsetHeight;
	}
		
}

window.addEventListener('scroll',fixNav);