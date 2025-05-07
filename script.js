document.querySelector('.scroll-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const marqueeTrack = document.querySelector('.marquee-track');
    const skills = marqueeTrack.querySelectorAll('.skill');
    
    // Clone all skills for seamless loop
    skills.forEach(skill => {
        const clone = skill.cloneNode(true);
        marqueeTrack.appendChild(clone);
    });
    
    // Optional: Calculate animation duration based on width
    const trackWidth = marqueeTrack.scrollWidth / 2;
    document.documentElement.style.setProperty('--track-width', `${trackWidth}px`);
});


// Inject keyframes dynamically
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes marqueeAnimation {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`, styleSheet.cssRules.length);





