// ASCII Dithering Background v1.0
// https://github.com/xclv-ai/ascii-dithering-background
// Drop-in ASCII character background for any website

(function() {
    'use strict';
    
    // Configuration - customize these values
    const config = {
        chars: [' ', '.', ':', ';', '+', '*', '#', '@'],
        fontSize: 8,
        color: '#000000',
        spacing: 12,
        zIndex: -1000,
        opacity: 0.3
    };
    
    // Prevent multiple instances
    if (document.getElementById('ascii-dithering-bg')) {
        console.warn('ASCII Dithering Background already loaded');
        return;
    }
    
    // Create background canvas
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
        image-rendering: pixelated;
    `;
    
    // Insert as first child of body to ensure it's behind everything
    document.body.insertBefore(canvas, document.body.firstChild);
    
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawPattern();
    }
    
    function drawPattern() {
        // Clear canvas
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set font properties
        ctx.font = config.fontSize + 'px monospace';
        ctx.fillStyle = config.color;
        ctx.textBaseline = 'top';
        
        // Generate circular gradient pattern
        for (let y = 0; y < canvas.height; y += config.spacing) {
            for (let x = 0; x < canvas.width; x += config.spacing) {
                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;
                const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
                const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
                const intensity = Math.max(0, 1 - (distance / maxDistance));
                
                if (intensity > 0.2) {
                    const charIndex = Math.floor(intensity * (config.chars.length - 1));
                    const char = config.chars[Math.max(0, Math.min(config.chars.length - 1, charIndex))];
                    
                    if (char && char !== ' ') {
                        ctx.fillText(char, x, y);
                    }
                }
            }
        }
    }
    
    // Initialize
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', resizeCanvas);
        } else {
            resizeCanvas();
        }
        
        // Handle window resize
        window.addEventListener('resize', resizeCanvas);
    }
    
    // Global control object
    window.ASCIIDithering = {
        remove: function() {
            const el = document.getElementById('ascii-dithering-bg');
            if (el) {
                el.remove();
                window.removeEventListener('resize', resizeCanvas);
                delete window.ASCIIDithering;
            }
        },
        
        setOpacity: function(opacity) {
            const el = document.getElementById('ascii-dithering-bg');
            if (el && opacity >= 0 && opacity <= 1) {
                el.style.opacity = opacity;
            }
        },
        
        setColor: function(color) {
            config.color = color;
            drawPattern();
        },
        
        setChars: function(chars) {
            if (Array.isArray(chars) && chars.length > 0) {
                config.chars = chars;
                drawPattern();
            }
        },
        
        toggle: function() {
            const el = document.getElementById('ascii-dithering-bg');
            if (el) {
                el.style.display = el.style.display === 'none' ? 'block' : 'none';
            }
        },
        
        redraw: function() {
            drawPattern();
        },
        
        config: config
    };
    
    // Start
    init();
    
    console.log('ASCII Dithering Background v1.0 loaded');
})();