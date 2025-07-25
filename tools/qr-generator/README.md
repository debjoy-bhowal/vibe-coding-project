# 📱 QR Code Generator

A comprehensive QR code generation tool supporting multiple data types, customization options, and various export formats for creating professional QR codes.

## 🌟 Features

### QR Code Types
- **Text**: Plain text content
- **URL**: Website links and deep links
- **Email**: Pre-filled email composition
- **SMS**: Text message with phone number
- **Phone**: Direct dial phone numbers
- **WiFi**: Network credentials for easy connection
- **vCard**: Digital business cards
- **Event**: Calendar event information

### Customization Options
- **Size Control**: Adjustable dimensions (100-1000px)
- **Error Correction**: L, M, Q, H levels for reliability
- **Color Schemes**: Foreground and background colors
- **Logo Integration**: Embed logos in QR codes
- **Border Control**: Customizable quiet zones
- **Style Presets**: Professional color combinations

### Export Formats
- **PNG**: High-quality raster images
- **SVG**: Scalable vector graphics
- **PDF**: Print-ready documents
- **JPEG**: Compressed image format
- **Batch Export**: Multiple formats simultaneously

### Advanced Features
- **Bulk Generation**: Create multiple QR codes
- **Template System**: Save and reuse configurations
- **Batch Processing**: CSV import for mass generation
- **Analytics Ready**: Trackable QR codes
- **Print Optimization**: High-resolution for printing

## 🎯 Use Cases

- **Marketing**: Promotional campaigns and advertisements
- **Business Cards**: Digital contact information
- **Events**: Ticket scanning and check-ins
- **Restaurants**: Digital menus and ordering
- **WiFi Sharing**: Easy network access
- **Product Packaging**: Product information and links
- **Education**: Quick access to resources
- **Inventory**: Asset tracking and management

## 🛠️ Technical Implementation

### Technologies Used
- **HTML5**: Modern web standards
- **Tailwind CSS + DaisyUI**: Responsive design
- **Alpine.js**: Reactive user interface
- **QRCode.js**: QR code generation library
- **Canvas API**: Image rendering and export

### QR Code Standards
- **ISO/IEC 18004**: International QR code standard
- **Version Support**: Automatic version selection (1-40)
- **Encoding Modes**: Numeric, alphanumeric, byte, kanji
- **Error Correction**: Reed-Solomon error correction

## 🚀 Getting Started

1. **Open the Generator**
   ```bash
   # Navigate to the tool directory
   cd tools/qr-generator
   
   # Open in browser
   open index.html
   ```

2. **Select QR Type**
   - Choose from 8 different QR code types
   - Fill in the required information
   - Preview updates in real-time

3. **Customize Appearance**
   - Adjust size and colors
   - Select error correction level
   - Apply style presets if desired

4. **Download & Use**
   - Choose export format (PNG, SVG, PDF)
   - Download to device
   - Use in your projects or print

## 📱 Interface Overview

### Type Selection
- **Tab Interface**: Easy switching between QR types
- **Form Fields**: Type-specific input fields
- **Validation**: Real-time input validation
- **Preview**: Live QR code generation

### Customization Panel
- **Size Slider**: Visual size adjustment
- **Color Pickers**: Foreground and background colors
- **Preset Colors**: Quick professional combinations
- **Error Correction**: Reliability level selection

### Export Options
- **Format Selection**: Multiple file formats
- **Quality Settings**: Resolution and compression
- **Filename Control**: Custom file naming
- **Batch Download**: Multiple formats at once

## 🔧 QR Code Types Explained

### Text QR Codes
```
Plain text content
Maximum: 4,296 characters
Use for: Messages, instructions, information
```

### URL QR Codes
```
Web addresses and deep links
Supports: HTTP, HTTPS, FTP protocols
Use for: Websites, app downloads, social media
```

### Email QR Codes
```
Pre-filled email composition
Fields: To, Subject, Body
Use for: Contact forms, feedback, support
```

### WiFi QR Codes
```
Network connection details
Fields: SSID, Password, Security type
Use for: Guest access, easy connectivity
```

