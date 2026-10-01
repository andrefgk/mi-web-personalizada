// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Initial Hero Animations
const tl = gsap.timeline();

tl.from(".hero-img", {
    scale: 1.2,
    opacity: 0,
    duration: 2,
    ease: "power3.out"
})
.from(".hero-content h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
}, "-=1.5")
.from(".hero-content p", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
}, "-=1.2")
.from(".hero-content a", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
}, "-=1");

// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1,
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    }
});

// Section Header Animation
gsap.from(".section-header", {
    scrollTrigger: {
        trigger: "#sports",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Swiper Cards Entrance Animation
gsap.from(".swiper-slide", {
    scrollTrigger: {
        trigger: "#sports",
        start: "top 60%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.2)"
});

// Stats Counter Animation
const statsSection = document.getElementById('stats');

gsap.from(".stat-item", {
    scrollTrigger: {
        trigger: statsSection,
        start: "top 80%",
        onEnter: () => startCounters()
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
});

function startCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
}
