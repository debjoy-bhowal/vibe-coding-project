# Music Player

A feature-rich web-based music player with playlist support, multiple playback modes, and an intuitive interface.

## Features

### 🎵 Audio Playback
- **Multiple Format Support**: MP3, WAV, OGG, M4A audio files
- **High-Quality Audio**: Web Audio API for optimal sound quality
- **Real-time Progress**: Visual progress tracking with seek functionality
- **Volume Control**: Precise volume adjustment with visual feedback

### 📂 Playlist Management
- **Drag & Drop Upload**: Simply drag audio files into the player
- **Multi-file Selection**: Upload multiple tracks at once
- **Track Information**: Display track name and duration
- **Easy Organization**: Add, remove, and reorder tracks
- **Playlist Persistence**: Playlist state saved across sessions

### 🔄 Playback Modes
- **Shuffle Mode**: Random track selection for variety
- **Repeat Modes**: None, Repeat All, or Repeat One track
- **Continuous Playback**: Seamless transition between tracks
- **Manual Navigation**: Skip to any track instantly

### 🎛️ Player Controls
- **Play/Pause**: Primary playback control
- **Previous/Next**: Navigate through playlist
- **Seek Bar**: Click or drag to jump to any position
- **Volume Slider**: Adjust audio volume precisely
- **Visual Feedback**: Animated controls and progress indicators

### ⌨️ Keyboard Shortcuts
- **Spacebar**: Play/Pause toggle
- **Arrow Keys**: Navigation and volume control
- **Left/Right**: Previous/Next track
- **Up/Down**: Volume adjustment
- **Full Control**: Complete keyboard accessibility

### 🎨 User Interface
- **Modern Design**: Beautiful gradient interface with glassmorphism effects
- **Responsive Layout**: Perfect on desktop, tablet, and mobile
- **Visual Feedback**: Animated album art and audio visualizer
- **Dark Theme**: Eye-friendly dark player interface
- **Intuitive Controls**: Easy-to-understand interface elements

## How to Use

### 1. Upload Music
- **Drag & Drop**: Drag audio files from your computer into the upload area
- **File Selection**: Click "Choose Files" to select audio files
- **Multiple Files**: Select multiple tracks at once for batch upload
- **Supported Formats**: MP3, WAV, OGG, M4A files

### 2. Playlist Management
- **View Playlist**: All uploaded tracks appear in the sidebar playlist
- **Select Track**: Click any track to start playing
- **Remove Tracks**: Use the X button to remove individual tracks
- **Clear Playlist**: Remove all tracks with the "Clear" button

### 3. Playback Controls
- **Play/Pause**: Use the large play button or spacebar
- **Navigation**: Use previous/next buttons or arrow keys
- **Seeking**: Click anywhere on the progress bar to jump to that position
- **Volume**: Adjust using the volume slider or up/down arrows

### 4. Playback Modes
- **Shuffle**: Enable random track selection
- **Repeat**: Choose between no repeat, repeat all, or repeat one
- **Continuous**: Tracks automatically play in sequence

### 5. Keyboard Shortcuts
- `Space` - Play/Pause
- `→` - Next track
- `←` - Previous track
- `↑` - Volume up
- `↓` - Volume down

## Technical Details

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Alpine.js for reactive UI components
- **Styling**: Tailwind CSS with DaisyUI for consistent design
- **Audio**: HTML5 Audio API for playback control
- **Storage**: localStorage for settings and playlist persistence
- **Performance**: Optimized for smooth playback and responsive controls

## Browser Compatibility

- **Chrome 60+**: Full feature support
- **Firefox 55+**: Complete functionality
- **Safari 12+**: All features available
- **Edge 79+**: Full compatibility

## Audio Format Support

### Fully Supported
- **MP3**: Most common format, excellent compression
- **WAV**: Uncompressed, highest quality
- **OGG**: Open-source format, good compression
- **M4A**: Apple format, high quality

### File Specifications
- **Maximum file size**: Limited by browser memory
- **Sample rates**: All standard rates supported
- **Bit rates**: All common bit rates
- **Channels**: Mono and stereo support

## Features in Detail

### Visual Elements
- **Album Art Placeholder**: Animated disc that spins during playback
- **Audio Visualizer**: 20-bar animated visualizer that responds to playback
- **Progress Indicators**: Real-time progress bars and time displays
- **Loading States**: Visual feedback during track loading

### Playlist Features
- **Track Duration**: Automatically detected and displayed
- **Current Track Highlight**: Active track clearly marked
- **Track Counter**: Shows current position in playlist
- **Quick Access**: One-click track selection

### Settings Persistence
- **Volume Level**: Remembers your preferred volume
- **Playback Modes**: Saves shuffle and repeat preferences
- **Current Track**: Resumes from last selected track
- **Cross-session**: Settings preserved between browser sessions

## Accessibility Features

- **Keyboard Navigation**: Full keyboard control support
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Focus Indicators**: Clear focus states for all interactive elements
- **High Contrast**: Good color contrast for readability

## Performance Optimizations

- **Memory Management**: Automatic cleanup of audio object URLs
- **Smooth Animations**: GPU-accelerated CSS animations
- **Responsive Design**: Optimized layouts for all screen sizes
- **Efficient Updates**: Minimal DOM manipulation for smooth performance

## Privacy & Security

- **Local Processing**: All audio files processed locally in browser
- **No Upload**: Files never leave your device
- **Local Storage**: Settings stored only in your browser
- **Secure**: No external connections required for core functionality

## Future Enhancements

- **Equalizer**: Audio frequency adjustment controls
- **Crossfade**: Smooth transitions between tracks
- **Playlist Export**: Save and share playlists
- **Advanced Visualizer**: More complex audio visualization
- **Lyric Display**: Show lyrics for supported tracks
- **Audio Effects**: Reverb, echo, and other audio effects
