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
		}, 1300);
	}

	function playAbout() {
			setTimeout(() => {
			imagesAbout[activeIndex].classList.remove('active');
			activeIndex++;
			if (activeIndex > imagesAbout.length - 1) {
				activeIndex = 0;
			}
			imagesAbout[activeIndex].classList.add('active');
			playAbout();
		}, 1300);
	}

	const imagesTop = document.querySelectorAll('.top_imges img');
	const imagesAbout = document.querySelectorAll('.top_about_img img');
	let currentIndex = 0;
	let activeIndex = 0;

	playTop();
	playAbout();

	function calback(entries) {
		entries.forEach(entry => {
			if (!entry.isInterescting) {
				return;
			}

			entry.target.classList.add('appear');
		});
	}

	const observer = new IntersectionObserver(calback, {
		threshold: 0.2,
	});

	document.querySelectorAll('.animate').forEach(el => {
		observer.observe(el);
	});

}