document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menubar = document.querySelector('.menubar');
    const nav = document.querySelector('nav');

    // Toggling menu and hamburger icon transformation
    hamburger.addEventListener('click', function () {
        menubar.classList.toggle('active');
        hamburger.classList.toggle('active'); // Toggle the cross transformation
    });

    // Reset the hamburger menu when resizing the window beyond 1100px
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1100) {
            menubar.classList.remove('active');
            hamburger.classList.remove('active'); // Reset hamburger icon
        }
    });

    // Add sticky class to navbar on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menubar = document.querySelector('.menubar');
    const nav = document.querySelector('nav');

    // Toggling menu and hamburger icon transformation
    hamburger.addEventListener('click', function () {
        menubar.classList.toggle('active');
        hamburger.classList.toggle('active'); // Toggle the cross transformation
    });

    // Reset the hamburger menu when resizing the window beyond 1100px
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1100) {
            menubar.classList.remove('active');
            hamburger.classList.remove('active'); // Reset hamburger icon
        }
    });

    // Add sticky class to navbar on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
});
 // JavaScript for active navbar link
 const sections = document.querySelectorAll("section");
 const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

 function changeNavOnScroll() {
   let index = sections.length;
   while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
   navLinks.forEach((link) => link.classList.remove("active"));
   navLinks[index].classList.add("active");
 }

 window.addEventListener("scroll", changeNavOnScroll);
 window.addEventListener("resize", changeNavOnScroll);
 changeNavOnScroll(); // Trigger on load

 document
   .getElementById("sidebarToggle")
   .addEventListener("click", function () {
     document.getElementById("sidebar").classList.add("open");
   });

 document
   .getElementById("closeSidebar")
   .addEventListener("click", function () {
     document.getElementById("sidebar").classList.remove("open");
   });

 // Close sidebar when clicking outside of it
 document.addEventListener("click", function (event) {
   var isClickInsideSidebar = document
     .getElementById("sidebar")
     .contains(event.target);
   var isClickInsideToggle = document
     .getElementById("sidebarToggle")
     .contains(event.target);

   if (!isClickInsideSidebar && !isClickInsideToggle) {
     document.getElementById("sidebar").classList.remove("open");
   }
 });

 // Close sidebar when clicking on a link in the sidebar
 document.querySelectorAll(".sidebar .nav-link").forEach((link) => {
   link.addEventListener("click", function () {
     document.getElementById("sidebar").classList.remove("open");
   });
 });

 // Get the navbar element
 const navbar = document.querySelector(".navbar");

 // Function to handle scroll event
 const handleScroll = () => {
   if (window.scrollY > 0) {
     navbar.classList.add("scrolled");
   } else {
     navbar.classList.remove("scrolled");
   }
 };

 // Attach scroll event listener
 window.addEventListener("scroll", handleScroll);

 var myCarousel = document.querySelector("#testimonial-carousel");
 var carousel = new bootstrap.Carousel(myCarousel, {
   interval: 5000, // Optional: adjust auto-slide timing
   pause: "hover", // Optional: pause on hover
 });
 //For href link
document.querySelectorAll('nav ul li a').forEach(anchor => {
 anchor.addEventListener('click', function(e) {
   // Prevent the default action
   e.preventDefault();
 
   // Get the target section from the href attribute
   const targetId = this.getAttribute('href').substring(1);
 
   // Scroll to the target section
   document.getElementById(targetId).scrollIntoView({
       behavior:"smooth"
   });
 });
 });
 document.querySelectorAll('nav  a').forEach(anchor => {
 anchor.addEventListener('click', function(e) {
   // Prevent the default action
   e.preventDefault();
 
   // Get the target section from the href attribute
   const targetId = this.getAttribute('href').substring(1);
 
   // Scroll to the target section
   document.getElementById(targetId).scrollIntoView({
       behavior:"smooth"
   });
 });
 });
 
 document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
 anchor.addEventListener('click', function(e) {
   // Prevent the default action
   e.preventDefault();
 
   // Get the target section from the href attribute
   const targetId = this.getAttribute('href').substring(1);
 
   // Scroll to the target section
   document.getElementById(targetId).scrollIntoView({
       behavior:"smooth"
   });
 });
 });
 document.querySelectorAll('.footer ul li a').forEach(anchor => {
 anchor.addEventListener('click', function(e) {
   // Prevent the default action
   e.preventDefault();
 
   // Get the target section from the href attribute
   const targetId = this.getAttribute('href').substring(1);
 
   // Scroll to the target section
   document.getElementById(targetId).scrollIntoView({
       behavior:"smooth"
   });
 });
 });
 document.querySelectorAll('#copy-right a').forEach(anchor => {
 anchor.addEventListener('click', function(e) {
   // Prevent the default action
   e.preventDefault();
 
   // Get the target section from the href attribute
   const targetId = this.getAttribute('href').substring(1);
 
   // Scroll to the target section
   document.getElementById(targetId).scrollIntoView({
       behavior:"smooth"
   });
    });
    });