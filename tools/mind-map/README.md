# 🧠 Mind Map & Knowledge Graph Tool

A dynamic mind-mapping and knowledge graph application for visualizing ideas, concepts, and their relationships. Create interactive node-based diagrams with drag-and-drop functionality, perfect for brainstorming, project planning, and knowledge organization.

## ✨ Features

### 🎯 Core Functionality
- **Interactive Node Creation**: Click anywhere on the canvas to create new nodes
- **Dynamic Edge Connections**: Connect nodes with directional arrows to show relationships
- **Three Operation Modes**: Switch between Select, Node, and Edge modes for different interactions
- **Real-time Editing**: Edit node labels, descriptions, and colors on the fly
- **Drag & Drop Interface**: Intuitive manipulation of nodes and connections

### 🎨 Visual Customization
- **Color-Coded Nodes**: 10 predefined colors for categorizing different types of information
- **Flexible Layouts**: Multiple automatic layout algorithms (Cose, Circle, Grid, Breadthfirst, Concentric)
- **Responsive Design**: Beautiful gradient backgrounds with backdrop blur effects
- **Visual Feedback**: Hover effects, selection highlights, and smooth animations

### 💾 Data Management
- **Auto-Save**: Automatic browser storage for persistent mind maps
- **JSON Export/Import**: Save and load mind maps as structured JSON files
- **Image Export**: Generate high-quality PNG images of your mind maps
- **Data Statistics**: Real-time tracking of nodes and connections

### 🛠️ Advanced Features
- **Multiple Selection**: Select and manipulate multiple elements
- **Minimap Navigation**: Overview panel for large mind maps
- **Zoom & Pan**: Smooth zooming and panning controls
- **Fit to View**: Automatically adjust view to show all content
- **Keyboard Shortcuts**: Efficient navigation and editing

## 🚀 How to Use

### Getting Started
1. **Select a Mode**: Choose between Select (edit), Node (create), or Edge (connect) modes
2. **Create Nodes**: In Node mode, click anywhere on the canvas to create new ideas
3. **Connect Ideas**: In Edge mode, click two nodes to create relationships
4. **Edit Content**: In Select mode, click nodes to edit labels, descriptions, and colors

### Building Your Mind Map
1. **Start with Central Node**: Use the "Central Node" button to create your main topic
2. **Add Related Ideas**: Switch to Node mode and add supporting concepts
3. **Create Connections**: Use Edge mode to show how ideas relate to each other
4. **Organize Visually**: Apply different layouts and colors to improve clarity

### Saving and Sharing
- **Auto-Save**: Your work is automatically saved to browser storage
- **Export Options**: Download as JSON for later editing or PNG for presentations
- **Import Projects**: Load previously saved mind maps from JSON files

## 🎯 Use Cases

### 📚 Education
- **Study Maps**: Visualize complex topics and their relationships
- **Lecture Notes**: Organize course content in interconnected diagrams
- **Research Planning**: Map out research questions and methodologies

### 💼 Business
- **Project Planning**: Break down projects into tasks and dependencies
- **Strategy Mapping**: Visualize business strategies and their components
- **Team Brainstorming**: Collaborative idea generation and organization

### 🎨 Creative Work
- **Story Planning**: Map character relationships and plot points
- **Design Systems**: Organize design elements and their relationships
- **Creative Brainstorming**: Explore ideas and their connections

## 🛠️ Technical Implementation

### Libraries Used
- **Cytoscape.js**: Powerful graph theory library for node-edge visualization
- **Alpine.js**: Reactive JavaScript framework for component state management
- **Tailwind CSS + DaisyUI**: Modern utility-first CSS framework with component library
- **HTML2Canvas**: Client-side image generation for mind map exports

### Key Features
- **Real-time Rendering**: 60fps smooth animations and interactions
- **Memory Efficient**: Optimized for large mind maps with hundreds of nodes
- **Cross-browser Compatible**: Works on all modern web browsers
- **Mobile Responsive**: Touch-friendly interface for tablet and mobile use

### Data Structure
```json
{
  "elements": {
    "nodes": [
      {
        "data": {
          "id": "unique_id",
          "label": "Node Title",
          "color": "#3B82F6",
          "description": "Detailed description"
        },
        "position": { "x": 100, "y": 100 }
      }
    ],
    "edges": [
      {
        "data": {
          "id": "edge_id",
          "source": "node1_id",
          "target": "node2_id"
        }
      }
    ]
  }
}
```

## 🎮 Interface Overview

### Main Canvas
- **Graph Visualization**: Interactive area for creating and manipulating mind maps
- **Mode Indicators**: Visual feedback showing current operation mode
- **Minimap**: Overview navigation for large mind maps
- **Status Bar**: Real-time information about current actions

### Sidebar Controls
- **Mode Selection**: Quick switching between Select, Node, and Edge modes
- **Quick Actions**: Central node creation, clearing, layout application
- **Color Palette**: Node color selection with visual preview
- **Data Management**: Export/import functionality
- **Node Editor**: Real-time editing of selected node properties
- **Statistics**: Live count of nodes and connections

### Keyboard Shortcuts
- **Escape**: Return to Select mode
- **Delete**: Remove selected nodes or edges
- **Ctrl+A**: Select all elements
- **Ctrl+Z**: Undo last action (browser storage dependent)
- **Space**: Fit view to content

## 📱 Mobile Optimization

- **Touch Gestures**: Pinch to zoom, drag to pan
- **Responsive Layout**: Sidebar collapses on mobile devices
- **Touch-friendly Controls**: Large buttons and touch targets
- **Gesture Support**: Tap to select, long press for context actions

## 🔧 Customization Options

### Visual Themes
- Modify CSS variables for custom color schemes
- Adjust node shapes and sizes through Cytoscape styling
- Customize background gradients and effects

### Layout Algorithms
- **Cose**: Force-directed layout with good node separation
- **Circle**: Nodes arranged in a circular pattern
- **Grid**: Organized grid layout for structured data
- **Breadthfirst**: Hierarchical tree-like arrangement
- **Concentric**: Concentric circles based on node importance

## 🎯 Best Practices

### Creating Effective Mind Maps
1. **Start Simple**: Begin with a central concept and expand outward
2. **Use Colors Strategically**: Assign colors to different categories or themes
3. **Keep Labels Concise**: Short, descriptive labels work best
4. **Show Relationships**: Use edges to demonstrate how concepts connect
5. **Regular Organization**: Apply layouts periodically to maintain clarity

### Performance Tips
- Keep individual mind maps under 100 nodes for optimal performance
- Use meaningful labels to make navigation easier
- Export large mind maps as images for presentation purposes
- Regular JSON exports serve as backups for important work

---

**Built with**: Cytoscape.js, Alpine.js, Tailwind CSS, HTML2Canvas
**Browser Storage**: Automatic saving to localStorage
**Export Formats**: JSON (data), PNG (image)
**Device Support**: Desktop, tablet, and mobile optimized
