(function() {
	const isShowMenu = (menu) => {
		let isShow;
		menu.display === 'block'
			? isShow = true
			: isShow = false;
		return isShow;
	}

	const btnBurger = document.querySelector('#btn-burger');
	btnBurger.addEventListener('click', (event) => {
		const menuMobile = document.querySelector('#menu-mobile').style;

		if(!isShowMenu(menuMobile)) {
			menuMobile.display = 'block';
			document.body.style.overflowY = 'hidden';
		}
	});

	const btnClose = document.querySelector('#btn-close');
	btnClose.addEventListener('click', (event) => {
		const menuMobile = document.querySelector('#menu-mobile').style;

		if(isShowMenu(menuMobile)) {
			setTimeout(() => {
				menuMobile.display = 'none';
				document.body.style.overflowY = ''
			}, 230)

		}
	});


	const isInputEmpty = (input) => {
		let isEmpty;
		input.value.length <= 0
			? isEmpty = true
			: isEmpty = false;
		return isEmpty;
	}

	const btnEmail =document.querySelector('#send-email');
	btnEmail.addEventListener('click', (event) => {
		event.preventDefault();

		const verifyIsInputEmpty = () => {
			const inputEmail = document.querySelector('#input-email');
			const inputSubject = document.querySelector('#input-subject');

			const verifyErrorInput = (input) => {
				if (isInputEmpty(input)) {
					input.classList.add('input--error');
				} else {
					input.classList.remove('input--error');
				}
			}

			verifyErrorInput(inputEmail);
			verifyErrorInput(inputSubject);
		}

		verifyIsInputEmpty();
	});
})();