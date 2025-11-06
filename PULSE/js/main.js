(function () {

	document.addEventListener('click', BurgerInit);

	// burger
	function BurgerInit(e) {

		const BurgerIcon = e.target.closest('.burger__icon');
		const BurgerNavLink = e.target.closest('.nav__link');

		if (!BurgerIcon && !BurgerNavLink) return
		if (document.documentElement.clientWidth > 1200) return

		if (!document.body.classList.contains('body--opened-menu')) {
			document.body.classList.add('body--opened-menu')
		} else { document.body.classList.remove('body--opened-menu') }
	}




	// swiper
	const swiper = new Swiper('.protein__swiper', {
		slidesPerView: 1,
		spaceBetween: 10,
		autoHeight: true,
		pagination: {
			el: '.protein__pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return `<span class="${className}" data-index="${index + 1}"></span>`;
			}
		}
	});




	// tab
	const tabList = document.querySelector('.tab__list');
	if (!tabList) return;

	tabList.addEventListener('click', function (e) {
		const tabControl = e.target.closest('.tab__link');
		if (!tabControl) return;
		e.preventDefault();

		document.querySelectorAll('.tab__link').forEach(tab => {
			tab.classList.remove('tab__link--active');
		});

		tabControl.classList.add('tab__link--active');

		document.querySelectorAll('.tab-content__box').forEach(box => {
			box.classList.remove('tab_content--show');
		});

		const tabId = tabControl.getAttribute('href');
		const target = document.getElementById(tabId);
		if (target) {
			target.classList.add('tab_content--show');
		}
	});




	// Function tab-table
	const tabTable = document.querySelector('.timetable__nav-list')

	tabTable.addEventListener('click', function (e) {
		const tabControlTable = e.target.closest('.timetable__nav-link')

		if (!tabControlTable) return 
		e.preventDefault() 

		document.querySelectorAll('.timetable__nav-link').forEach(tab => {
			tab.classList.remove('timetable__nav-link--active')
		}) 

		tabControlTable.classList.add('timetable__nav-link--active') 
		document.querySelectorAll('.table__box').forEach(box => {
			box.classList.remove('table__box--active')
		})

		const tableID = tabControlTable.getAttribute('href').replace('#', '')
		const targetTable = document.getElementById(tableID)
		if (targetTable) {
			targetTable.classList.add('table__box--active')
		}
	})




	// accordion
	const boxesAcc = document.querySelectorAll('.accordion_box'); 

	boxesAcc.forEach((box) => { 
		box.addEventListener('click', () => { 
			const content = box.querySelector('.accordion__content');
			if (!content) return; 

			const isActive = box.classList.contains('accordion_box--active'); 

			boxesAcc.forEach(otherBox => {
				const otherContent = otherBox.querySelector('.accordion__content');
				otherBox.classList.remove('accordion_box--active');
				if (otherContent) otherContent.style.maxHeight = 0;
			});

			if (!isActive) {
				box.classList.add('accordion_box--active');
				content.style.maxHeight = content.scrollHeight + 'px';

				setTimeout(() => {
					content.style.maxHeight = content.scrollHeight + 'px';
				}, 50);
			}
		});
	});
})()