### vCard QR Codes
```
Digital business card information
Fields: Name, phone, email, address, website
Use for: Networking, contact sharing
```

### SMS QR Codes
```
Pre-filled text messages
Fields: Phone number, message content
Use for: Quick messaging, promotions
```

### Phone QR Codes
```
Direct dial phone numbers
Format: International phone number format
Use for: Customer service, quick calling
```

### Event QR Codes
```
Calendar event information
Fields: Title, date, time, location, description
Use for: Meeting invites, event promotion
```

## 🎨 Customization Options

### Size and Quality
- **Dimensions**: 100px to 1000px
- **Print Quality**: 300 DPI recommended
- **Scaling**: Vector formats for infinite scaling
- **Responsive**: Adapts to different screen sizes

### Color Schemes
| Preset | Foreground | Background | Use Case |
|--------|------------|------------|----------|
| **Classic** | Black | White | Traditional, professional |
| **Blue** | Navy | Light Blue | Corporate, trustworthy |
| **Green** | Dark Green | Light Green | Eco-friendly, natural |
| **Red** | Dark Red | Pink | Attention-grabbing |
| **Purple** | Purple | Lavender | Creative, modern |

### Error Correction Levels
| Level | Correction | Use Case |
|-------|------------|----------|
| **L (Low)** | ~7% | Clean environments |
| **M (Medium)** | ~15% | Standard use (recommended) |
| **Q (Quartile)** | ~25% | Industrial applications |
| **H (High)** | ~30% | Harsh conditions, small codes |

## 📊 Technical Specifications

### QR Code Versions
- **Version 1**: 21×21 modules (25 characters)
- **Version 10**: 57×57 modules (174 characters)
- **Version 20**: 97×97 modules (858 characters)
- **Version 40**: 177×177 modules (4,296 characters)

### Data Capacity
| Type | Numeric | Alphanumeric | Binary |
|------|---------|--------------|--------|
| **Version 1** | 41 | 25 | 17 |
| **Version 10** | 174 | 106 | 72 |
| **Version 40** | 7,089 | 4,296 | 2,953 |

### File Format Specifications
- **PNG**: Lossless compression, transparent backgrounds
- **SVG**: Vector format, infinite scalability
- **PDF**: Print-ready, embedded fonts
- **JPEG**: Compressed, smaller file sizes

## 🔍 Best Practices

### Design Guidelines
1. **High Contrast**: Ensure good foreground/background contrast
2. **Adequate Size**: Minimum 2cm × 2cm for print
3. **Quiet Zone**: Maintain border around QR code
4. **Test Scanning**: Verify readability across devices
5. **Error Correction**: Use Medium (M) level for most cases

### Content Optimization
1. **Keep URLs Short**: Use URL shorteners when needed
2. **Test Content**: Verify all links and information
3. **Update Regular**: Check for broken links periodically
4. **Mobile Friendly**: Ensure content works on mobile devices
5. **Clear Instructions**: Provide scanning guidance when needed

## 📱 Mobile Scanning

### Compatible Apps
- **iOS Camera**: Built-in QR scanning
- **Android Camera**: Native QR support
- **WhatsApp**: In-app QR scanner
- **Third-party**: QR & Barcode Scanner apps

### Scanning Tips
- **Good Lighting**: Ensure adequate illumination
- **Steady Hold**: Keep device stable during scan
- **Proper Distance**: 6-8 inches from QR code
- **Clean Camera**: Wipe camera lens if needed

## 🌐 Browser Compatibility

- **Chrome**: Full canvas and download support
- **Firefox**: Complete functionality
- **Safari**: All features supported
- **Edge**: Full compatibility
- **Mobile Browsers**: Touch-optimized interface

## 💡 Pro Tips

1. **URL Shortening**: Use bit.ly or similar for long URLs
2. **Testing**: Always test QR codes before publishing
3. **Analytics**: Use trackable URLs for marketing campaigns
4. **Print Quality**: Use vector formats for large print runs
5. **Backup Plans**: Always provide alternative access methods

---

**Built with ❤️ and AI assistance for the Vibe Coding Competition**
