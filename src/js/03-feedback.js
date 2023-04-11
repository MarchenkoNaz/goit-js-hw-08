import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const SAVEDDATA = 'feedback-form-state'
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

onReload()
const formData = {};

function onFormData(evt) {
	formData[evt.target.name] = evt.target.value;
	localStorage.setItem(SAVEDDATA, JSON.stringify(formData));
}


function onSubmitForm(evt) {
	console.log(JSON.parse(localStorage.getItem(SAVEDDATA)))
	evt.preventDefault();
	evt.currentTarget.reset();
	localStorage.removeItem(SAVEDDATA)
};

function onReload() {
	const data = JSON.parse(localStorage.getItem(SAVEDDATA));
	const email = document.querySelector('.feedback-form input');
	const message = document.querySelector('.feedback-form textarea');
	if (data) {
		email.value = data.email;
		message.value = data.message;
	}
};