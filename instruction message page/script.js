// Project URLs
const tripProjectLink = "https://trip-project-0ufy.onrender.com/";
const seekerLink = "https://job-submission.onrender.com/seeker.html";
const recruiterLink = "https://job-submission.onrender.com/recruiter.html";

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("viewProjectButton")
        .addEventListener("click", () => {
            window.open(tripProjectLink, "_blank");
        });

    document.getElementById("seekerBtn")
        .addEventListener("click", () => {
            window.open(seekerLink, "_blank");
        });

    document.getElementById("recruiterBtn")
        .addEventListener("click", () => {
            window.open(recruiterLink, "_blank");
        });

});