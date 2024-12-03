function Start() {
    //document.getElementById("navbar").style.top = "-100px";
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

    // if (window.scrollY <= 0) {
    //     document.getElementById("navbar").style.top = "-100px";
    // }
}

function showProjects() {
    document.getElementById('projects-title').scrollIntoView({
        block: 'start', behavior: 'smooth'});
}

function showAbout() {
    document.getElementById('about-title').scrollIntoView({
        block: 'start', behavior: 'smooth'});
}

function showSkills() {
    document.getElementById('skills-title').scrollIntoView({
        block: 'start', behavior: 'smooth'});
}

function showContact() {
    document.getElementById('footer').scrollIntoView({
        block: 'start', behavior: 'smooth'
    });
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