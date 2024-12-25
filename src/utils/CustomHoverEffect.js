document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".custom-hover-bg");

  elements.forEach((element) => {
    let fadeInOutInterval;

    const fadeInOut = () => {
      let opacity = 0;
      let increasing = true;

      fadeInOutInterval = setInterval(() => {
        if (increasing) {
          opacity += 0.01;
          if (opacity >= 1) {
            opacity = 1;
            increasing = false;
          }
        } else {
          opacity -= 0.01;
          if (opacity <= 0) {
            opacity = 0;
            increasing = true;
          }
        }

        element.style.opacity = opacity;
      }, 20);
    };

    element.addEventListener("mouseenter", () => {
      clearInterval(fadeInOutInterval);
      fadeInOut();
    });

    element.addEventListener("mouseleave", () => {
      clearInterval(fadeInOutInterval);
      element.style.opacity = 1;
    });
  });
});
