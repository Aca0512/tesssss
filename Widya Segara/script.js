// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Animasi scroll untuk artikel
    const articleContainer = document.querySelector('.article-container');
    
    // Intersection Observer untuk animasi scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            }
        });
    }, observerOptions);
    
    observer.observe(articleContainer);
    
    // Modal untuk gambar
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('modalCaption');
    const closeModal = document.querySelector('.close');
    
    // Buka modal ketika gambar di klik
    const images = document.querySelectorAll('.featured-image, .character-img img, .gallery-item img');
    
    images.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });
    
    // Tutup modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Tutup modal ketika klik di luar gambar
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Navigasi mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Smooth scroll untuk tombol CTA
    const exploreBtn = document.getElementById('exploreBtn');
    
    exploreBtn.addEventListener('click', function() {
        articleContainer.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Efek scroll untuk navbar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(5px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Animasi tag hover
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Fitur dark mode toggle (opsional)
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Mode Gelap';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.padding = '10px 15px';
    darkModeToggle.style.background = '#333';
    darkModeToggle.style.color = '#fff';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.borderRadius = '5px';
    darkModeToggle.style.cursor = 'pointer';
    darkModeToggle.style.zIndex = '1000';
    
    document.body.appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            this.textContent = 'Mode Terang';
            document.body.style.backgroundColor = '#1a1a1a';
            document.body.style.color = '#f0f0f0';
            
            const articleContainer = document.querySelector('.article-container');
            if (articleContainer) {
                articleContainer.style.backgroundColor = '#2a2a2a';
                articleContainer.style.color = '#f0f0f0';
            }
        } else {
            this.textContent = 'Mode Gelap';
            document.body.style.backgroundColor = '#f9f9f9';
            document.body.style.color = '#333';
            
            const articleContainer = document.querySelector('.article-container');
            if (articleContainer) {
                articleContainer.style.backgroundColor = '#fff';
                articleContainer.style.color = '#333';
            }
        }
    });
});