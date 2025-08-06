# ASCII Dithering Background

Drop-in ASCII character dithering background for any website. One-line integration with customizable patterns, colors, and presets.

![ASCII Dithering Preview](https://img.shields.io/badge/ASCII-Dithering-blue?style=for-the-badge)
![License MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-orange?style=for-the-badge)

## 🚀 Quick Start

### One-Line Integration (Recommended)

```html
<script src="https://cdn.jsdelivr.net/gh/xclv-ai/ascii-dithering-background@main/ascii-background.js"></script>
```

### Preset Versions

```html
<!-- Minimalist dots -->
<script src="https://cdn.jsdelivr.net/gh/xclv-ai/ascii-dithering-background@main/presets/dots.js"></script>

<!-- Modern blocks -->
<script src="https://cdn.jsdelivr.net/gh/xclv-ai/ascii-dithering-background@main/presets/blocks.js"></script>
```

## ✨ Features

- ✅ **Zero dependencies** - Pure vanilla JavaScript
- ✅ **One-line integration** - Works with any website
- ✅ **Lightweight** - Less than 5KB minified
- ✅ **Responsive** - Adapts to any screen size
- ✅ **Non-intrusive** - Won't break existing layouts
- ✅ **Customizable** - Easy to modify colors, patterns, opacity
- ✅ **Cross-browser** - Works in all modern browsers
- ✅ **Performance optimized** - Uses requestAnimationFrame for smooth rendering

## 🎮 Control Functions

After loading, you can control the background programmatically:

```javascript
// Remove background completely
ASCIIDithering.remove();

// Change opacity (0 = invisible, 1 = fully visible)
ASCIIDithering.setOpacity(0.5);

// Toggle visibility
ASCIIDithering.toggle();

// Change color
ASCIIDithering.setColor('#ff0000');

// Change character set
ASCIIDithering.setChars([' ', '.', 'o', 'O', '@']);

// Redraw pattern
ASCIIDithering.redraw();

// Access configuration
console.log(ASCIIDithering.config);
```

## 🎨 Customization

### Method 1: Modify the Script

Download `ascii-background.js` and edit the config object:

```javascript
const config = {
    chars: [' ', '.', ':', ';', '+', '*', '#', '@'],  // Character set
    fontSize: 8,        // Font size in pixels
    color: '#000000',   // Color (any CSS color)
    spacing: 12,        // Distance between characters
    zIndex: -1000,      // Layer depth (negative = background)
    opacity: 0.3        // Transparency (0-1)
};
```

### Method 2: Runtime Customization

```javascript
// After the script loads, modify settings
ASCIIDithering.setColor('#333333');
ASCIIDithering.setOpacity(0.2);
ASCIIDithering.setChars([' ', '░', '▒', '▓', '█']);
```

## 📋 Character Set Presets

### Default Classic
```javascript
[' ', '.', ':', ';', '+', '*', '#', '@']
```

### Minimalist Dots  
```javascript
[' ', '.', '•', '●']
```

### Modern Blocks
```javascript
[' ', '░', '▒', '▓', '█']
```

### Symbols
```javascript
[' ', '.', ':', ';', '!', '*', '#', '&', '@']
```

### Binary
```javascript
[' ', '.', '0', '1']
```

## 🖥️ Examples

### Basic Usage
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
    <script src="https://cdn.jsdelivr.net/gh/xclv-ai/ascii-dithering-background@main/ascii-background.js"></script>
</head>
<body>
    <h1>Your content here</h1>
    <p>The ASCII background automatically appears behind your content.</p>
</body>
</html>
```

### Custom Settings
```html
<script src="https://cdn.jsdelivr.net/gh/xclv-ai/ascii-dithering-background@main/ascii-background.js"></script>
<script>
    // Customize after loading
    setTimeout(() => {
        ASCIIDithering.setColor('#0066cc');
        ASCIIDithering.setOpacity(0.15);
        ASCIIDithering.setChars([' ', '·', '•', '●', '█']);
    }, 100);
</script>
```

### Toggle Button
```html
<button onclick="ASCIIDithering.toggle()">Toggle ASCII Background</button>
<input type="range" min="0" max="1" step="0.1" value="0.3" 
       onchange="ASCIIDithering.setOpacity(this.value)">
```

## 📱 Responsive Design

The background automatically:
- Resizes when the browser window changes
- Adapts to mobile devices
- Maintains aspect ratio on all screen sizes
- Uses `position: fixed` to stay in place during scrolling

## 🔧 Technical Details

- **Canvas-based rendering** for optimal performance
- **Event-driven updates** only when necessary
- **Memory efficient** with automatic cleanup
- **CSS positioning** ensures compatibility with existing layouts
- **Monospace fonts** for consistent character spacing

## 📄 License

MIT License - feel free to use in personal and commercial projects.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Issues & Support

- Report bugs via [GitHub Issues](https://github.com/xclv-ai/ascii-dithering-background/issues)
- For questions, use [GitHub Discussions](https://github.com/xclv-ai/ascii-dithering-background/discussions)

## ⭐ Star History

If this project helped you, please consider giving it a star on GitHub!

---

**Made with ❤️ by [xclv-ai](https://github.com/xclv-ai)**