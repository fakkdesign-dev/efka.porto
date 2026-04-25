/* ================================================
   EFKA PORTFOLIO - script.js Part 1
   Base Functions, Cursor, Language, Navigation
   ================================================ */

// ===== CONFIGURATION =====
const CONFIG = {
    slideSpeed: 600,
    scrollThreshold: 50,
    animationOffset: 100,
    cursorFollowSpeed: 0.1
};

// ===== LANGUAGE TRANSLATIONS =====
const translations = {
    id: {
        // Navigation
        'nav.home': 'Home',
        'nav.gallery': 'Gallery',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.badge': 'Welcome to My Universe',
        'hero.title1': 'Creative',
        'hero.title2': 'Designer',
        'hero.title3': '& Visual Artist',
        'hero.subtitle': 'Halo! Aku EFKA, seorang creative designer yang passionate dalam mengubah ide menjadi visual yang epik dan memorable. Ready untuk collaborate dan buat sesuatu yang luar biasa bareng-sama? ✨🔥',
        'hero.cta1': 'Lihat Portfolio',
        'hero.cta2': 'Hubungi Aku',
        'hero.stat1': 'Projects Selesai',
        'hero.stat2': 'Tahun Pengalaman',
        'hero.stat3': 'Kreativitas',
        'hero.scroll': 'Geser ke kanan →',
        
        // Gallery
        'gallery.tag': 'Portfolio',
        'gallery.title': 'Featured <span class="highlight">Projects</span>',
        'gallery.desc': 'Nih beberapa hasil kreasi aku~ Geser ke kanan atau klik tombolnya buat lihat lebih banyak ya! ✨📸',
        'gallery.slideCaption': 'Geser ke kanan untuk lihat lebih banyak →',
        'gallery.slide1.label': 'Branding & Identity',
        'gallery.slide2.label': 'Digital Art & Illustration',
        'gallery.slide3.label': 'UI/UX & Web Design',
        'gallery.slide4.label': 'Print & Editorial',
        
        // About
        'about.tag': 'About Me',
        'about.title': 'Hi, I\'m <span class="highlight">EFKA</span>!',
        'about.text1': 'Aku adalah seorang creative designer yang vibes-nya selalu positive dan full of ideas! Dari kecil udah suka gambar dan sekarang berhasil monetize passion aku lewat design 🎨✨',
        'about.text2': 'Spesialisasi aku di branding, UI/UX design, digital art, dan apapun yang berbau visual creative. Aku percaya design yang bagus itu yang nggak cuma cantik, tapi juga bisa storytelling dan solve problems 💪🔥',
        'about.skillsTitle': 'Skills & Tools:',
        'about.cta': 'Yuk Kerjasama!',
        
        // Contact
        'contact.tag': 'Get In Touch',
        'contact.title': 'Let\'s Create <span class="highlight">Together!</span>',
        'contact.desc': 'Punya project yang mau direalisasikan? Atau cuma mau ngobrol? Jangan sungkan buat reach out ya! Aku always open untuk collaborate dan diskusi ✨🤙',
        'contact.whatsapp': 'WhatsApp',
        'contact.email': 'Email',
        'contact.instagram': 'Instagram',
        
        // Footer
        'footer.tagline': 'Creating magic, one pixel at a time ✨ Made with 💜 and too much kopi ☕',
        'footer.closing': '© 2024 EFKA Design. No cap, all rights reserved 🔥💻',
        'footer.genz': 'built with ☕ + 🎵 + late night coding session 🌙✨'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.gallery': 'Gallery',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.badge': 'Welcome to My Universe',
        'hero.title1': 'Creative',
        'hero.title2': 'Designer',
        'hero.title3': '& Visual Artist',
        'hero.subtitle': 'Hey there! I\'m EFKA, a creative designer who\'s passionate about turning ideas into epic and memorable visuals. Ready to collaborate and create something amazing together? ✨🔥',
        'hero.cta1': 'View Portfolio',
        'hero.cta2': 'Contact Me',
        'hero.stat1': 'Projects Completed',
        'hero.stat2': 'Years Experience',
        'hero.stat3': 'Creativity',
        'hero.scroll': 'Swipe right →',
        
        // Gallery
        'gallery.tag': 'Portfolio',
        'gallery.title': 'Featured <span class="highlight">Projects</span>',
        'gallery.desc': 'Here are some of my creations~ Swipe right or click the buttons to see more! ✨📸',
        'gallery.slideCaption': 'Swipe right to see more →',
        'gallery.slide1.label': 'Branding & Identity',
        'gallery.slide2.label': 'Digital Art & Illustration',
        'gallery.slide3.label': 'UI/UX & Web Design',
        'gallery.slide4.label': 'Print & Editorial',
        
        // About
        'about.tag': 'About Me',
        'about.title': 'Hi, I\'m <span class="highlight">EFKA</span>!',
        'about.text1': 'I\'m a creative designer with always positive vibes and full of ideas! Since I was a kid, I loved drawing and now I\'ve successfully monetized my passion through design 🎨✨',
        'about.text2': 'My specializations are branding, UI/UX design, digital art, and anything visual creative. I believe good design is not just beautiful, but also able to tell stories and solve problems 💪🔥',
        'about.skillsTitle': 'Skills & Tools:',
        'about.cta': 'Let\'s Collaborate!',
        
        // Contact
        'contact.tag': 'Get In Touch',
        'contact.title': 'Let\'s Create <span class="highlight">Together!</span>',
        'contact.desc': 'Have a project you want to realize? Or just want to chat? Feel free to reach out! I\'m always open for collaboration and discussion ✨🤙',
        'contact.whatsapp': 'WhatsApp',
        'contact.email': 'Email',
        'contact.instagram': 'Instagram',
        
        // Footer
        'footer.tagline': 'Creating magic, one pixel at a time ✨ Made with 💜 and too much coffee ☕',
        'footer.closing': '© 2024 EFKA Design. No cap, all rights reserved 🔥💻',
        'footer.genz': 'built with ☕ + 🎵 + late night coding session 🌙✨'
    }
};

