const promise = new Promise((resolve, reject) => {
	console.log('created promise');
	setTimeout(() => {
		resolve('This is my resolved data');
	}, 1500);
});

console.log('before');

promise.then((data) => {
	console.log(data);
});

console.log('afters');
