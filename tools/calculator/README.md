# 🧮 Calculator Pro

A sophisticated calculator web application with both basic and scientific functions, built with Alpine.js and Tailwind CSS.

## 🌟 Features

### Basic Operations
- **Arithmetic Operations**: Addition, subtraction, multiplication, division
- **Clear Functions**: Clear entry (CE) and All Clear (AC)
- **Decimal Support**: Floating-point calculations
- **Error Handling**: Division by zero protection

### Scientific Functions
- **Trigonometric**: sin, cos, tan (with degree/radian toggle)
- **Logarithmic**: Natural log (ln), base-10 log (log)
- **Power Functions**: Square (x²), cube (x³), power (x^y)
- **Root Functions**: Square root (√), cube root (∛)
- **Constants**: π (pi), e (Euler's number)
- **Advanced**: Factorial (!), percentage (%)

### Memory Functions
- **Memory Store (MS)**: Save current value to memory
- **Memory Recall (MR)**: Retrieve value from memory
- **Memory Clear (MC)**: Clear memory
- **Memory Add (M+)**: Add current value to memory
- **Memory Subtract (M-)**: Subtract current value from memory

### User Experience
- **Keyboard Support**: Full keyboard input support
- **History Tracking**: View previous calculations
- **Responsive Design**: Works on desktop and mobile
- **Visual Feedback**: Button animations and hover effects
- **Error Display**: Clear error messages

## 🎯 Use Cases

- **Students**: Scientific calculations for math and science courses
- **Engineers**: Technical calculations and conversions
- **Daily Use**: Basic arithmetic for everyday calculations
- **Financial**: Percentage calculations and quick math

## 🛠️ Technical Implementation

### Technologies Used
- **HTML5**: Semantic structure
- **Tailwind CSS + DaisyUI**: Styling and responsive design
- **Alpine.js**: Reactive state management
- **JavaScript**: Mathematical operations and logic

### Key Features
- Real-time calculation display
- Expression evaluation with proper operator precedence
- Memory management system
- Keyboard event handling
- Error boundary protection

## 🚀 Getting Started

1. **Open the Calculator**
   ```bash
   # Navigate to the tool directory
   cd tools/calculator
   
   # Open in browser
   open index.html
   ```

2. **Basic Usage**
   - Click numbers and operators to build expressions
   - Press = or Enter to calculate
   - Use scientific functions for advanced calculations

3. **Keyboard Shortcuts**
   - **Numbers**: 0-9
   - **Operations**: +, -, *, /
   - **Calculate**: = or Enter
   - **Clear**: C or Escape
   - **Decimal**: . (period)

## 📱 Interface Overview

### Display Section
- **Main Display**: Shows current input and results
- **Secondary Display**: Shows operation history
- **Memory Indicator**: Shows when memory contains value

### Button Layout
- **Number Pad**: 0-9 with decimal point
- **Basic Operations**: +, -, ×, ÷
- **Scientific Functions**: Organized in logical groups
- **Memory Functions**: Dedicated memory control buttons
- **Utility**: Clear, equals, and special functions

## 🎨 Design Features

- **Modern UI**: Clean, professional appearance
- **Color Coding**: Different button types have distinct colors
- **Responsive Layout**: Adapts to different screen sizes
- **Accessibility**: High contrast and keyboard navigation
- **Visual Feedback**: Button press animations

## 🔧 Customization

The calculator can be customized by modifying:
- **Color Scheme**: Update Tailwind CSS classes
- **Button Layout**: Reorganize button positions
- **Functions**: Add new mathematical operations
- **Display Format**: Change number formatting

## 📊 Supported Operations

| Category | Functions |
|----------|-----------|
| **Basic** | +, -, ×, ÷, =, ± |
| **Advanced** | x², x³, x^y, √x, ∛x |
| **Trigonometry** | sin, cos, tan, deg/rad |
| **Logarithmic** | ln, log |
| **Constants** | π, e |
| **Utility** | !, %, 1/x |
| **Memory** | MS, MR, MC, M+, M- |

## 🎯 Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support  
- **Safari**: Full support
- **Edge**: Full support
- **Mobile Browsers**: Responsive design

## 📝 Notes

- Calculations use JavaScript's built-in Math object
- Trigonometric functions can switch between degrees and radians
- Memory functions persist during the session
- Maximum display precision is limited by JavaScript number precision

---

**Built with ❤️ and AI assistance for the Vibe Coding Competition**
