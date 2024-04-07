document.addEventListener('DOMContentLoaded', () => {
  
    const contactUsSection = document.querySelector('.contact-us'); // Replace with your selector for the contact-us section
    const aboutUs = document.querySelector('#aboutUs');
    const mailboxIcon = document.querySelector('.contact-us .contact-us-icon'); // Replace with your selector for the mailbox icon
    const aboutusicon = document.querySelector('.about-us-icon');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { 
            mailboxIcon.classList.add('animated-mail-icon'); // Add class for animation
        } else {
          mailboxIcon.classList.remove('animated-mail-icon'); // Remove class for animation
        }
      });
    });

    const aboutUsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutusicon.classList.add('spin'); // Add class for about-us animation (replace with your animation class name)
        } else {
          aboutusicon.classList.remove('spin'); // Remove class for about-us animation
        }
      });
    });
  
    observer.observe(contactUsSection); // Observe the contact-us section
    aboutUsObserver.observe(aboutUs); // Observe the about-us section

    const navLinks = document.querySelectorAll(".nav-item a");

    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default jumping behavior
        document.querySelectorAll(".mobile-nav .nav-items .nav-item").forEach(li => li.classList.remove("btn-pressed"));

    // Add btn-pressed class to the clicked link's parent li
    this.parentNode.classList.add("btn-pressed");
    
        const targetSection = document.getElementById(this.getAttribute("href").slice(1));
        targetSection.scrollIntoView({ behavior: "smooth" });
    
        // Check if on a mobile device
        if (isMobile()) {          
          closeMobileNav();
        }
      });
    });

    const scrollToTopButton = document.querySelector('.scroll-top-button');

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > 200) {  // Show button after scrolling 100px down
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const mobileMenuButton = document.querySelector('.mobile-menu-button-container');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');

mobileMenuButton.addEventListener('click', () => {
  if (mobileNav.classList.contains('close')) {
    mobileNav.classList.remove('close');
    mobileNav.classList.remove('popupclose-animation');    
    mobileNav.classList.add('open');
    mobileNav.classList.add('animate-clothwave');
    overlay.classList.remove('close');
    overlay.classList.add('open');
  } else {
    mobileNav.classList.remove('open');
    mobileNav.classList.add('popupclose-animation');  
    mobileNav.classList.remove('animate-clothwave');
    mobileNav.classList.add('close');
    overlay.classList.remove('open');
    overlay.classList.add('close');
  }
});

const closeButton = document.querySelector('.close-btn');
closeButton.addEventListener( 'click', () => {
  closeMobileNav();
});

// Function to detect mobile device (replace with your preferred method)
function isMobile() {
  // You can replace this with your preferred method to detect mobile devices
  // Here's a simple example using window.innerWidth
  return window.innerWidth <= 768; // Adjust the width threshold as needed
}

function closeMobileNav(){
  const mobileNav = document.querySelector('.mobile-nav');
          const overlay = document.querySelector('.overlay');
    
          mobileNav.classList.remove('open');  // Remove open class with transition
          mobileNav.classList.add('popupclose-animation');
          overlay.classList.remove('open');  // Remove open class with transition
          
          
             // Add transition styles directly (adjust properties and duration as needed)
          mobileNav.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
          overlay.style.transition = 'opacity 0.5s ease-in-out';
    
          // Remove the closing class after the transition completes (adjust duration as needed)
          setTimeout(() => {
            mobileNav.classList.add('close');
            overlay.classList.add('close');
            document.querySelectorAll(".mobile-nav .nav-items .nav-item").forEach(li => li.classList.remove("btn-pressed"));
          }, 900); // Adjust duration for your desired transition time in milliseconds
}


  });


  
