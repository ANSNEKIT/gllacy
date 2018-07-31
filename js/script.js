var btnFeedback;

var btnSearch = document.querySelector('.search-elem');
var blockSearch = document.querySelector('.search');

var btnLogin = document.querySelector('.login-elem');
var blockFormLogin = document.querySelector('.form-login');
var formLogin = blockFormLogin.querySelector('form');
var login = blockFormLogin.querySelector('[name=login]');
var password = blockFormLogin.querySelector('[name=password]');

var btnBasket = document.querySelector('.basket-elem');
var blockBasket = document.querySelector('.backet');

var modal;
var modalClose;
var form;
var userName;
var email;

var shadow = document.querySelector('.block-shadow');

var isStorageSupport = true;
var storage = "";


try {
	storage = localStorage.getItem("name");
	btnFeedback = document.querySelector('#form-feedback');
	modal = document.querySelector('.modal');
	modalClose = modal.querySelector('.modal-close');
	form = modal.querySelector('form');
	userName = modal.querySelector('[name=user-name]');
	email = modal.querySelector('[name=email]');
} catch (err) {
	isStorageSupport = false;
	modal = 0;
	modalClose = 0;
	form = 0;
	userName = 0;
	email = 0;
	btnFeedback = 0;
}
if (btnFeedback) {
	btnFeedback.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.add('modal-show');
	shadow.classList.add('modal-show');
	if (storage) {
		name.value = storage;
		email.focus();
	} else {
		userName.focus();
	}
});
}

if (modal) {
	modalClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.remove('modal-show');
	shadow.classList.remove('modal-show');
	});
}


window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (modal.classList.contains("modal-show")) {
			modal.classList.remove("modal-show");
		}
	}
});

btnSearch.addEventListener("mouseenter", function (evt) {
	evt.preventDefault();
	blockSearch.classList.add("modal-show");
});

btnSearch.addEventListener("mouseleave", function (evt) {
	evt.preventDefault();
	blockSearch.classList.remove("modal-show");
});

btnLogin.addEventListener("mouseenter", function (evt) {
	evt.preventDefault();
	blockFormLogin.classList.add("modal-show");
});

btnLogin.addEventListener("mouseleave", function (evt) {
	evt.preventDefault();
	blockFormLogin.classList.remove("modal-show");
	blockFormLogin.classList.remove("modal-error");
	login.classList.remove("form-error");
	password.classList.remove("form-error");
});

btnBasket.addEventListener("mouseenter", function (evt) {
	evt.preventDefault();
	if (blockBasket) {
		blockBasket.classList.add("modal-show");
	}
});

btnBasket.addEventListener("mouseleave", function (evt) {
	evt.preventDefault();
	if (blockBasket) {
		blockBasket.classList.remove("modal-show");
	}
});

formLogin.addEventListener("submit", function (evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
		blockFormLogin.classList.remove("modal-error");
		blockFormLogin.offsetWidth = blockFormLogin.offsetWidth;
		blockFormLogin.classList.add("modal-error");
		
		if (!login.value) {
			login.classList.add("form-error");
		}
		if (!password.value) {
			password.classList.add("form-error");
		}
		login.addEventListener("focus", function (evt) {
			login.classList.remove("form-error");
		})
		password.addEventListener("focus", function (evt) {
			password.classList.remove("form-error");
		})
			
	}
		
});