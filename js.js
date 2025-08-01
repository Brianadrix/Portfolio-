document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('section'); 
  
  function updateActiveOnScroll() {
    let currentSection = '';
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const windowBottom = scrollPos + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    if (windowBottom >= pageHeight - 5) {
      currentSection = 'contact';
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: 'smooth'
        });

        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  window.addEventListener('scroll', updateActiveOnScroll);
  updateActiveOnScroll(); 
});


function sendMail(){
    let parms = {
        name : document.getElementById("name").value, 
        email : document.getElementById("email").value, 
        message : document.getElementById("message").value, 
    }

    emailjs.send("service_dnzno4x","template_mxqc9nu",parms)
        .then(() => {
            alert("Thank you for your message! Your email has been sent successfully, and I’ll be in touch with you shortly.");
            document.querySelector('.contact-form').reset();
        })
        .catch((error) => {
            alert("Failed to send email: " + error.text);
        });
}

  const video = document.querySelector('.video');

  document.addEventListener('mousemove', function (e) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = (e.clientX - centerX) / centerX;
    const offsetY = (e.clientY - centerY) / centerY;

    const rotateY = offsetX * 20;
    const rotateX = -offsetY * 20; 

    video.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });


