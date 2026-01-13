// Tab Switching Logic
function openTab(tabName) {
    // Hide all service grids
    const grids = document.querySelectorAll('.service-grid');
    grids.forEach(grid => {
        grid.style.display = 'none';
        grid.classList.remove('active');
    });

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show the selected grid
    const selectedGrid = document.getElementById(tabName);
    if (selectedGrid) {
        selectedGrid.style.display = 'grid';
        
        // Small timeout to allow display:block to apply before opacity transition
        setTimeout(() => {
            selectedGrid.classList.add('active');
        }, 10);
    }

    // Add active class to clicked button
    // Find the button that calls this specific function with this argument is simpler by event,
    // but here we just loop to find the one that matches logic or use event delegation.
    // Simpler: iterate buttons and see if inner text matches or pass event.
    // Let's just re-select based on click - actually, we can improve the onclick in HTML to pass 'this'
    // but let's just use event.target logic if we attached listeners in JS.
    // Since we used inline onclick, we'll brute force the active class update based on index or just simple toggle.
    
    // Actually, let's just find the button that corresponds.
    // Simplified approach: The buttons are static.
    if (tabName === 'family') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
    }
}

// Smooth Scrolling
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80, // Offset for fixed header
            behavior: 'smooth'
        });
    }
}

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(12, 18, 32, 0.95)';
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'rgba(12, 18, 32, 0.85)';
        header.style.boxShadow = 'none';
    }
});

// Form Handling
function handleFormSubmit(event) {
    event.preventDefault();
    
    const btn = event.target.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = 'Enviando...';
    btn.disabled = true;

    // Coletar dados do formulário
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        type: document.getElementById('type').value,
        message: document.getElementById('message').value
    };

    // Enviar email usando API do Vercel
    fetch('/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Obrigado! Sua solicitação foi recebida. Entraremos em contato em breve para agendar uma consultoria.');
            event.target.reset();
        } else {
            throw new Error(data.error || 'Erro ao enviar');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente por email: wellington.aquino@lorventcapital.com.br');
    })
    .finally(() => {
        btn.innerText = originalText;
        btn.disabled = false;
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize elements hidden for fade-in
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .pillar-item, .manifesto-text, .manifesto-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize partners slider
    initPartnersSlider();
});

// Partners Slider
function initPartnersSlider() {
    const slider = document.querySelector('.partners-slider');
    if (!slider) return;
    
    const track = slider.querySelector('.partners-track');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    const originalLogos = track.querySelectorAll('.partner-logo');
    
    if (originalLogos.length === 0) return;
    
    // Duplicar logos para criar loop infinito
    originalLogos.forEach(logo => {
        const clone = logo.cloneNode(true);
        track.appendChild(clone);
    });
    
    const allLogos = track.querySelectorAll('.partner-logo');
    const totalLogos = originalLogos.length;
    
    let currentIndex = 0;
    let logosPerView = 4; // Desktop: 4 logos
    let slideWidth = 0;
    let autoPlayInterval = null;
    const autoPlayDelay = 2000; // 2 segundos
    let isTransitioning = false;
    
    // Calculate slide width based on viewport
    function calculateSlideWidth() {
        const containerWidth = slider.offsetWidth;
        const gap = 32; // 2rem = 32px
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            logosPerView = 2;
        } else {
            logosPerView = window.innerWidth <= 1024 ? 3 : 4;
        }
        
        slideWidth = (containerWidth / logosPerView) + gap;
    }
    
    function updateSlider() {
        const translateX = -currentIndex * slideWidth;
        track.style.transform = `translateX(${translateX}px)`;
        
        // Botões sempre habilitados
        prevBtn.style.opacity = '1';
        nextBtn.style.opacity = '1';
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
    
    function slideNext() {
        if (isTransitioning) return;
        
        // Remove transição para auto-play
        track.style.transition = 'none';
        
        currentIndex++;
        updateSlider();
        
        // Quando chegar ao fim das logos originais, resetar para o início
        if (currentIndex >= totalLogos) {
            isTransitioning = true;
            // Reset instantâneo
            currentIndex = 0;
            updateSlider();
            // Força reflow
            void track.offsetWidth;
            isTransitioning = false;
        }
    }
    
    function slidePrev() {
        if (isTransitioning) return;
        
        currentIndex--;
        
        // Se estiver no início, vai para o fim das logos originais
        if (currentIndex < 0) {
            isTransitioning = true;
            track.style.transition = 'none';
            currentIndex = totalLogos - 1;
            updateSlider();
            void track.offsetWidth;
            track.style.transition = '';
            isTransitioning = false;
        } else {
            updateSlider();
        }
    }
    
    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(slideNext, autoPlayDelay);
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        // Restaura transição para navegação manual
        track.style.transition = '';
        slideNext();
        stopAutoPlay();
        startAutoPlay(); // Restart after manual navigation
    });
    
    prevBtn.addEventListener('click', () => {
        // Restaura transição para navegação manual
        track.style.transition = '';
        slidePrev();
        stopAutoPlay();
        startAutoPlay(); // Restart after manual navigation
    });
    
    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);
    
    // Recalculate on resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            calculateSlideWidth();
            // Reset to first slide if current position is invalid
            if (currentIndex >= totalLogos) {
                currentIndex = 0;
            }
            updateSlider();
        }, 250);
    });
    
    // Initialize
    calculateSlideWidth();
    updateSlider();
    startAutoPlay();
}