// ===== DOM ELEMENTS =====
let cursorFollower = document.querySelector('.cursor-follower');
let cursorDot = document.querySelector('.cursor-dot');
let langBtns = document.querySelectorAll('.lang-btn');
let navLinks = document.querySelectorAll('.nav-link');
let header = document.querySelector('.header');
let menuToggle = document.querySelector('.menu-toggle');

// ===== CUSTOM CURSOR =====
class CustomCursor {
    constructor() {
        this.pos = { x: 0, y: 0 };
        this.targetPos = { x: 0, y: 0 };
        this.init();
    }
    
    init() {
        if (!cursorFollower || !cursorDot) return;
        
        document.addEventListener('mousemove', (e) => {
            this.targetPos.x = e.clientX;
            this.targetPos.y = e.clientY;
        });
        
        // Hover effect for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .photo-card, .contact-card, .skill-tag');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorFollower.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursorFollower.classList.remove('hover');
            });
        });
        
        this.animate();
    }
    
    animate() {
        // Smooth follow with lerp
        this.pos.x += (this.targetPos.x - this.pos.x) * CONFIG.cursorFollowSpeed;
        this.pos.y += (this.targetPos.y - this.pos.y) * CONFIG.cursorFollowSpeed;
        
        cursorFollower.style.left = this.pos.x + 'px';
        cursorFollower.style.top = this.pos.y + 'px';
        
        cursorDot.style.left = this.targetPos.x + 'px';
        cursorDot.style.top = this.targetPos.y + 'px';
        
        requestAnimationFrame(() => this.animate());
    }
}

// ===== LANGUAGE SWITCHER =====
class LanguageSwitcher {
    constructor() {
        this.currentLang = 'id';
        this.init();
    }
    
    init() {
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    }
    
    switchLanguage(lang) {
        this.currentLang = lang;
        
        // Update active button
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Update document language
        document.documentElement.lang = lang;
        
        // Translate all elements
        const elements = document.querySelectorAll('[data-text]');
        elements.forEach(el => {
            const key = el.dataset.text;
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Store preference
        localStorage.setItem('efka-lang', lang);
    }
    
    loadSavedLanguage() {
        const savedLang = localStorage.getItem('efka-lang');
        if (savedLang && translations[savedLang]) {
            this.switchLanguage(savedLang);
        }
    }
}

// ===== HEADER SCROLL EFFECT =====
class HeaderScroll {
    constructor() {
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }
    
    handleScroll() {
        const scrollY = window.scrollY;
        
        if (scrollY > CONFIG.scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active nav link
        this.updateActiveNav();
    }
    
    updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + sectionId);
                });
            }
        });
    }
}

