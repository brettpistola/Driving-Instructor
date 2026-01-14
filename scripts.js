 // Hamburger menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    menuToggle.addEventListener('click', function() {
      const isActive = this.classList.toggle('active');
      navLinks.classList.toggle('active');
      body.classList.toggle('menu-open');
      this.setAttribute('aria-expanded', isActive);
    });

    // Close menu when clicking on a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = menuToggle.contains(event.target) || navLinks.contains(event.target);

      if (!isClickInside && navLinks.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 1024) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
