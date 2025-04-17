document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 2 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s infinite linear`;
        
        particlesContainer.appendChild(particle);
        
        const keyframes = `
            @keyframes float {
                0% {
                    transform: translate(0, 0);
                }
                25% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                }
                50% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                }
                75% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                }
                100% {
                    transform: translate(0, 0);
                }
            }
        `;
        
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
    }
    
    document.addEventListener('mousemove', function(e) {
        const cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
        document.body.appendChild(cursorGlow);
        
        setTimeout(() => {
            cursorGlow.remove();
        }, 1000);
    });
});