// ===== MOBILE NAVIGATION =====
class MobileNavigation {
    constructor() {
        this.isOpen = false;
        this.init();
    }
    
    init() {
        if (!menuToggle) return;
        
        menuToggle.addEventListener('click', () => {
            this.toggle();
        });
        
        // Close on nav link click
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-overlay .nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.close();
            });
        });
    }
    
    toggle() {
        this.isOpen ? this.close() : this.open();
    }
    
    open() {
        this.isOpen = true;
        menuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Create overlay if not exists
        let overlay = document.querySelector('.mobile-nav-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'mobile-nav-overlay active';
            
            // Clone nav links
            const navContainer = document.createElement('div');
            navContainer.style.display = 'flex';
            navContainer.style.flexDirection = 'column';
            navContainer.style.alignItems = 'center';
            navContainer.style.gap = '30px';
            
            navLinks.forEach(link => {
                const clonedLink = link.cloneNode(true);
                clonedLink.classList.add('mobile-link');
                clonedLink.style.fontSize = '1.5rem';
                clonedLink.style.fontFamily = 'var(--font-display)';
                clonedLink.addEventListener('click', () => this.close());
                navContainer.appendChild(clonedLink);
            });
            
            overlay.appendChild(navContainer);
            document.body.appendChild(overlay);
        } else {
            overlay.classList.add('active');
        }
    }
    
    close() {
        this.isOpen = false;
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
        
        const overlay = document.querySelector('.mobile-nav-overlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
    }
}

// ===== SMOOTH SCROLL =====
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                this.scrollTo(href);
            });
        });
        
        // Hero CTA buttons
        const ctaLinks = document.querySelectorAll('.hero-cta .btn');
        ctaLinks.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const href = btn.getAttribute('href');
                if (href.startsWith('#')) {
                    this.scrollTo(href);
                }
            });
        });
    }
    
    scrollTo(href) {
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

// ===== LOADING SCREEN =====
class LoadingScreen {
    constructor() {
        this.loading = document.querySelector('.loading');
        this.init();
    }
    
    init() {
        if (!this.loading) return;
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hide();
            }, 2000);
        });
    }
    
    hide() {
        this.loading.classList.add('hidden');
    }
}
/* ================================================
   EFKA PORTFOLIO - script.js Part 2
   Gallery Slider, Animations, Init
   ================================================ */

// ===== GALLERY SLIDER =====
class GallerySlider {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 4;
        this.isAnimating = false;
        this.init();
    }
    
    init() {
        this.sliderTrack = document.querySelector('.slider-track');
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.indicators = document.querySelectorAll('.slide-indicator');
        
        if (!this.sliderTrack) return;
        
        this.totalSlides = this.slides.length;
        this.bindEvents();
        this.updateButtons();
        
        // Touch support
        this.initTouchEvents();
    }
    
    bindEvents() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }
    
    initTouchEvents() {
        let startX = 0;
        let endX = 0;
        
        this.sliderTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.sliderTrack.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });
    }
    
    prevSlide() {
        if (this.isAnimating) return;
        
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.goToSlide(this.currentSlide);
        }
    }
    
    nextSlide() {
        if (this.isAnimating) return;
        
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
            this.goToSlide(this.currentSlide);
        }
    }
    
    goToSlide(index) {
        if (this.isAnimating || index < 0 || index >= this.totalSlides) return;
        
        this.isAnimating = true;
        this.currentSlide = index;
        
        // Move slider
        const translateX = -index * 100;
        this.sliderTrack.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        this.indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        
        // Update buttons
        this.updateButtons();
        
        // Reset animation lock
        setTimeout(() => {
            this.isAnimating = false;
        }, CONFIG.slideSpeed);
    }
    
    updateButtons() {
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentSlide === 0;
        }
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
        }
    }
}

// ===== SCROLL ANIMATIONS =====
class ScrollAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        // Create intersection observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Stagger animation for grid items
                    if (entry.target.classList.contains('photo-grid')) {
                        const items = entry.target.querySelectorAll('.photo-card');
                        items.forEach((item, index) => {
                            item.style.animationDelay = `${index * 0.05}s`;
                            item.classList.add('visible');
                        });
                    }
                    
                    if (entry.target.classList.contains('skills-grid')) {
                        const items = entry.target.querySelectorAll('.skill-tag');
                        items.forEach((item, index) => {
                            item.style.animationDelay = `${index * 0.05}s`;
                            item.classList.add('visible');
                        });
                    }
                }
            });
        }, observerOptions);
        
        // Observe elements
        const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .photo-grid, .skills-grid');
        animatedElements.forEach(el => observer.observe(el));
    }
}

