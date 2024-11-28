function Start() {
    //disableScroll();
    document.getElementById("navbar").style.top = "-100px";
}

window.onload = function() {document.getElementById("navbar").style.top = "-100px"; }

var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;

    if (window.scrollY <= 0) {
        document.getElementById("navbar").style.top = "-100px";
    }
}

function showProjects() {
    document.getElementById('projects-holder').scrollIntoView({
        block: 'start', behavior: 'smooth'});
}

function showAbout() {
    document.getElementById('about').scrollIntoView({
        block: 'center', behavior: 'smooth'});
}

function showSkills() {
    document.getElementById('skills').scrollIntoView({
        block: 'end', behavior: 'smooth'});
}

function backToTop() {
    window.scrollTo({
        top: 0, behavior: 'smooth'})
}

function openProjectInANewTab(file_path) {
    window.open(file_path);
}

function openProject(file_path) {
    window.location.href = file_path;
}