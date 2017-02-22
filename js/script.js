var link = document.querySelector(".contacts .btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var login = document.querySelector(".modal-content input[name=name]");

link.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.add("modal-content-show");
	login.focus();
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});
