// Main JavaScript for Several Energy A Coruña Landing Page

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Services Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
    
    // File Upload
    const fileInputs = document.querySelectorAll('input[type="file"]');
    
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            const fileSelectedText = this.parentElement.querySelector('.file-selected');
            if (fileSelectedText) {
                if (this.files.length > 0) {
                    fileSelectedText.textContent = this.files[0].name;
                } else {
                    fileSelectedText.textContent = 'Ningún archivo seleccionado';
                }
            }
        });
    });
    
    // Testimonials Slider
    let currentSlide = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    function showSlide(index) {
        testimonials.forEach(slide => slide.style.display = 'none');
        
        if (index >= testimonials.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = testimonials.length - 1;
        } else {
            currentSlide = index;
        }
        
        testimonials[currentSlide].style.display = 'block';
    }
    
    if (testimonials.length > 0) {
        showSlide(currentSlide);
        
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
            nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        }
    }
    
    // Form Submission
    const heroForm = document.getElementById('hero-form');
    const contactForm = document.getElementById('contact-form');
    
    if (heroForm) {
        heroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real implementation, this would send the form data to a server
            // For now, we'll just show an alert
            alert('¡Gracias por tu interés! Te contactaremos a la brevedad para analizar tu factura y ofrecerte las mejores opciones de ahorro.');
            this.reset();
            const fileSelectedText = this.querySelector('.file-selected');
            if (fileSelectedText) {
                fileSelectedText.textContent = 'Ningún archivo seleccionado';
            }
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real implementation, this would send the form data to a server
            // For now, we'll just show an alert
            alert('¡Gracias por tu mensaje! Nuestro equipo de A Coruña te responderá a la brevedad.');
            this.reset();
            const fileSelectedText = this.querySelector('.file-selected');
            if (fileSelectedText) {
                fileSelectedText.textContent = 'Ningún archivo seleccionado';
            }
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        mobileMenuToggle.classList.remove('active');
                    }
                }
            }
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector('.main-nav a[href="#' + sectionId + '"]')?.classList.add('active');
            } else {
                document.querySelector('.main-nav a[href="#' + sectionId + '"]')?.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Initialize the page
    highlightNavLink();
});
