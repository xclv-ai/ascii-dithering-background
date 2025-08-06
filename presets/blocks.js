// ASCII Dithering Background - Blocks Preset  
// Modern block pattern using Unicode block characters

(function() {
    'use strict';
    
    const config = {
        chars: [' ', '░', '▒', '▓', '█'],
        fontSize: 10,
        color: '#222222',
        spacing: 10,
        zIndex: -1000,
        opacity: 0.25
    };
    
    if (document.getElementById('ascii-dithering-bg')) return;
    
    const canvas = document.createElement('canvas');
    canvas.id = 'ascii-dithering-bg';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: ${config.zIndex};
        opacity: ${config.opacity};
        pointer-events: none;
    `;
    
    document.body.insertBefore(canvas, document.body.firstChild);
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw();
    }
    
    function draw() {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = config.fontSize + 'px monospace';
        ctx.fillStyle = config.color;
        ctx.textBaseline = 'top';
        
        for (let y = 0; y < canvas.height; y += config.spacing) {
            for (let x = 0; x < canvas.width; x += config.spacing) {
                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;
                const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
                const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
                const intensity = Math.max(0, 1 - (distance / maxDistance));
                
                if (intensity > 0.2) {
                    const charIndex = Math.floor(intensity * (config.chars.length - 1));
                    const char = config.chars[charIndex];
                    if (char && char !== ' ') {
                        ctx.fillText(char, x, y);
                    }
                }
            }
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', resize);
    } else {
        resize();
    }
    window.addEventListener('resize', resize);
    
    window.ASCIIDithering = {
        remove: () => document.getElementById('ascii-dithering-bg')?.remove(),
        setOpacity: (o) => { const el = document.getElementById('ascii-dithering-bg'); if(el) el.style.opacity = o; },
        toggle: () => { const el = document.getElementById('ascii-dithering-bg'); if(el) el.style.display = el.style.display === 'none' ? 'block' : 'none'; }
    };
})();