# 🧮 Calculator Pro

A truly advanced, professional-grade calculator web application with three specialized modes: Basic, Scientific, and Programmer. Built with Alpine.js and Tailwind CSS for a modern, responsive experience.

## 🌟 Advanced Features

### 🔢 Three Calculator Modes
- **Basic Mode**: Standard arithmetic operations with enhanced display
- **Scientific Mode**: Complete scientific computing with advanced mathematical functions
- **Programmer Mode**: Binary, octal, decimal, and hexadecimal calculations with bitwise operations

### ➕ Basic Operations
- **Arithmetic Operations**: Addition, subtraction, multiplication, division
- **Advanced Display**: Multi-line display showing expression, operation, and result
- **Clear Functions**: Clear entry and All Clear with smart backspace
- **Decimal Support**: Floating-point calculations with precision handling
- **Error Handling**: Comprehensive error detection with auto-recovery
- **Parentheses Support**: Complex expression evaluation

### 🔬 Scientific Functions
- **Trigonometric**: sin, cos, tan, sin⁻¹, cos⁻¹, tan⁻¹ with angle unit support
- **Logarithmic**: Natural log (ln), base-10 log (log), eˣ, 10ˣ
- **Power Functions**: Square (x²), cube (x³), power (xʸ), roots (√, ∛)
- **Advanced Functions**: |x|, n!, %, 1/x, random number generator
- **Constants**: π (pi), e (Euler's number), φ (Golden Ratio), c (Speed of Light)
- **Angle Units**: Degrees, Radians, Gradians with automatic conversion
- **Expression Evaluation**: Smart parsing of complex mathematical expressions

### 💻 Programmer Mode
- **Number Base Support**: Binary (BIN), Octal (OCT), Decimal (DEC), Hexadecimal (HEX)
- **Bitwise Operations**: AND, OR, XOR, NOT, bit shifting (<<, >>)
- **Real-time Conversion**: Live display of values in all number bases
- **Base-specific Input**: Automatic validation for each number base
- **Hexadecimal Digits**: Full A-F support for hex calculations

### 🧠 Memory System
- **Memory Store (MS)**: Save current value to memory
- **Memory Recall (MR)**: Retrieve value from memory
- **Memory Clear (MC)**: Clear memory storage
- **Memory Add (M+)**: Add current value to memory
- **Answer Recall (ANS)**: Use result from last calculation
- **Memory Indicator**: Visual display when memory contains value
### 🔧 Unit Converters
- **Temperature Conversion**: Celsius ↔ Fahrenheit with one-click conversion
- **Angle Conversion**: Degrees ↔ Radians for engineering calculations
- **Quick Access**: Instant conversions without mode switching

### 📱 User Experience
- **Keyboard Support**: Complete keyboard navigation with advanced shortcuts
- **Enhanced History**: Detailed calculation history with timestamps and expressions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Visual Feedback**: Color-coded buttons and smooth animations
- **Error Display**: Clear error messages with automatic recovery
- **Mode Switching**: Seamless transitions between calculator modes
- **Professional Layout**: Multi-panel interface with organized functionality

## 🎯 Use Cases

- **Students**: Scientific calculations for advanced math, physics, and engineering courses
- **Engineers**: Technical calculations, unit conversions, and bitwise operations
- **Programmers**: Binary/hex calculations, bitwise logic, and base conversions
- **Scientists**: Complex mathematical functions and statistical calculations
- **Daily Use**: Enhanced basic arithmetic with memory and history features
- **Financial**: Advanced percentage calculations and precision arithmetic

## 🛠️ Technical Implementation

### Technologies Used
- **HTML5**: Modern semantic structure with accessibility features
- **Tailwind CSS + DaisyUI**: Advanced styling with responsive design system
- **Alpine.js**: Reactive state management with component architecture
- **JavaScript**: Advanced mathematical operations with error handling
- **Local Storage**: Persistent history and memory storage

### Advanced Features
- **Multi-mode Architecture**: Modular design supporting three calculator types
- **Expression Parser**: Smart evaluation of complex mathematical expressions
- **Number Base Engine**: Complete binary, octal, decimal, hexadecimal support
- **Precision Handling**: Scientific notation and floating-point optimization
- **Error Boundaries**: Robust error handling with graceful degradation
- **Memory Management**: Persistent storage with automatic cleanup

## 🚀 Getting Started

1. **Open the Calculator**
   ```bash
   # Navigate to the tool directory
   cd tools/calculator
   
   # Open in browser
   open index.html
   ```

2. **Mode Selection**
   - **Basic Mode**: Click "Basic" for standard arithmetic
   - **Scientific Mode**: Click "Scientific" for advanced mathematical functions
   - **Programmer Mode**: Click "Programmer" for binary/hex calculations

3. **Basic Usage**
   - Click numbers and operators to build expressions
   - Press = or Enter to calculate
   - Use parentheses for complex expressions
   - Access memory functions for storing values

4. **Advanced Operations**
   - **Scientific**: Select angle units (DEG/RAD/GRAD) for trigonometric functions
   - **Programmer**: Choose number base (BIN/OCT/DEC/HEX) for calculations
   - **Constants**: Click π, e, φ, or c for mathematical constants

5. **Keyboard Shortcuts**
   - **Numbers**: 0-9, A-F (hex mode)
   - **Operations**: +, -, *, /, ^ (power)
   - **Functions**: Use scientific function buttons
   - **Navigation**: = or Enter (calculate), Esc (clear), Backspace (delete)
   - **Advanced**: Tab (switch modes), M (memory store), R (memory recall)

## 📱 Interface Overview

### Enhanced Display Section
- **Expression Line**: Shows complete mathematical expression
- **Operation Line**: Displays current operation being performed
- **Main Display**: Large, clear result with scientific notation support
- **Status Indicators**: Memory value, angle unit, and current number base
- **Multi-base Display**: Live conversion between BIN/OCT/DEC/HEX (programmer mode)

### Advanced Button Layout
- **Mode Selector**: Easy switching between Basic, Scientific, and Programmer
- **Function Groups**: Organized by category with color coding
- **Scientific Panel**: Trigonometric, logarithmic, and advanced functions
- **Programmer Panel**: Bitwise operations and base conversion
- **Memory Controls**: Dedicated memory management buttons
- **Utility Functions**: Clear, delete, sign change, and special operations

### Side Panels
- **History Panel**: Detailed calculation history with timestamps
- **Constants Panel**: Mathematical and physical constants library
- **Converter Panel**: Quick unit conversion tools

## 🎨 Design Features

- **Modern Professional UI**: Clean, sophisticated interface design
- **Three-Mode Architecture**: Seamlessly integrated calculator modes
- **Color-Coded Interface**: Different button types with distinct, intuitive colors
- **Responsive Multi-Panel Layout**: Adapts perfectly to all screen sizes
- **Advanced Accessibility**: High contrast, keyboard navigation, and screen reader support
- **Smooth Animations**: Button press feedback and mode transitions
- **Real-time Updates**: Live display updates and instant calculations
- **Visual Status Indicators**: Clear memory, mode, and unit displays

## 🔧 Customization & Configuration

The calculator offers extensive customization options:
- **Angle Units**: Switch between degrees, radians, and gradians
- **Number Bases**: Toggle between binary, octal, decimal, and hexadecimal
- **Display Precision**: Automatic scientific notation for large/small numbers
- **Memory Management**: Persistent storage across sessions
- **History Settings**: Configurable history length (up to 100 calculations)
- **Theme Adaptation**: Built on Tailwind CSS for easy color scheme modification

## 📊 Complete Function Reference

| Category | Functions | Description |
|----------|-----------|-------------|
| **Basic Arithmetic** | +, -, ×, ÷, =, ± | Standard mathematical operations |
| **Advanced Math** | x², x³, xʸ, √x, ∛x, 1/x | Power and root functions |
| **Trigonometry** | sin, cos, tan, sin⁻¹, cos⁻¹, tan⁻¹ | Trigonometric functions with angle unit support |
| **Logarithmic** | ln, log, eˣ, 10ˣ | Natural and base-10 logarithms |
| **Constants** | π, e, φ, c | Mathematical and physical constants |
| **Utility** | !, %, \|x\|, random, EXP | Factorial, percentage, absolute value, etc. |
| **Memory** | MS, MR, MC, M+, ANS | Complete memory management system |
| **Programmer** | AND, OR, XOR, NOT, <<, >> | Bitwise operations and bit shifting |
| **Base Conversion** | BIN, OCT, DEC, HEX | Multi-base number system support |
| **Unit Conversion** | °C↔°F, DEG↔RAD | Temperature and angle conversions |
| **Expression** | ( ), complex expressions | Parentheses and expression evaluation |

## 🔬 Advanced Capabilities

### Scientific Computing
- **Full Trigonometric Suite**: All standard trig functions with inverse operations
- **Angle Unit Flexibility**: Seamless switching between degrees, radians, and gradians
- **Logarithmic Functions**: Natural log, common log, and exponential functions
- **Mathematical Constants**: Instant access to π, e, golden ratio, and speed of light
- **Advanced Operations**: Factorial, absolute value, percentage, and random numbers

### Programming Support
- **Multi-Base Arithmetic**: Complete support for binary, octal, decimal, and hexadecimal
- **Bitwise Operations**: Full suite of logical operations (AND, OR, XOR, NOT)
- **Bit Manipulation**: Left and right bit shifting operations
- **Real-time Conversion**: Live display of values in all supported number bases
- **Input Validation**: Smart input filtering based on selected number base

### Professional Features
- **Expression Parsing**: Handles complex mathematical expressions with parentheses
- **Memory System**: Complete memory management with multiple storage options
- **Error Handling**: Robust error detection with clear messaging and auto-recovery
- **History Management**: Detailed calculation history with timestamps and full expressions
- **Precision Control**: Automatic scientific notation and precision optimization

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
