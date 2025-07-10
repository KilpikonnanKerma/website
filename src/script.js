function Start() {
    //document.getElementById("navbar").style.top = "-100px";
}

window.onload = function() {
    // document.getElementById("navbar").style.top = "-100px";

    const theme = localStorage.getItem('theme');
    if (theme) {
        document.body.setAttribute('data-theme', theme);
        const modeToggle = document.getElementById('mode-toggle');
        modeToggle.textContent = theme === 'light' ? 'Dark Mode' : 'Light Mode';
    }
}

var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    document.getElementById("navbar").style.top="-50px";
    setTimeout(function(){document.getElementById("navbar").style.top="0";}, 1750);


    // if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("navbar").style.top = "0";
    // } else {
    //     // document.getElementById("navbar").style.top = "-50px";

    // }
    prevScrollpos = currentScrollPos;

    // if (window.scrollY <= 0) {
    //     document.getElementById("navbar").style.top = "-100px";
    // }
}

function show(item, position) {
    document.getElementById(item).scrollIntoView({
        block: position, behavior: 'smooth'
    });
}

function toggleMode() {
    const body = document.body;
    const modeToggle = document.getElementById('mode-toggle');

    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        modeToggle.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        modeToggle.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
}

function backToTop() {
    window.scrollTo({
        top: 0, behavior: 'smooth'})
}

// function openProjectInANewTab(file_path) {
//     window.open(file_path);
// }

// function openProject(file_path) {
//     window.location.href = file_path;
// }


let slideIndex = 1;
showSlides(slideIndex)
function openProject(projectId) {
	document.querySelectorAll('.project-popup').forEach(hideDiv => {
		hideDiv.style.display = 'none';
	});

	const targetHide = document.getElementById(projectId);

	if (targetHide && targetHide.classList.contains('project-popup')) {
		targetHide.style.display = 'block';
	}
}

function closeProject(projectId) {
    const targetHide = document.getElementById(projectId);

    if (targetHide && targetHide.classList.contains('project-popup')) {
        targetHide.style.display = 'none';
        slideIndex = 1;
    }
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}