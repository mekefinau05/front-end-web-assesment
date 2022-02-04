console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}
const kittyCat = document.querySelector('#kitten-cat')

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

kittyCat.addEventListener('mouseover', () => {
	kittyCat = alert('compliment')
})