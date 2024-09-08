document.body.addEventListener("activate.bs.scrollspy", function (event) {
	const activeLink = document.querySelector(".nav-link.active");
	const activeSection = activeLink.getAttribute("href");
	console.log(activeSection);
	document
		.querySelectorAll('.sidebar input[type="checkbox"]')
		.forEach((checkbox) => {
			checkbox.checked = false;
		});
	if (activeSection === "#profile") {
		document.getElementById("check-profile").checked = true;
		document.querySelector(".scrolldown").classList.remove("d-none");
	} else if (activeSection === "#about") {
		document.getElementById("check-about").checked = true;
		document.querySelector(".scrolldown").classList.add("d-none");
	} else if (activeSection === "#projects") {
		document.getElementById("check-projects").checked = true;
		document.querySelector(".scrolldown").classList.add("d-none");
	} else if (activeSection === "#tech-stack") {
		document.getElementById("check-tech-stack").checked = true;
		document.querySelector(".scrolldown").classList.add("d-none");
	}
});
