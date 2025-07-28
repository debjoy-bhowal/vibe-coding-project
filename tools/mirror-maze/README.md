# 🪞 Mirror Maze - Dual-Board Puzzle Game

[![Game Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)](https://github.com/debjoy-bhowal/vibe-coding-project)
[![Difficulty](https://img.shields.io/badge/Difficulty-Progressive-orange?style=for-the-badge)](https://github.com/debjoy-bhowal/vibe-coding-project)
[![Players](https://img.shields.io/badge/Players-Single%20Player-blue?style=for-the-badge)](https://github.com/debjoy-bhowal/vibe-coding-project)

## 🎮 Game Overview

Mirror Maze is an innovative dual-board puzzle game where you control two avatars simultaneously - your real-world character and its mirror reflection. The challenge lies in coordinating both avatars to reach their respective exits while navigating through an increasingly complex maze filled with switches, doors, and deadly traps.

### 🎯 Objective

Guide both your **real avatar** (👤) and **mirror shadow** (👥) to their respective exits (🚪) simultaneously. Success requires strategic thinking as your movements affect both characters, but with a twist - only left-right movement is mirrored, while up-down movement remains synchronized.

## 🕹️ Game Mechanics

### Movement System
- **Real Avatar**: Moves normally in all directions
- **Mirror Avatar**: 
  - **Up/Down**: Same as real avatar (synchronized)
  - **Left/Right**: Opposite to real avatar (mirrored)
- **Independent Movement**: Each avatar can move individually if their path is clear
- **Obstacle Blocking**: If one avatar is blocked, the other can still move

### Controls
- **Arrow Keys** or **WASD**: Move avatars
- **Mouse/Touch**: Click directional buttons
- **R Key**: Reset current level
- **H Key**: Toggle level hint
- **Keyboard Shortcuts**: Full support for rapid gameplay

### Game Elements

| Element | Icon | Function |
|---------|------|----------|
| **Exit** | 🚪 | Goal destination - both avatars must reach their exits |
| **Switch** | ⚡ | Toggles all doors between open/closed states |
| **Door (Closed)** | 🚫 | Blocks movement - can be opened by hitting switches |
| **Door (Open)** | ⬜ | Allows passage through - can be closed by switches |
| **Trap** | 💀 | Instant death - touching resets the level |
| **Wall** | ▓ | Permanent barrier that blocks movement |
| **Floor** | ░ | Safe walkable area |

## ⚠️ Advanced Mechanics

### Door Trapping System
- **Dangerous Positioning**: Standing on a door when it closes will **trap** that avatar
- **Movement Restriction**: Trapped avatars cannot move until the door reopens
- **Escape Mechanism**: Hit another switch to reopen doors and free trapped avatars
- **Strategic Risk**: Use door timing as part of puzzle-solving strategy

### Victory Conditions
- **Simultaneous Victory**: Both avatars must reach their exits at the same time
- **No Partial Success**: Reaching only one exit doesn't complete the level
- **Perfect Timing**: Plan your moves to coordinate both avatars' arrival

## 📊 Game Features

### Progressive Difficulty
- **8 Challenging Levels**: From tutorial basics to master-level complexity
- **Increasing Complexity**: New mechanics introduced gradually
- **Grid Sizes**: Ranging from 6x6 to 9x9 for varied gameplay experiences

### Performance Tracking
- **Move Counter**: Track efficiency with real-time move counting
- **Level Timer**: Individual timing for each level attempt
- **Progress Saving**: Automatic progress persistence using localStorage
- **Completion Stats**: Review performance after each level victory

### User Experience
- **Level Selection**: Always-accessible level picker with progress indicators
- **Hint System**: Built-in hints for each level to guide players
- **Victory Celebration**: Animated success feedback with comprehensive stats
- **Responsive Design**: Optimized for both desktop and mobile play

## 🎲 Level Progression

### Level 1: Tutorial
- **Grid Size**: 6x6
- **Focus**: Basic movement and mirror mechanics
- **Elements**: Simple exits with clear paths
- **Learning**: Understand left-right mirroring concept

### Level 2: Switch Introduction
- **Grid Size**: 6x6
- **Focus**: Switch and door mechanics
- **Elements**: Doors blocking exits, switches to toggle them
- **Learning**: Basic puzzle-solving with switches

### Level 3: Trap Navigation
- **Grid Size**: 6x6
- **Focus**: Avoiding deadly traps
- **Elements**: Traps blocking direct paths
- **Learning**: Careful navigation and path planning

### Level 4: Complex Switching
- **Grid Size**: 7x7
- **Focus**: Multiple switches and doors
- **Elements**: Several switch-door combinations
- **Learning**: Advanced switch timing and sequencing

### Level 5: Narrow Passages
- **Grid Size**: 8x8
- **Focus**: Precise movement in tight spaces
- **Elements**: Corridor navigation with limited paths
- **Learning**: Spatial awareness and movement precision

### Level 6: Timing Puzzles
- **Grid Size**: 6x6
- **Focus**: Coordinated movement and timing
- **Elements**: Multiple doors requiring sequence activation
- **Learning**: Complex multi-step puzzle solving

### Level 7: Maze Runner
- **Grid Size**: 8x8
- **Focus**: Complex pathfinding with all elements
- **Elements**: Combination of all mechanics in maze form
- **Learning**: Master-level coordination and strategy

### Level 8: Ultimate Challenge
- **Grid Size**: 9x9
- **Focus**: Expert-level puzzle mastery
- **Elements**: Maximum complexity with all game mechanics
- **Learning**: Complete mastery of all game systems

## 🛠️ Technical Implementation

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS + DaisyUI for rapid UI development
- **Reactivity**: Alpine.js for state management and interactivity
- **Graphics**: CSS Grid for game board, custom animations for feedback

### Performance Features
- **Efficient Rendering**: Optimized DOM updates for smooth gameplay
- **Memory Management**: Clean state management with proper cleanup
- **Mobile Optimization**: Touch-friendly controls and responsive layout
- **Accessibility**: Keyboard navigation and screen reader compatibility

### Code Architecture
- **Modular Design**: Clean separation of game logic, UI, and data
- **State Management**: Centralized game state with Alpine.js reactivity
- **Event Handling**: Comprehensive input handling for all control methods
- **Data Persistence**: localStorage integration for progress tracking

## 🎨 Design Philosophy

### Visual Design
- **Clean Aesthetics**: Minimalist design focusing on gameplay clarity
- **Color Coding**: Intuitive color schemes for different game elements
- **Visual Feedback**: Immediate response to player actions with animations
- **Consistent Iconography**: Clear, universally understood symbols

### User Experience
- **Intuitive Controls**: Natural movement patterns that feel responsive
- **Progressive Learning**: Gentle learning curve with guided progression
- **Immediate Feedback**: Clear indication of success, failure, and progress
- **Accessibility First**: Inclusive design for all types of players

## 🚀 Getting Started

### Quick Start
1. **Open the Game**: Navigate to the Mirror Maze tool from the main hub
2. **Read Instructions**: Click the "Help" button for detailed gameplay rules
3. **Start Playing**: Begin with Level 1 to learn the basic mechanics
4. **Practice**: Use the hint system if you get stuck on any level

### Pro Tips
- **Plan Ahead**: Think several moves in advance for both avatars
- **Use Hints Wisely**: Each level has specific strategy hints
- **Practice Mirror Logic**: Remember only left-right is mirrored
- **Master Timing**: Learn to coordinate switch activation with movement
- **Stay Patient**: Complex levels require multiple attempts to master

## 🏆 Achievements & Challenges

### Completion Milestones
- **First Victory**: Complete Level 1
- **Switch Master**: Complete Level 2 without getting trapped
- **Trap Survivor**: Complete Level 3 without hitting any traps
- **Efficiency Expert**: Complete any level in minimum moves
- **Speed Runner**: Complete levels under target time
- **Perfect Game**: Complete all 8 levels

### Personal Challenges
- **Minimum Moves**: Try to complete each level in the fewest moves possible
- **Speed Runs**: Race against the clock for fastest completion times
- **No Hints**: Complete all levels without using the hint system
- **First Attempt**: Try to solve each level on your first try

## 🔧 Customization & Modifications

### For Developers
The game is built with extensibility in mind:

- **Level Editor Potential**: Grid-based system makes new level creation straightforward
- **Mechanic Extensions**: Easy to add new game elements and behaviors
- **Theme Customization**: CSS-based styling allows for complete visual overhauls
- **Difficulty Scaling**: Adjustable parameters for timing, grid size, and complexity

### Future Enhancement Ideas
- **Level Editor**: In-game level creation tools
- **Community Levels**: Share and play user-created levels
- **Multiplayer Mode**: Competitive or cooperative multiplayer variants
- **Achievement System**: Comprehensive progression and reward system
- **Theme Variants**: Different visual themes and environments

## 📝 Credits & Acknowledgments

**Game Design & Development**: Built using AI-assisted development for the Vibe Coding Competition

**Technology Credits**:
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Tailwind CSS component library
- **Alpine.js**: Lightweight reactive framework
- **Font Awesome**: Icon library for UI elements

**Inspiration**: Classic puzzle games and mirror-based mechanics from retro gaming

---

### 🎮 Ready to Play?

**[Launch Mirror Maze](./index.html)** and test your puzzle-solving skills!

*Can you master the art of dual-avatar coordination and conquer all 8 levels?*

---

*Built with ❤️ and AI assistance for the Vibe Coding Competition 2025*
