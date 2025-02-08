export const config = {
    site: {
        name: "Why Not Chat Bot",              // Your site name
        browserTitle: "Why Not Chat Bot",      // Browser tab title
        welcomeMessage: {
            title: "Welcome to Why Not Chat Bot",
            description: "A modern chat interface powered by Mistral AI"
        }
    },
    api: {
        mistralKey: "your-mistral-api-key",    // Get from mistral.ai
        agentId: "your-agent-id"               // Create an agent at mistral.ai
    },
    debug: {
        enabled: false                          // Set to true for debug logging
    }
};
