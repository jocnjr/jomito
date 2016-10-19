// signup.js
(() => {
	'use strict'

	const signupForm = document.getElementById('signup-form');
	
	signupForm.onsubmit = (e) => {
		e.preventDefault();

		const name = document.getElementById('signup-name').value;
		const email = document.getElementById('signup-email').value;
		const password = document.getElementById('signup-password').value;
		const confirmPassword = document.getElementById('signup-confirm-password').value;

		if (password === confirmPassword && password !== '') {
			let userData = {};
			userData.name = name;
			userData.email = email;
			userData.password = password;
			createUser(userData);
		} else {
			alert('Invalid password');
		}
	}

	function createUser(userData) {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				console.log(JSON.parse(xhr.responseText));
				// redirect with user data
			}			
		}
		xhr.open('POST', '/api/user');
		xhr.setRequestHeader('Content-Type', 'application/json');
		console.log(userData)
		xhr.send(JSON.stringify(userData));
	}
})();