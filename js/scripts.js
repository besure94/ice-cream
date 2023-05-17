window.addEventListener("load", function() {

	const iceCreamFlavors = ['caramel', 'chocolate chip', 'cookies and cream', 'fudge', 'mint'];
	const ul = document.querySelector("ul");
	iceCreamFlavors.forEach(function(flavor) {
	const li = document.createElement("li");
	li.append(flavor);
	ul.append(li);
	});
});