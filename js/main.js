'use strict'

{
	/*------- 
	 ALL PAGE
	---------*/
	//---------- スムーススクロール-------------//
	// #で始まるリンクを取得
	const smoothScroll = document.querySelectorAll('a[href^="#"]');

		// forで回してaddEventListenerする
		for (let i = 0; i < smoothScroll.length; i++) {
			smoothScroll[i].addEventListener('click', (e) => {
				// フォームの内容をURLへ送信するのをキャンセル
				e.preventDefault();
				// href属性の取得
				let href = smoothScroll[i].getAttribute('href');
				// #を''に書き換えてtargetに代入
				let target = document.getElementById(href.replace('#', ''));
				// targetで取得したhrefのビューポートに対する位置をtopに返す
				const rect = target.getBoundingClientRect().top;
				// window.scrollY
				const offset = window.pageYOffset;
				// 移動先のポジション取得
				const position = rect + offset;
				// window.scrollToでスクロール
				window.scrollTo({
					top: position,
					behavior: 'smooth',
				});
			});
		}

//---------- ペンギンのアニメーションTOP-------------//
	function playTop() {
		// 切り替わりタイマーの設定
			setTimeout(() => {
				// 画像0になったら currentクラスを追加
			imagesTop[currentIndex].classList.remove('current');
			// インデックスに1追加
			currentIndex++;
			// 画像の枚数よりもインデックスが多くなったらインデックスを0に
			if (currentIndex > imagesTop.length - 1) {
				currentIndex = 0;
			}
			// インデックスが0じゃない時はcurrentクラスを外す
			imagesTop[currentIndex].classList.add('current');
			playTop();
		}, 1100);
	}

	//---------- ペンギンのアニメーションABOUT-------------//
	function playAbout() {
			setTimeout(() => {
				// 画像0になったら streamクラスを追加
			imagesAbout[streamIndex].classList.remove('stream');
			streamIndex++;
			if (streamIndex > imagesAbout.length - 1) {
				streamIndex = 0;
			}
				// インデックスが0じゃない時はstreamクラスを外す
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

	//---------- WORKSのアニメーション-------------//
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

	/*------- 
	 WORKS PAGE
	---------*/
	//---------- tab menu-------------//
	const tabMenu = document.querySelectorAll('.tab_menu li a');
	const items = document.querySelectorAll('.works_items');

	tabMenu.forEach(clickeditem =>  {
		clickeditem.addEventListener('click', e => {
			e.preventDefault();

			tabMenu.forEach(item => {
				item.classList.remove('tab_on');
			});
			clickeditem.classList.add('tab_on');

			items.forEach(worksItems => {
				worksItems.classList.remove('show');
			});
			document.getElementById(clickeditem.dataset.id).classList.add('show');
		});
	});

}