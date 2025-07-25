# Image Filter Studio

A powerful web-based image editing tool that allows you to apply various filters and effects to your images in real-time.

## Features

### 🎨 Image Processing
- **Real-time Preview**: See changes instantly as you adjust settings
- **Canvas-based Editing**: Uses HTML5 Canvas for high-quality image processing
- **Multiple Format Support**: Works with JPG, PNG, GIF, and WebP images

### 🔧 Filter Controls
- **Brightness**: Adjust the overall lightness of your image (-100% to +100%)
- **Contrast**: Control the difference between light and dark areas (-100% to +100%)
- **Saturation**: Modify color intensity (-100% to +100%)
- **Hue**: Shift colors around the color wheel (-180° to +180°)
- **Blur**: Apply gaussian blur effect (0px to 20px)
- **Sepia**: Add vintage sepia tone effect (0% to 100%)

### 🎭 Preset Filters
- **Original**: Reset to original image
- **Vintage**: Classic vintage photography look
- **B&W**: Convert to black and white
- **Sepia**: Classic sepia tone effect
- **Vibrant**: Enhanced colors and contrast
- **Cool**: Cool color temperature
- **Warm**: Warm color temperature
- **Soft**: Soft, dreamy effect
- **Sharp**: Enhanced contrast and saturation
- **Dream**: Ethereal, soft focus effect
- **Noir**: High contrast black and white
- **Sunset**: Warm sunset tones

### 📁 File Management
- **Drag & Drop**: Simply drag images into the editor
- **Click to Upload**: Traditional file selection
- **Download Results**: Save edited images in PNG format
- **File Size Limit**: Maximum 10MB per image
- **Auto-scaling**: Large images are automatically resized for optimal performance

### 📊 Image Information
- **Dimensions**: View image width and height
- **File Size**: See original file size
- **Format**: Display image format
- **Aspect Ratio**: Show aspect ratio

### 🕐 History System
- **Save States**: Save current filter settings
- **Load Previous**: Quickly return to previous edits
- **Auto-save**: History is preserved across browser sessions
- **Clear History**: Remove all saved states

## How to Use

1. **Upload Image**: 
   - Drag and drop an image file into the upload area
   - Or click "Choose File" to select an image

2. **Apply Filters**:
   - Use the preset filters for quick effects
   - Or manually adjust individual settings using the sliders
   - Changes are applied in real-time

3. **Save Your Work**:
   - Click "Save State" to remember current settings
   - Use "Download" to save the edited image
   - Use "Reset" to return to the original image

4. **Experiment**:
   - Try combining multiple effects
   - Use the history feature to compare different versions
   - Apply presets and then fine-tune with manual adjustments

## Technical Details

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Alpine.js for reactive UI
- **Styling**: Tailwind CSS with DaisyUI components
- **Image Processing**: HTML5 Canvas API with CSS filters
- **Storage**: localStorage for filter history
- **Performance**: Debounced filter application for smooth interaction

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## File Size Limits

- Maximum file size: 10MB
- Maximum display dimensions: 800x600 (auto-scaled)
- Supported formats: JPEG, PNG, GIF, WebP

## Tips for Best Results

- Use high-quality source images for best results
- Combine subtle adjustments for natural-looking effects
- Save states before making major changes
- Experiment with different preset combinations
- Download in PNG format for highest quality

## Future Enhancements

- Additional filter types (vignette, grain, etc.)
- Batch processing capabilities
- More export formats
- Advanced color adjustments
- Layer support
