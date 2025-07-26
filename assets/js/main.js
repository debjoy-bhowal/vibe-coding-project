// Main Alpine.js application for the hub page
function hubApp() {
    return {
        searchTerm: '',
        filterStatus: 'all',
        completedTools: 12,
        
        // Sample tools data - will be updated as real tools are built
        tools: [
            {
                id: 'calculator',
                name: 'Calculator Pro',
                description: 'Advanced calculator with scientific functions and history',
                icon: '🧮',
                status: 'complete',
                statusLabel: 'Complete',
                technologies: ['JavaScript', 'CSS Grid', 'Local Storage'],
                url: './tools/calculator/'
            },
            {
                id: 'color-generator',
                name: 'Color Palette Generator',
                description: 'Generate beautiful color schemes and gradients',
                icon: '🎨',
                status: 'complete',
                statusLabel: 'Complete',
                technologies: ['Canvas API', 'Color Theory', 'Export'],
                url: './tools/color-generator/'
            },
            {
                id: 'markdown-preview',
                name: 'Markdown Preview',
                description: 'Real-time markdown editor with live preview',
                icon: '📝',
                status: 'complete',
                statusLabel: 'Complete',
                technologies: ['Markdown Parser', 'Live Preview', 'Export'],
                url: './tools/markdown-preview/'
            },
            {
                id: 'weather-dashboard',
                name: 'Weather Dashboard',
                description: 'Local weather information with beautiful UI',
                icon: '🌦️',
                status: 'complete',
                statusLabel: 'Complete',
                technologies: ['Chart.js', 'Geolocation', 'Local Storage'],
                url: './tools/weather-dashboard/'
            },
            {
                id: 'data-visualizer',
                name: 'Data Visualizer',
                description: 'Transform your data into beautiful, interactive charts and graphs',
                icon: '📊',
                status: 'complete',
                statusLabel: 'Complete',
                technologies: ['Chart.js', 'CSV Parser', 'JSON Import', 'Interactive'],
                url: './tools/data-visualizer/'
            },
            {
                id: 'password-generator',
                name: 'Password Generator',
                description: 'Generate cryptographically secure passwords with strength analysis',
                icon: '🔐',
                status: 'complete',
                statusLabel: 'Complete',
                technologies: ['Crypto API', 'Security', 'Analytics'],
                url: './tools/password-generator/'
            },
            {
                id: 'qr-generator',
                name: 'QR Code Generator',
                description: 'Generate QR codes for text, URLs, and more',
                icon: '📱',
                status: 'complete',
                statusLabel: 'Complete',
                technologies: ['QR Library', 'Download', 'Customization'],
                url: './tools/qr-generator/'
            },
            {
                id: 'music-player',
                name: 'Music Player',
                description: 'Simple audio player with playlist support',
                icon: '🎵',
                status: 'complete',
                statusLabel: 'Complete',
                technologies: ['Web Audio API', 'Playlist', 'Controls'],
                url: './tools/music-player/'
            },
            {
                id: 'image-filter',
                name: 'Image Filter Studio',
                description: 'Apply filters and effects to uploaded images',
                icon: '📷',
                status: 'complete',
                statusLabel: 'Complete',
                technologies: ['Canvas API', 'Image Processing', 'Filters'],
                url: './tools/image-filter/'
            },
            {
                id: 'pomodoro-timer',
                name: 'Pomodoro Timer',
                description: 'Productivity timer with notifications',
                icon: '🎯',
                status: 'complete',
                statusLabel: 'Complete',
                technologies: ['Notifications', 'Audio', 'Sessions'],
                url: './tools/pomodoro-timer/'
            },
            {
                id: 'typing-speed-tester',
                name: 'Typing Speed Tester',
                description: 'Test and improve your typing speed with real-time feedback',
                icon: '⌨️',
                status: 'complete',
                statusLabel: 'Complete',
                technologies: ['Real-time Stats', 'Performance Analytics', 'Local Storage'],
                url: './tools/typing-speed-tester/'
            },
            {
                id: 'pixel-art-maker',
                name: 'Pixel Art Maker',
                description: 'Create beautiful pixel art with interactive canvas and export features',
                icon: '🎨',
                status: 'complete',
                statusLabel: 'Complete',
                technologies: ['Canvas API', 'Interactive Drawing', 'PNG Export', 'CSS Generation'],
                url: './tools/pixel-art-maker/'
            }
        ],

        // Computed property for filtered tools
        get filteredTools() {
            let filtered = this.tools;

            // Filter by search term
            if (this.searchTerm) {
                filtered = filtered.filter(tool => 
                    tool.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    tool.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    tool.technologies.some(tech => 
                        tech.toLowerCase().includes(this.searchTerm.toLowerCase())
                    )
                );
            }

            // Filter by status
            if (this.filterStatus !== 'all') {
                filtered = filtered.filter(tool => tool.status === this.filterStatus);
            }

            return filtered;
        },

        // Method to open a tool
        openTool(tool) {
            if (tool.status === 'complete' || tool.status === 'progress') {
                // In a real scenario, you'd navigate to the tool
                window.location.href = tool.url;
            } else {
                this.showComingSoonAlert(tool.name);
            }
        },

        // Show alert for planned tools
        showComingSoonAlert(toolName) {
            alert(`${toolName} is coming soon! Stay tuned for updates.`);
        },

        // Initialize the app
        init() {
            this.updateCompletedCount();
            this.setupSmoothScrolling();
        },

        // Update completed tools count
        updateCompletedCount() {
            this.completedTools = this.tools.filter(tool => tool.status === 'complete').length;
        },

        // Setup smooth scrolling for navigation links
        setupSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
    }
}

// Additional utility functions
document.addEventListener('DOMContentLoaded', function() {
    // Add some loading animations
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-fade-in-up');
    });

    // Add parallax effect to hero background elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelectorAll('.animate-blob');
        
        parallax.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed');
        });
    });
}
