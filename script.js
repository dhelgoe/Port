// document.addEventListener("DOMContentLoaded", function () {
//     const learnMoreButton = document.getElementById("learnMoreButton");
//     const learnMoreSection = document.querySelector(".learnMore");
//     const navLinks = document.querySelectorAll(".nav-links a");

//     learnMoreButton.addEventListener("click", function () {
//         learnMoreSection.scrollIntoView({ behavior: "smooth" });
//     });

document.addEventListener("DOMContentLoaded", function () {
    const viewWorkButton = document.getElementById("projectsButton");
    const projectsSection = document.getElementById("projects");

    viewWorkButton.addEventListener("click", function () {
        projectsSection.scrollIntoView({ behavior: "smooth" });
    });
});


    // Scroll to sections when navigation links are clicked
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
