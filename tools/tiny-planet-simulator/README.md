# 🪐 Tiny Planet Simulator

An interactive orbital mechanics game where you control gravity to guide planets to their targets!

## 🎮 Game Overview

Tiny Planet Simulator is a physics-based puzzle game that puts you in control of gravitational forces. With a central sun providing constant gravitational pull, your goal is to strategically influence the orbits of planets to hit all targets on the screen.

## 🎯 How to Play

### Objective
- Guide all planets to hit the green targets scattered around the screen
- Use gravitational influence to alter planet trajectories
- Complete levels by hitting all targets efficiently

### Controls
- **Click anywhere**: Apply gravitational pull toward your cursor
- **Play/Pause button**: Start or stop the simulation
- **Gravity slider**: Adjust the strength of your gravitational influence (0.5x to 3.0x)
- **Reset button**: Restart the current level
- **New Game button**: Generate a new level with different target positions

### Game Elements

#### 🌟 The Sun
- Central gravitational body that constantly pulls planets toward it
- Creates natural orbital mechanics
- Acts as a "slingshot" for accelerating planets

#### 🪐 Planets
- Randomly spawn from the edges of the screen
- Different colors and sizes with varying masses
- Automatically orbit the sun due to gravitational physics
- Can be influenced by your cursor clicks

#### 🎯 Targets
- Green dashed circles positioned around the screen
- Must be hit by planets to score points
- Pulse animation indicates active targets
- Flash green when successfully hit

#### 💫 Gravity Field
- Optional visualization showing your gravitational influence range
- Toggle on/off in the controls panel
- Helps plan strategic gravitational pulls

## 🧮 Physics System

### Orbital Mechanics
- Realistic gravitational simulation using inverse square law
- Planets naturally establish elliptical orbits around the sun
- Conservation of momentum creates realistic space physics

### Gravitational Influence
- Click-based gravity system allows precise trajectory control
- Gravity strength affects the power of your influence
- Strategic timing creates slingshot effects for maximum acceleration

### Collision Detection
- Accurate planet-to-target collision detection
- Planets are removed upon successful target hits
- Real-time collision feedback with visual effects

## 🏆 Scoring System

### Point Values
- **Base Target Hit**: 100 points
- **Time Bonus**: Additional points based on how quickly you hit targets
- **Completion Bonus**: 500 points for clearing all targets

### Performance Metrics
- **Score**: Total points accumulated
- **Targets Hit**: Number of successful collisions
- **Active Planets**: Current planets in the simulation
- **Gravity**: Current gravitational influence strength
- **Time**: Elapsed game time

## 💡 Strategy Guide

### Basic Techniques
1. **Timing is Everything**: Click when planets are positioned for optimal trajectory changes
2. **Use Natural Orbits**: Let planets orbit naturally, then apply gravity at the right moment
3. **Slingshot Maneuvers**: Use the sun's gravity to accelerate planets toward distant targets

### Advanced Strategies
1. **Multi-Target Chains**: Plan routes that hit multiple targets in sequence
2. **Gravity Modulation**: Adjust gravity strength for different situations:
   - Low gravity (0.5-1.0): Precise, gentle course corrections
   - Medium gravity (1.0-2.0): Balanced control and power
   - High gravity (2.0-3.0): Powerful pulls for dramatic trajectory changes

3. **Edge Spawning Prediction**: Anticipate where new planets will spawn and pre-position for intercepts

### Expert Tips
- **Orbital Insertion**: Click behind a planet's trajectory to slow it into a stable orbit
- **Escape Velocity**: Click ahead of a planet to accelerate it beyond orbital capture
- **Gravity Wells**: Create temporary gravity wells to cluster planets before redirecting them
- **Conservation Planning**: Remember that gravity affects all planets - plan for unintended consequences

## 🛠️ Technical Features

### Real-Time Physics
- 60fps smooth animation with requestAnimationFrame
- Accurate gravitational force calculations
- Dynamic collision detection system

### Responsive Design
- Optimized for desktop and mobile devices
- Touch-friendly controls and interface
- Adaptive layout for different screen sizes

### Visual Effects
- Glowing celestial bodies with CSS animations
- Particle-like background stars with twinkling effects
- Smooth transitions and visual feedback
- Pulsing gravity field visualization

### Game State Management
- Alpine.js reactive state system
- Persistent game statistics
- Pause/resume functionality
- Clean reset and new game capabilities

## 🎨 Visual Design

### Cosmic Theme
- Deep space background with gradient effects
- Realistic celestial body appearances
- Glowing effects for sun and planets
- Dashed target indicators with pulse animations

### Color Scheme
- **Sun**: Golden yellow with orange glow
- **Planets**: Blue, red, green, and purple variants
- **Targets**: Green with transparency effects
- **Background**: Deep space blues and purples
- **UI**: Glass morphism with backdrop blur

## 🚀 Performance Optimization

### Efficient Rendering
- Minimal DOM manipulation for smooth performance
- CSS-based animations for visual effects
- Optimized collision detection algorithms

### Memory Management
- Automatic cleanup of off-screen planets
- Efficient object pooling for game entities
- Garbage collection friendly coding patterns

## 🎲 Game Variations

### Difficulty Scaling
- **Beginner**: Fewer targets, slower planet spawning
- **Intermediate**: Standard configuration as implemented
- **Expert**: More targets, faster spawning, reduced gravity influence

### Potential Extensions
- **Power-ups**: Temporary gravity multipliers or planet freezing
- **Obstacles**: Asteroids or black holes that affect trajectories
- **Multi-level Progression**: Increasingly complex target arrangements
- **Time Challenges**: Speed-based scoring systems

## 📱 Accessibility

### Keyboard Support
- Spacebar: Toggle play/pause
- R key: Reset simulation
- Arrow keys: Adjust gravity strength

### Visual Accessibility
- High contrast target indicators
- Clear visual feedback for all interactions
- Scalable interface elements

### Motor Accessibility
- Large click targets for easy interaction
- Forgiving collision detection
- Adjustable difficulty through gravity settings

## 🌟 Educational Value

### Physics Concepts
- **Gravitational Force**: Understanding inverse square law relationships
- **Orbital Mechanics**: Learning about elliptical orbits and escape velocity
- **Conservation of Energy**: Observing kinetic and potential energy exchanges
- **Vector Mathematics**: Visualizing force vectors and resulting motion

### Problem-Solving Skills
- **Strategic Planning**: Thinking multiple moves ahead
- **Spatial Reasoning**: Understanding 2D trajectory planning
- **Timing Coordination**: Developing precise interaction timing
- **System Thinking**: Understanding how multiple forces interact

---

**Ready to master the cosmos? Start your gravitational adventure now!** 🚀
