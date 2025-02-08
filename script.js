import { config } from './config.js';

// Initialize config with default values in case of loading error
let activeConfig;
try {
    activeConfig = config;
} catch (error) {
    console.error('Error loading config:', error);
    activeConfig = {
        site: {
            name: "SimpyAI",
            browserTitle: "SimpyAI",
            welcomeMessage: {
                title: "Welcome to SimpyAI",
                description: "The world's first AI trained exclusively to simp."
            }
        },
        api: {
            mistralKey: "",
            agentId: ""
        },
        debug: {
            enabled: false
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements with error handling
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const pageTitle = document.getElementById('page-title');
    const siteLogo = document.getElementById('site-logo');
    const sendButton = document.getElementById('send-button');

    if (!chatBox || !userInput || !sendButton) {
        console.error('Required DOM elements not found');
        return;
    }

    // Set site title and logo from config if elements exist
    if (pageTitle) pageTitle.textContent = activeConfig.site.browserTitle;
    if (siteLogo) siteLogo.textContent = activeConfig.site.name;

    // Add send button click handler
    sendButton.addEventListener('click', sendMessage);

    let messageHistory = [];

    function sendMessage() {
        const userMessage = userInput.value;
        if (userMessage.trim() === '') return;

        // Display user message
        displayMessage('user', userMessage);

        // Add user message to history
        messageHistory.push({ role: "user", content: userMessage });

        // Clear input field
        userInput.value = '';

        // Send message to Minstral AI API
        fetchMinstralAIResponse(userMessage);
    }

    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    if (sender === 'welcome') {
        messageElement.className = 'welcome';
        messageElement.innerHTML = message;
    } else {
        messageElement.className = sender;
        messageElement.innerHTML = `<strong>${sender === 'ai' ? 'Simpy:' : 'You:'}</strong> ${message}`;
    }
    chatBox.appendChild(messageElement);
    scrollToBottom();
}

    async function fetchMinstralAIResponse(userMessage) {
        const apiUrl = 'https://api.mistral.ai/v1/agents/completions'; // Replace with the actual Minstral AI API endpoint
        if (activeConfig.debug.enabled) {
            console.debug('Sending message to API:', userMessage);
        }

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${activeConfig.api.mistralKey}`
            },
            body: JSON.stringify({
                messages: messageHistory,
                agent_id: activeConfig.api.agentId
            })
        });

        const data = await response.json();
        if (activeConfig.debug.enabled) {
            console.debug('API Response:', data);
        }
        const aiMessage = data.choices[0].message.content;

        // Add AI message to history
        messageHistory.push({ role: "assistant", content: aiMessage });

        // Stream AI response
        streamMessage('ai', aiMessage);
    }

    function streamMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = sender;
        chatBox.appendChild(messageElement);

        // Display the sender immediately
        messageElement.innerHTML = `<strong>${sender === 'ai' ? 'Simpy:' : 'You:'}</strong> `;

        let index = 0;
        const interval = setInterval(() => {
            if (index < message.length) {
                messageElement.innerHTML += message[index];
                index++;
                scrollToBottom();
            } else {
                clearInterval(interval);
                scrollToBottom();
            }
        }, 20); // Adjust the interval to control the typing speed
    }

    function scrollToBottom() {
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Display welcome message when the page loads
    displayMessage('welcome', `
        <strong>${activeConfig.site.welcomeMessage.title}</strong><br><br>
        ${activeConfig.site.welcomeMessage.description}
    `);
});
