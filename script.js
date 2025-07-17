document.addEventListener("DOMContentLoaded", function () {
  // Tab Switching
  let tabLinks = document.querySelectorAll(".tab-links");
  let tabContents = document.querySelectorAll(".tab-contents");

  tabLinks.forEach(link => {
    link.addEventListener("click", function () {
      let tabname = this.getAttribute("data-tab");

      tabLinks.forEach(link => link.classList.remove("active-link"));
      tabContents.forEach(content => content.classList.remove("active-tab"));

      this.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    });
  });

  // Smooth Scrolling for Nav Links
  document.querySelectorAll('nav a, .sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      let target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    });
  });

  // Project Box Expand/Collapse
  const works = document.querySelectorAll('.work');
  works.forEach(work => {
    const details = work.querySelector('.work-details');
    const closeBtn = work.querySelector('.close-work');

    work.addEventListener('click', function (e) {
      if (e.target.classList.contains('close-work')) return;
      document.querySelectorAll('.work.expanded').forEach(w => {
        if (w !== work) w.classList.remove('expanded');
      });
      work.classList.toggle('expanded');
    });

    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      work.classList.remove('expanded');
    });
  });

  // Contact Form Submission to Google Forms
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSfEdRcNvQW3Drs5c6VsvXH2XZf_iC4uXiEcpfeKLNTdCc0VZw/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    // Show success message manually (Google doesn't send a real response)
    status.textContent = "✅ Message sent successfully!";
    status.style.color = "green";

    // Reset form after short delay
    setTimeout(() => {
      form.reset();
      status.textContent = "";
    }, 3000);
  });
});

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

/* #For rcramble letters
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

  document.querySelectorAll('.scramble').forEach(el => {
    el.addEventListener('mouseenter', () => {
      let iteration = 0;
      const originalText = el.innerText;
      const textLength = originalText.length;

      const interval = setInterval(() => {
        el.innerText = originalText
          .split("")
          .map((char, index) => {
            if (index < iteration) return originalText[index];
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iteration >= textLength) clearInterval(interval);
        iteration += 1 / 2; // Speed of animation (lower = slower)
      }, 50); // Speed of scrambling
    });
  });
*/
