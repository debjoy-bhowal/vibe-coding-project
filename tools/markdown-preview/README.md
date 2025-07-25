# 📝 Markdown Preview

A real-time markdown editor with live preview, syntax highlighting, and export capabilities. Perfect for writing documentation, README files, and formatted text.

## 🌟 Features

### Real-Time Editing
- **Split-Pane Interface**: Side-by-side editor and preview
- **Live Preview**: Instant rendering as you type
- **Synchronized Scrolling**: Preview follows editor position
- **Auto-Save**: Local storage preservation of content

### Markdown Support
- **Standard Syntax**: Headers, lists, links, images
- **Extended Markdown**: Tables, code blocks, strikethrough
- **GitHub Flavored**: Task lists, mentions, emoji
- **Syntax Highlighting**: Code blocks with language detection

### Export Options
- **HTML Export**: Clean, styled HTML output
- **Markdown Download**: Save as .md file
- **PDF Generation**: Print-friendly formatting
- **Copy HTML**: Clipboard integration

### Editor Features
- **Syntax Highlighting**: Color-coded markdown syntax
- **Line Numbers**: Optional line numbering
- **Word Wrap**: Soft wrap for long lines
- **Auto-Indent**: Smart indentation
- **Tab Support**: Proper tab handling

## 🎯 Use Cases

- **Documentation**: API docs, user guides, wikis
- **README Files**: Project documentation for GitHub
- **Blog Posts**: Content creation and formatting
- **Notes**: Personal note-taking with formatting
- **Technical Writing**: Code documentation with examples
- **Educational**: Learning markdown syntax

## 🛠️ Technical Implementation

### Technologies Used
- **HTML5**: Semantic structure
- **Tailwind CSS + DaisyUI**: Modern UI framework
- **Alpine.js**: Reactive state management
- **Marked.js**: Markdown parsing and rendering
- **Prism.js**: Syntax highlighting for code blocks

### Key Features
- Client-side markdown processing
- Real-time DOM updates
- Local storage persistence
- Responsive design architecture

## 🚀 Getting Started

1. **Open the Editor**
   ```bash
   # Navigate to the tool directory
   cd tools/markdown-preview
   
   # Open in browser
   open index.html
   ```

2. **Start Writing**
   - Type markdown in the left panel
   - See live preview in the right panel
   - Use toolbar buttons for common formatting

3. **Export Your Work**
   - Click "Export HTML" for web-ready code
   - Use "Download MD" to save markdown file
   - Print or save as PDF from browser

## 📱 Interface Overview

### Editor Panel (Left)
- **Markdown Input**: Full-featured text editor
- **Toolbar**: Quick formatting buttons
- **Status Bar**: Character/word count, cursor position
- **Settings**: Editor preferences and options

### Preview Panel (Right)
- **Rendered Output**: Live HTML preview
- **Styled Content**: GitHub-like styling
- **Responsive**: Mobile-friendly rendering
- **Scroll Sync**: Follows editor position

### Toolbar Features
- **Bold/Italic**: Text formatting shortcuts
- **Headers**: H1-H6 header insertion
- **Lists**: Ordered and unordered lists
- **Links/Images**: URL and image insertion
- **Code**: Inline and block code formatting
- **Tables**: Table structure creation

## 📝 Supported Markdown Syntax

### Headers
```markdown
# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header
```

### Text Formatting
```markdown
**Bold Text**
*Italic Text*
~~Strikethrough~~
`Inline Code`
```

### Lists
```markdown
- Unordered list item
- Another item
  - Nested item

1. Ordered list item
2. Second item
   1. Nested ordered item
```

### Links and Images
```markdown
[Link Text](https://example.com)
![Alt Text](image-url.jpg)
```

### Code Blocks
````markdown
```javascript
function hello() {
    console.log("Hello, World!");
}
```
````

### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

### Task Lists
```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

## 🎨 Styling Features

### Theme Options
- **GitHub Style**: Clean, professional appearance
- **Dark Mode**: Easy on the eyes for long sessions
- **Print Friendly**: Optimized for PDF export
- **Custom CSS**: Ability to add custom styles

### Code Highlighting
- **Language Detection**: Automatic syntax detection
- **50+ Languages**: JavaScript, Python, CSS, HTML, etc.
- **Copy Button**: One-click code copying
- **Line Numbers**: Optional line numbering

## 🔧 Advanced Features

### Editor Enhancements
- **Find/Replace**: Text search and replacement
- **Vim Keybindings**: Optional Vim mode
- **Auto-Complete**: Markdown syntax suggestions
- **Multiple Cursors**: Edit multiple lines simultaneously

### Export Options
- **HTML with CSS**: Standalone HTML files
- **Raw HTML**: Clean markup without styling
- **Markdown**: Standard .md file format
- **JSON**: Structured content data

### Customization
- **Editor Themes**: Multiple color schemes
- **Font Options**: Typeface and size selection
- **Layout**: Adjustable panel sizes
- **Shortcuts**: Customizable keyboard shortcuts

## 📊 Performance Features

- **Efficient Rendering**: Optimized for large documents
- **Lazy Loading**: Progressive content rendering
- **Memory Management**: Automatic cleanup
- **Offline Support**: Works without internet connection

## 🔍 Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Compatible with assistive technology
- **High Contrast**: Accessible color schemes
- **Focus Management**: Clear focus indicators

## 💡 Tips for Better Markdown

1. **Use Headers**: Structure content with logical hierarchy
2. **Code Blocks**: Specify language for syntax highlighting
3. **Alt Text**: Always include alt text for images
4. **Tables**: Keep tables simple and readable
5. **Links**: Use descriptive link text
6. **Lists**: Use consistent formatting

## 🌟 Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| **Bold** | Ctrl/Cmd + B |
| **Italic** | Ctrl/Cmd + I |
| **Save** | Ctrl/Cmd + S |
| **Preview Toggle** | Ctrl/Cmd + P |
| **Find** | Ctrl/Cmd + F |
| **Replace** | Ctrl/Cmd + H |

## 📊 Browser Compatibility

- **Chrome**: Full support with all features
- **Firefox**: Complete functionality
- **Safari**: Full support
- **Edge**: All features supported
- **Mobile**: Touch-optimized interface

---

**Built with ❤️ and AI assistance for the Vibe Coding Competition**
