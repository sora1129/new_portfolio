'use strict'

{
	function playTop() {
			setTimeout(() => {
			imagesTop[currentIndex].classList.remove('current');
			currentIndex++;
			if (currentIndex > imagesTop.length - 1) {
				currentIndex = 0;
			}
			imagesTop[currentIndex].classList.add('current');
			playTop();
		}, 1100);
	}

	function playAbout() {
			setTimeout(() => {
			imagesAbout[streamIndex].classList.remove('stream');
			streamIndex++;
			if (streamIndex > imagesAbout.length - 1) {
				streamIndex = 0;
			}
			imagesAbout[streamIndex].classList.add('stream');
			playAbout();
		}, 1100);
	}

	const imagesTop = document.querySelectorAll('.top_imges img');
	const imagesAbout = document.querySelectorAll('.top_about_img img');
	let currentIndex = 0;
	let streamIndex = 0;

	playTop();
	playAbout();

	function calback(entries, obs) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			}

			entry.target.classList.add('appear');
			obs.unobserve(entry.target);
		});
	}

	const observer = new IntersectionObserver(calback, {
		threshold: 0.2,
	});

	document.querySelectorAll('.animate').forEach(el => {
		observer.observe(el);
	});

}