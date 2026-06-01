document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Language Toggle
    const langToggle = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('lang') || 'en'; // Default to English or saved pref

    // Initialize Language
    updateLanguage(currentLang);

    // Inject Footer
    loadFooter();

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'kr' : 'en';
            updateLanguage(currentLang);
            localStorage.setItem('lang', currentLang);
        });
    }

    function loadFooter() {
        const footerPlaceholder = document.getElementById('global-footer');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = `
                <footer>
                    <div class="container">
                        <p>&copy; 2026 Cloud Fluff 9. All rights theoretically reserved.</p>
                    </div>
                </footer>
            `;
        }
    }

    function updateLanguage(lang) {
        // Update text for all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update Toggle Button Text
        if (langToggle) {
            langToggle.textContent = lang === 'en' ? 'KR' : 'EN'; // Show opposite language to switch to, or current? User expects toggle to show current or target?
            // Usually toggle shows what it IS or what it WILL BE. 
            // Design choice: Button says "EN" or "KR" to indicate current or switch?
            // Let's make it show the Target language to switch TO.
            langToggle.textContent = lang === 'en' ? 'KR' : 'EN';
        }

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    // Scroll Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and team members
    document.querySelectorAll('.intro-card, .team-member, .menu-item-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Smooth hover effects for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Close mobile menu when link is clicked
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Highlight Active Navigation Link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else if (currentPath === '' && linkPath === 'index.html') {
            link.classList.add('active');
        }
    });
});

