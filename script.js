 window.addEventListener("scroll", function () {
    const header = document.querySelector(".site-header");
    header.classList.toggle("shrink", window.scrollY > 50);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.querySelector(".timeline");
    const items = document.querySelectorAll(".timeline-item");

    function checkVisibility() {
      const windowHeight = window.innerHeight;
      const timelineTop = timeline.getBoundingClientRect().top;

      if (timelineTop < windowHeight - 100) {
        timeline.classList.add("visible");
      }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // check on load
  });