// ===== PHOTO CARD HOVER EFFECT =====
class PhotoCardEffect {
    constructor() {
        this.init();
    }
    
    init() {
        const photoCards = document.querySelectorAll('.photo-card');
        
        photoCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.zIndex = '10';
            });
            
            card.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    card.style.zIndex = '1';
                }, 300);
            });
        });
    }
}

// ===== PARALLAX EFFECT (OPTIONAL) =====
class ParallaxEffect {
    constructor() {
        this.init();
    }
    
    init() {
        const heroVisual = document.querySelector('.hero-visual');
        if (!heroVisual) return;
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const rate = scrollY * 0.3;
            
            if (scrollY < 1000) {
                heroVisual.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

// ===== SCROLL INDICATOR ANIMATION =====
class ScrollIndicatorAnimation {
    constructor() {
        this.init();
    }
    
    init() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (!scrollIndicator) return;
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }
}

// ===== CONTACT CARDS ANIMATION =====
class ContactCardsAnimation {
    constructor() {
        this.init();
    }
    
    init() {
        const contactCards = document.querySelectorAll('.contact-card');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, observerOptions);
        
        contactCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }
}

// ===== FLOATING ELEMENTS ANIMATION =====
class FloatingElementsAnimation {
    constructor() {
        this.init();
    }
    
    init() {
        const floatElements = document.querySelectorAll('.float-element');
        
        floatElements.forEach((el, index) => {
            // Random animation delay
            const delay = Math.random() * 2;
            el.style.animationDelay = `${delay}s`;
            
            // Random duration
            const duration = 3 + Math.random() * 2;
            el.style.animationDuration = `${duration}s`;
        });
    }
}

// ===== PRELOADER FOR IMAGES =====
class ImagePreloader {
    constructor() {
        this.init();
    }
    
    init() {
        const images = document.querySelectorAll('img');
        let loadedCount = 0;
        
        images.forEach(img => {
            if (img.complete) {
                loadedCount++;
            } else {
                img.addEventListener('load', () => {
                    loadedCount++;
                    this.checkAllLoaded(loadedCount, images.length);
                });
                
                img.addEventListener('error', () => {
                    loadedCount++;
                    this.checkAllLoaded(loadedCount, images.length);
                });
            }
        });
        
        this.checkAllLoaded(loadedCount, images.length);
    }
    
    checkAllLoaded(loaded, total) {
        if (loaded >= total) {
            document.body.classList.add('images-loaded');
        }
    }
}

// ===== PERFORMANCE OPTIMIZATION =====
class PerformanceOptimization {
    constructor() {
        this.init();
    }
    
    init() {
        // Debounce scroll events
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.onScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
    onScroll() {
        // Lazy load images that are not in viewport
        const images = document.querySelectorAll('img[data-src]');
        
        const observerOptions = {
            root: null,
            rootMargin: '100px',
            threshold: 0
        };
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        }, observerOptions);
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ===== MAIN INITIALIZATION =====
class App {
    constructor() {
        this.init();
    }
    
    init() {
        // Initialize all components
        new CustomCursor();
        new LanguageSwitcher().loadSavedLanguage();
        new HeaderScroll();
        new MobileNavigation();
        new SmoothScroll();
        new LoadingScreen();
        new GallerySlider();
        new ScrollAnimations();
        new PhotoCardEffect();
        new ParallaxEffect();
        new ScrollIndicatorAnimation();
        new ContactCardsAnimation();
        new FloatingElementsAnimation();
        new ImagePreloader();
        new PerformanceOptimization();
        
        // Add loaded class to body
        document.body.classList.add('loaded');
        
        console.log('%c✨ EFKA Portfolio Loaded!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
        console.log('%cDesigned with 💜 by EFKA', 'color: #f472b6; font-size: 14px;');
    }
}

// ===== INITIALIZE APP =====
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

// ===== EXPORT FOR MODULE USE (Optional) =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        App,
        CustomCursor,
        LanguageSwitcher,
        GallerySlider,
        ScrollAnimations
    };
}