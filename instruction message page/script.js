// 1. ALL IMAGES IN A SINGLE LINE
const projectImages = [
  "../Media/expense-splitter3.png",
  "../Media/expense-splitter1.png",
  "../Media/expense-splitter.png",
  "../Media/screencapture-trip-project-0ufy-onrender-2026-02-08-09_25_09.png",
  "../Media/screencapture-trip-project-0ufy-onrender-2026-02-08-09_23_02.png",
  "../Media/screencapture-trip-project-0ufy-onrender-2026-02-08-09_20_44.png",
  "../Media/screencapture-trip-project-0ufy-onrender-2026-02-08-09_20_09.png",
  "../Media/screencapture-trip-project-0ufy-onrender-2026-02-08-09_19_48.png",
  "../Media/screencapture-trip-project-0ufy-onrender-2026-02-08-09_19_13.png",
  "../Media/screencapture-trip-project-0ufy-onrender-2026-02-08-09_14_11.png",
];

// 2. JOB PROJECT IMAGES
const jobProjectImages = [
  "../Media/job api2.png",
  "../Media/job api1.png",
  "../Media/job api.png",
  "../Media/screencapture-job-submission-onrender-seeker-html-2026-02-08-12_19_58.png",
  "../Media/screencapture-job-submission-onrender-seeker-html-2026-02-08-12_19_16.png",
];

// Project URLs
const tripProjectLink = "https://trip-project-1hmc.onrender.com/";
const seekerLink = "https://job-submission.onrender.com/seeker.html";
const recruiterLink = "https://job-submission.onrender.com/recruiter.html";

document.addEventListener("DOMContentLoaded", () => {
  // 2. SLIDER LOGIC
  const initSlider = (wrapperId, images) => {
    const sliderWrapper = document.getElementById(wrapperId);
    if (!sliderWrapper) return;

    // Inject images into the slider
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Project Screenshot";
      img.className = "project-img";
      sliderWrapper.appendChild(img);
    });

    // Clone the first image for infinite loop effect
    if (images.length > 0) {
      const firstClone = sliderWrapper.children[0].cloneNode(true);
      sliderWrapper.appendChild(firstClone);
    }

    // Auto Slide every 3 seconds
    let slideIndex = 0;
    const totalSlides = images.length;

    setInterval(() => {
      slideIndex++;
      sliderWrapper.style.transition = "transform 0.5s ease-in-out";
      sliderWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;

      // If we reached the clone (visually the first image)
      if (slideIndex === totalSlides) {
        // Wait for transition to finish (500ms), then instantly reset to start
        setTimeout(() => {
          sliderWrapper.style.transition = "none";
          slideIndex = 0;
          sliderWrapper.style.transform = "translateX(0)";
        }, 500);
      }
    }, 3000);
  };

  initSlider("sliderWrapper", projectImages);
  initSlider("sliderWrapper2", jobProjectImages);

  // Button Click Listeners
  document.getElementById("viewProjectButton").addEventListener("click", () => {
    window.open(tripProjectLink, "_blank");
  });

  document.getElementById("seekerBtn").addEventListener("click", () => {
    window.open(seekerLink, "_blank");
  });

  document.getElementById("recruiterBtn").addEventListener("click", () => {
    window.open(recruiterLink, "_blank");
  });
});
