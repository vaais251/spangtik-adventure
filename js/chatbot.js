// Custom Chatbot for Spantik Adventure with Gemini API
document.addEventListener('DOMContentLoaded', function () {
    const GEMINI_API_KEY = "AIzaSyDJImZYz6PRKS9n2KfZNyOJijMCvbjc-jM";
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemma-3-27b-it:generateContent?key=${GEMINI_API_KEY}`;

    // System Instruction / Context for the AI
    const SYSTEM_INSTRUCTION = `
    You are the helpful, friendly, and knowledgeable AI assistant for "Spantik Adventure", a premium trekking and tour company based in Skardu, Pakistan.
    Your goal is to assist potential clients with booking tours, planning their trips, and answering questions about Northern Pakistan.

    Context & Knowledge Base:
    - **Booking:** Clients can book via the contact form, email (spantikadventure@yahoo.com), or phone (03129880411, 0355453027). A 30% deposit is required.
    - **Payment:** Bank transfer, PayPal, Cash, Western Union, MoneyGram.
    - **Tours:** K2 Base Camp (21 days, challenging), Hunza Valley (7 days, easy/moderate), Baltoro Glacier (14 days), Deosai, Fairy Meadows.
    - **Services:** Accommodation, meals, transport, professional guides, porters, visa support (invitation letters).
    - **Location:** Office at AslamBakery, star market, Skardu, Pakistan.
    - **Best Time:** June to September for trekking. April-October for lower altitudes.
    - **Visas:** Required for most. E-visa available.
    - **Refunds:** >60 days: Full - $100. 30-59 days: 50%. <30 days: None.
    - **Safety:** Skardu is very safe. Guides ensure safety.
    - **Contact:** spantikadventure@yahoo.com.

    Guidelines:
    - Keep responses concise (under 3-4 sentences/100 words where possible) but informative.
    - Be enthusiastic about adventure and nature.
    - If you don't know an answer, suggest contacting the team directly via email or the contact form.
    - Do not make up prices or dates not specified here.
    - Format answers nicely (use bullet points if listing things).
    `;

    // Categories for suggestions (Chips)
    const categories = [
        { name: "Popular Treks", questions: ["Tell me about K2 Base Camp", "Is Hunza Valley tour easy?", "Baltoro Glacier info"] },
        { name: "Planning", questions: ["When is the best time to visit?", "Do I need a visa?", "What should I pack?"] },
        { name: "Booking", questions: ["How do I book?", "What is the cancellation policy?", "Contact details"] }
    ];

    let chatHistory = [
        {
            role: "user",
            parts: [{ text: SYSTEM_INSTRUCTION }]
        },
        {
            role: "model",
            parts: [{ text: "Understood. I am ready to assist as the Spantik Adventure AI guide." }]
        }
    ];

    // Initialize UI
    initChatbot();

    function initChatbot() {
        const chatbotContainer = document.createElement('div');
        chatbotContainer.className = 'chatbot-container';

        // Generate suggestions HTML
        let suggestionsHTML = '';
        categories.forEach(category => {
            suggestionsHTML += `
                <div class="suggestion-category">
                    <h4>${category.name}</h4>
                    <div class="suggestion-buttons">
                        ${category.questions.map(q => `<button class="suggestion-btn">${q}</button>`).join('')}
                    </div>
                </div>
            `;
        });

        chatbotContainer.innerHTML = `
            <div class="chatbot-box hidden">
                <div class="chatbot-header">
                    <div class="chatbot-header-info">
                        <img src="images/favicon/logo.png" alt="Bot" style="height: 30px; border-radius: 50%; margin-right: 10px; background: white;">
                        <h3>Spantik Assistant</h3>
                    </div>
                    <button class="chatbot-close-btn">&times;</button>
                </div>
                <div class="chatbot-messages">
                    <div class="message bot-message">
                        Hello! 👋 I'm your AI guide for Spantik Adventure. Ask me about our treks, K2, or how to book your trip!
                    </div>
                </div>
                
                <!-- Typing Indicator -->
                <div class="typing-indicator hidden">
                    <span></span><span></span><span></span>
                </div>

                <div class="chatbot-input">
                    <input type="text" placeholder="Ask about K2, Hunza, or Booking..." class="chatbot-input-field">
                    <button class="chatbot-send-btn"><i class="fas fa-paper-plane"></i></button>
                </div>
                <div class="chatbot-categories-container">
                    <div class="chatbot-categories-toggle">
                        <span>Suggested Questions</span>
                        <i class="fas fa-chevron-up"></i>
                    </div>
                    <div class="chatbot-suggestions">
                        ${suggestionsHTML}
                    </div>
                </div>
            </div>
            <div class="chatbot-trigger">
                <i class="fas fa-comment-dots"></i>
            </div>
        `;
        document.body.appendChild(chatbotContainer);

        // Elements
        const chatbotTrigger = document.querySelector('.chatbot-trigger');
        const chatbotBox = document.querySelector('.chatbot-box');
        const closeBtn = document.querySelector('.chatbot-close-btn');
        const inputField = document.querySelector('.chatbot-input-field');
        const sendBtn = document.querySelector('.chatbot-send-btn');
        const suggestionBtns = document.querySelectorAll('.suggestion-btn');
        const categoriesToggle = document.querySelector('.chatbot-categories-toggle');
        const suggestionsContainer = document.querySelector('.chatbot-suggestions');
        const typingIndicator = document.querySelector('.typing-indicator');

        // Events
        chatbotTrigger.addEventListener('click', () => {
            chatbotBox.classList.toggle('hidden');
            if (!chatbotBox.classList.contains('hidden')) inputField.focus();
        });

        closeBtn.addEventListener('click', () => chatbotBox.classList.add('hidden'));

        sendBtn.addEventListener('click', () => sendMessage(inputField.value));

        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage(inputField.value);
        });

        suggestionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                sendMessage(btn.textContent);
                // Optional: Hide suggestions after selection to clear view
                // suggestionsContainer.classList.add('hidden'); 
            });
        });

        categoriesToggle.addEventListener('click', function () {
            suggestionsContainer.classList.toggle('hidden');
            const icon = this.querySelector('i');
            if (suggestionsContainer.classList.contains('hidden')) {
                icon.className = 'fas fa-chevron-down';
            } else {
                icon.className = 'fas fa-chevron-up';
            }
        });

        async function sendMessage(text) {
            if (!text.trim()) return;

            // 1. Add User Message
            addMessage(text, 'user');
            inputField.value = '';

            // 2. Show Typing Indicator
            typingIndicator.classList.remove('hidden');
            const messagesContainer = document.querySelector('.chatbot-messages');
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            // 3. Call Gemini API
            try {
                const response = await callGemini(text);
                typingIndicator.classList.add('hidden');
                addMessage(response, 'bot');
            } catch (error) {
                console.error("Gemini Error:", error);
                typingIndicator.classList.add('hidden');
                addMessage("I'm having trouble connecting to the mountains right now. Please try again later!", 'bot');
            }
        }
    }

    async function callGemini(userText) {
        // Add user message to history
        chatHistory.push({
            role: "user",
            parts: [{ text: userText }]
        });

        const requestBody = {
            contents: chatHistory,
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 250,
            }
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        const botText = data.candidates[0].content.parts[0].text;

        // Add bot response to history
        chatHistory.push({
            role: "model",
            parts: [{ text: botText }]
        });

        return botText;
    }

    function addMessage(text, sender) {
        const messagesContainer = document.querySelector('.chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        // Convert strict markdown to simple HTML if needed, or just text
        // For safety/simplicity, using innerText mostly, but could parse simple MD
        messageDiv.innerHTML = parseMarkdown(text);

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // specific simple markdown parser for bold/bullet lists
    function parseMarkdown(text) {
        let html = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
            .replace(/\n\*/g, '<br>&bull; ') // Bullet points
            .replace(/\n/g, '<br>'); // Newlines
        return html;
    }
});
