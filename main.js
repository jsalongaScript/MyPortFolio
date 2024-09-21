const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};


ScrollReveal().reveal(".header__content h5", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .links", {
  ...scrollRevealOption,
  delay: 2000,
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.view-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('More details about this project will be shown here.');
        });
    });
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulate form submission (AJAX request)
        setTimeout(() => {
            formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;
            contactForm.reset();
        }, 1000);
    });
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            console.log(`Hovering over: ${link.id}`);
        });

        link.addEventListener('click', () => {
            alert(`You clicked on the ${link.id} link!`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const snowContainer = document.getElementById('snowContainer');
  const snowflakesCount = 100; // Number of snowflakes

  for (let i = 0; i < snowflakesCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.width = Math.random() * 10 + 'px';
      snowflake.style.height = snowflake.style.width;
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.top = Math.random() * 100 + 'vh';
      snowflake.style.opacity = Math.random();
      snowflake.style.animationDuration = Math.random() * 10 + 5 + 's';
      snowflake.style.animationDelay = Math.random() * 10 + 's';

      snowContainer.appendChild(snowflake);
  }
});

