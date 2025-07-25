# 🎨 Color Palette Generator

A powerful web-based tool for generating beautiful color palettes and gradients with multiple color harmony algorithms and export capabilities.

## 🌟 Features

### Color Generation Modes
- **Random Palette**: Generate completely random color combinations
- **Monochromatic**: Variations of a single hue
- **Analogous**: Colors adjacent on the color wheel
- **Complementary**: Opposite colors for high contrast
- **Triadic**: Three evenly spaced colors
- **Split Complementary**: Base color + two adjacent to complement
- **Tetradic**: Four colors forming a rectangle on color wheel

### Color Manipulation
- **Manual Color Selection**: Click any color to customize with color picker
- **Lock Colors**: Preserve specific colors while generating new ones
- **Color Adjustments**: Fine-tune brightness, saturation, and hue
- **Gradient Generation**: Create smooth color transitions

### Export Options
- **CSS Export**: Ready-to-use CSS variables and classes
- **JSON Export**: Structured data for developers
- **Image Export**: Download palette as PNG image
- **Gradient CSS**: Complete gradient backgrounds
- **SCSS Variables**: Sass/SCSS variable format

### Accessibility Features
- **Contrast Checker**: WCAG AA/AAA compliance testing
- **Color Blindness Simulation**: Preview for different vision types
- **Accessible Color Suggestions**: Recommendations for better accessibility
- **Text Contrast**: Automatic light/dark text selection

## 🎯 Use Cases

- **Web Design**: Website color schemes and themes
- **Brand Identity**: Logo and brand color development
- **UI/UX Design**: Interface color systems
- **Digital Art**: Color inspiration for artwork
- **Print Design**: Color combinations for print materials
- **Accessibility**: Creating inclusive color schemes

## 🛠️ Technical Implementation

### Technologies Used
- **HTML5**: Semantic structure and canvas elements
- **Tailwind CSS + DaisyUI**: Modern styling framework
- **Alpine.js**: Reactive state management
- **JavaScript**: Color theory algorithms and calculations
- **Canvas API**: Image generation and export

### Color Theory Algorithms
- HSL/HSV color space conversions
- Color harmony mathematical relationships
- Perceptual lightness calculations
- WCAG contrast ratio algorithms

## 🚀 Getting Started

1. **Open the Generator**
   ```bash
   # Navigate to the tool directory
   cd tools/color-generator
   
   # Open in browser
   open index.html
   ```

2. **Generate Palettes**
   - Select a color harmony mode
   - Click "Generate Palette" or use spacebar
   - Lock colors you want to keep
   - Regenerate to explore variations

3. **Customize Colors**
   - Click any color to open color picker
   - Adjust using hue, saturation, lightness sliders
   - Use the color wheel for precise selection

## 📱 Interface Overview

### Color Palette Display
- **5-Color Palette**: Main color combinations
- **Color Codes**: Hex, RGB, HSL values displayed
- **Lock Buttons**: Preserve specific colors
- **Copy Functionality**: One-click color code copying

### Control Panel
- **Harmony Selector**: Choose color relationship type
- **Generate Button**: Create new palettes
- **Export Menu**: Multiple format options
- **Settings**: Accessibility and display options

### Gradient Section
- **Live Preview**: Real-time gradient display
- **Direction Control**: Linear gradient angles
- **CSS Output**: Ready-to-use gradient code

## 🎨 Color Harmonies Explained

| Harmony Type | Description | Best For |
|--------------|-------------|----------|
| **Random** | Completely random colors | Creative exploration |
| **Monochromatic** | Single hue variations | Elegant, cohesive designs |
| **Analogous** | Adjacent wheel colors | Natural, harmonious feels |
| **Complementary** | Opposite colors | High contrast, vibrant |
| **Triadic** | Three equidistant colors | Balanced, dynamic |
| **Split Complementary** | Base + complement neighbors | Softer contrast |
| **Tetradic** | Four-color rectangle | Rich, complex schemes |

## 🔧 Export Formats

### CSS Variables
```css
:root {
  --color-1: #ff6b6b;
  --color-2: #4ecdc4;
  --color-3: #45b7d1;
  --color-4: #96ceb4;
  --color-5: #feca57;
}
```

### Gradient CSS
```css
background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
```

### JSON Format
```json
{
  "colors": ["#ff6b6b", "#4ecdc4", "#45b7d1"],
  "harmony": "triadic",
  "accessibility": "AA"
}
```

## ♿ Accessibility Features

### Contrast Checking
- **WCAG AA**: 4.5:1 contrast ratio for normal text
- **WCAG AAA**: 7:1 contrast ratio for enhanced accessibility
- **Large Text**: 3:1 ratio for text 18pt+ or 14pt+ bold

### Color Vision Support
- **Protanopia**: Red-blind simulation
- **Deuteranopia**: Green-blind simulation  
- **Tritanopia**: Blue-blind simulation
- **Monochromacy**: Complete color blindness

## 🎯 Tips for Better Palettes

1. **Start with Purpose**: Consider the mood and message
2. **Use Color Temperature**: Warm vs cool combinations
3. **Consider Context**: Screen vs print, lighting conditions
4. **Test Accessibility**: Always check contrast ratios
5. **Less is More**: Start with 2-3 colors, expand carefully

## 🌈 Advanced Features

- **Palette History**: Undo/redo functionality
- **Favorite Palettes**: Save preferred combinations
- **Batch Export**: Download multiple format types
- **Custom Harmony**: Define your own color relationships
- **Color Inspiration**: Generate from uploaded images

## 📊 Browser Compatibility

- **Chrome**: Full support with canvas export
- **Firefox**: Full support
- **Safari**: Full support  
- **Edge**: Full support
- **Mobile**: Touch-friendly responsive design

---

**Built with ❤️ and AI assistance for the Vibe Coding Competition**
