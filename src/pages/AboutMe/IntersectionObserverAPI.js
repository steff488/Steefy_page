const personalInfo = document.getElementById("personal-information");

const education = document.getElementById("education");

const skills = document.getElementById("skills");

function callbackFunction(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.id);
    }
  });
}

const options = {
  rootMargin: "0px",
  treshhold: 1,
};

const observer = new IntersectionObserver(callbackFunction, options);

observer.observe(personalInfo);
observer.observe(education);
observer.observe(skills);
