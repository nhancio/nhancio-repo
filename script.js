document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const menubar = document.querySelector('.menubar');
  const nav = document.querySelector('nav');
  const navbar = document.querySelector('.navbar'); // Select navbar for scroll effect

  // Toggling menu and hamburger icon transformation
  hamburger?.addEventListener('click', function () {
    menubar?.classList.toggle('active');
    hamburger?.classList.toggle('active'); // Toggle the cross transformation
  });

  // Reset the hamburger menu when resizing the window beyond 1100px
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1100) {
      menubar?.classList.remove('active');
      hamburger?.classList.remove('active'); // Reset hamburger icon
    }
  });

  // Add sticky class to navbar on scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      navbar?.classList.add('scrolled'); // Add 'scrolled' class when the user scrolls
    } else {
      navbar?.classList.remove('scrolled'); // Remove 'scrolled' class when at the top
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger the function on load in case the page is not at the top

  // Smooth scrolling for links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Check if the href is a link to the university
      if (href === "https://learning.nhancio.com/") {
        // Allow default behavior for university link
        return; // Exit the event handler
      }

      // Prevent the default action for all other links
      e.preventDefault();

      // Get the target section from the href attribute
      const targetId = href.substring(1);
      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  // Sidebar functionality (optional if you use a sidebar)
  document.getElementById('sidebarToggle')?.addEventListener('click', function () {
    document.getElementById('sidebar')?.classList.add('open');
  });

  document.getElementById('closeSidebar')?.addEventListener('click', function () {
    document.getElementById('sidebar')?.classList.remove('open');
  });

  // Close sidebar when clicking outside of it
  document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const isClickInsideSidebar = sidebar?.contains(event.target);
    const isClickInsideToggle = document.getElementById('sidebarToggle')?.contains(event.target);

    if (!isClickInsideSidebar && !isClickInsideToggle) {
      sidebar?.classList.remove('open');
    }
  });
});
