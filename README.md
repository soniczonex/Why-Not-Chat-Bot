# Why Not Chat Bot

A modern, lightweight chat bot interface and Progressive Web App powered by Mistral AI and Mistral AI agents. Originally created to power [SimpyAI.com](https://simpyai.com), this project provides a flexible foundation for building custom chat experiences.

[![GitHub Repository](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?style=flat&logo=GitHub)](https://github.com/soniczonex/Why-Not-Chat-Bot)

## Features

- 🚀 Real-time chat interface
- 💬 Character-by-character message streaming
- 📱 Mobile-first responsive design
- ⚡ No framework dependencies
- 🔒 Error-resilient configuration system
- 🌐 Progressive Web App (PWA) support
- 🎨 Customizable UI and branding
- 📊 Debug mode for development

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/soniczonex/Why-Not-Chat-Bot.git
cd Why-Not-Chat-Bot
```

2. Configure your environment:
   - Update configuration values in `config.js`


## Configuration

Edit `config.js` to customize your chat bot:

```javascript
export const config = {
    site: {
        name: "Why Not Chat Bot",              // Site name
        browserTitle: "Why Not Chat Bot",      // Browser tab title
        welcomeMessage: {
            title: "Welcome to Why Not Chat Bot",
            description: "Your custom welcome message"
        }
    },
    api: {
        mistralKey: "your-api-key",           // Mistral AI API key
        agentId: "your-agent-id"              // Mistral AI agent ID
    },
    debug: {
        enabled: false                         // Enable/disable debug logging
    }
};
```

### Required Configuration

1. Mistral AI Setup
   - Get your API key from [Mistral AI](https://mistral.ai)
   - Create and configure your agent
   - Update `mistralKey` and `agentId` in config.js

2. Site Customization
   - Update site name and browser title
   - Customize welcome message
   - Modify any style variables in styles.css

### Project Structure

```
root/
├── index.html              # Main entry point
├── styles.css             # Global styles
├── script.js             # Core application logic
├── config.js             # Configuration file
├── site.webmanifest      # PWA configuration
├── .htaccess             # Server configuration
└── icons/                # Favicon and PWA icons
```


## Error Handling

The application includes comprehensive error handling:

- Configuration validation with fallbacks
- DOM element verification
- API error management
- Network failure recovery
- Debug logging when enabled

## Mobile Support

Built with mobile-first principles:

- Responsive layout
- Touch-optimized interface
- Safe area insets support
- iOS keyboard handling
- Android Chrome optimizations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Originally created to power [SimpyAI.com](https://simpyai.com)
- Powered by [Mistral AI](https://mistral.ai)
- Uses [Google Fonts](https://fonts.google.com) for typography

## Support

For support, please:
1. Check existing [GitHub Issues](https://github.com/soniczonex/Why-Not-Chat-Bot/issues)
2. Create a new issue if needed
3. Provide detailed information about your setup and the problem
