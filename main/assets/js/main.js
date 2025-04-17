// 创建粒子背景
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // 随机大小 (1-3px)
        const size = Math.random() * 2 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // 随机位置
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // 随机透明度
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // 添加动画
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s infinite linear`;
        
        particlesContainer.appendChild(particle);
        
        // 创建漂浮动画
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
    
    // 添加光标跟随效果
    document.addEventListener('mousemove', function(e) {
        const cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
        document.body.appendChild(cursorGlow);
        
        // 移除旧的光标效果元素
        setTimeout(() => {
            cursorGlow.remove();
        }, 1000);
    });
});