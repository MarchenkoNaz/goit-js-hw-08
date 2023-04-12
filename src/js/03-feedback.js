import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const SAVEDDATA = 'feedback-form-state'
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);


let formData = onReload();

function onFormData(evt) {
	formData[evt.target.name] = evt.target.value;
	localStorage.setItem(SAVEDDATA, JSON.stringify(formData));

}

function onSubmitForm(evt) {
	if (email.value === '' || message.value === '') {
		alert('Enter all inputs');
	}
	else {
		console.log(JSON.parse(localStorage.getItem(SAVEDDATA)))
		evt.preventDefault();
		clearForm()
	}
};

function onReload() {

	if (!localStorage.getItem(SAVEDDATA)) {
		return {};
	}
	const data = JSON.parse(localStorage.getItem(SAVEDDATA));
	if (data.email) {
		email.value = data.email;
	}

	if (data.message) {
		message.value = data.message;
	}

	return { ...data };
};

function clearForm() {
	localStorage.removeItem(SAVEDDATA)
	form.reset();
	formData = {}
}