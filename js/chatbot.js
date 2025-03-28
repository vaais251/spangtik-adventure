// Custom Chatbot for Spantik Adventure
document.addEventListener('DOMContentLoaded', function() {
    // FAQ database with predefined questions and answers
    const faqData = [
        {
            question: "How do I book a tour?",
            answer: "You can book a tour by filling out the booking form on our contact page, sending us an email at spantikadventure@yahoo.com, or calling us at 03129880411 or 0355453027. We'll respond within 24 hours to confirm your booking."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept bank transfers, PayPal, and cash payments. For international clients, we also accept Western Union and MoneyGram. A 30% deposit is required to confirm your booking."
        },
        {
            question: "What's included in your tour packages?",
            answer: "Our packages typically include accommodation, meals as specified in the itinerary, transportation, professional guides, porters/support staff, permits and fees. Personal equipment can be rented for an additional fee."
        },
        {
            question: "Do I need a visa to visit Pakistan?",
            answer: "Yes, most nationalities require a visa to visit Pakistan. Pakistan has an e-visa system that makes the process easier. We can provide a letter of invitation to support your visa application."
        },
        {
            question: "What is the best time to visit Skardu?",
            answer: "The best time for trekking in Skardu is from June to September, with July and August being the peak months. Some lower-altitude treks can be done from April to October."
        },
        {
            question: "How physically fit do I need to be for your treks?",
            answer: "Fitness requirements vary by trek. For moderate treks, basic fitness allowing you to walk 5-6 hours a day is sufficient. For challenging expeditions, we recommend 3-6 months of targeted training."
        },
        {
            question: "What is your cancellation policy?",
            answer: "Our cancellation policy is: Cancellations 60+ days before departure receive a full refund minus a $100 fee. 30-59 days: 50% refund. Less than 30 days: No refund. We recommend travel insurance."
        },
        {
            question: "What should I pack for my adventure?",
            answer: "Packing requirements vary by trip and season. Generally, you'll need appropriate clothing for varying weather conditions, sturdy hiking boots, personal medications, and personal items. A detailed packing list will be provided upon booking."
        },
        {
            question: "Do you offer custom adventure packages?",
            answer: "Yes, we specialize in creating custom adventure packages tailored to your preferences, timeframe, and budget. Contact us with your requirements, and we'll craft a personalized adventure for you."
        },
        {
            question: "Where are you located?",
            answer: "Our office is located at AslamBakery, star market, Skardu, Pakistan. Feel free to visit us or contact us by phone or email."
        },
        {
            question: "What languages do your guides speak?",
            answer: "Our guides are fluent in English, Urdu, and local languages like Balti. Some guides also speak additional languages like German, French, or Chinese. If you need a guide with specific language skills, please mention this when booking."
        },
        {
            question: "Is it safe to travel in Skardu?",
            answer: "Yes, Skardu is considered very safe for tourists. The region is known for its hospitality and low crime rates. Our experienced guides ensure your safety throughout your journey and keep you updated on local conditions."
        },
        {
            question: "Do you provide transportation from the airport?",
            answer: "Yes, we offer airport pickup and drop-off services from Skardu Airport. If you're flying into Islamabad, we can arrange transportation to Skardu via flight or scenic road journey depending on your preference and weather conditions."
        },
        {
            question: "What popular treks do you offer?",
            answer: "We offer various popular treks including K2 Base Camp, Concordia, Gondogoro La Pass, Snow Lake, Biafo-Hispar Glacier, Deosai National Park, and Shigar Valley. We can customize any of these treks to match your fitness level and interests."
        },
        {
            question: "How large are your tour groups?",
            answer: "Our standard group size is 4-10 people, which provides a good balance between social interaction and personalized attention. We also offer private tours for individuals, couples, and custom groups of any size."
        },
        {
            question: "What is the weather like in Skardu?",
            answer: "Skardu has a mountain climate with four distinct seasons. Summers (Jun-Sep) are mild with temperatures of 15-30°C. Winters (Nov-Feb) are cold with temperatures from -10 to 5°C. Spring and autumn are pleasant but variable. Weather in higher altitudes can change rapidly."
        },
        {
            question: "Do you offer winter tours?",
            answer: "Yes, we offer winter tours including skiing, snowboarding, and winter trekking expeditions. Winter in Skardu offers a unique experience with snow-covered landscapes and fewer tourists. Special equipment and preparation are required for winter adventures."
        },
        {
            question: "What wildlife might we see?",
            answer: "The region is home to diverse wildlife including the snow leopard, Himalayan ibex, markhor, brown bear, lynx, and various bird species like the golden eagle and Himalayan snowcock. Wildlife sightings depend on the season and trekking route."
        },
        {
            question: "Do I need travel insurance?",
            answer: "Yes, comprehensive travel insurance that covers trekking at high altitudes and emergency evacuation is mandatory for all our tours. Please ensure your policy specifically covers adventure activities and trekking above 4000m if your tour includes such activities."
        },
        {
            question: "Can you help with equipment rental?",
            answer: "Yes, we offer equipment rental services including trekking poles, sleeping bags, down jackets, thermal mats, and tents. Please let us know your requirements in advance so we can ensure availability of properly sized equipment."
        }
    ];

    // Categories for suggestions
    const categories = [
        { name: "Booking & Payment", questions: ["How do I book a tour?", "What payment methods do you accept?", "What is your cancellation policy?"] },
        { name: "Tours & Treks", questions: ["What popular treks do you offer?", "What's included in your packages?", "How large are your tour groups?"] },
        { name: "Travel Planning", questions: ["Best time to visit?", "Do I need a visa?", "Is it safe to travel in Skardu?"] },
        { name: "Preparation", questions: ["What should I pack?", "How fit do I need to be?", "Do I need travel insurance?"] },
        { name: "Local Information", questions: ["Where are you located?", "What is the weather like?", "What wildlife might we see?"] }
    ];

    // Initialize the chatbot UI
    initChatbot();

    function initChatbot() {
        // Create the chatbot container
        const chatbotContainer = document.createElement('div');
        chatbotContainer.className = 'chatbot-container';
        
        // Generate suggestions HTML based on categories
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
                    <h3>Spantik Adventure Assistant</h3>
                    <button class="chatbot-close-btn">&times;</button>
                </div>
                <div class="chatbot-messages">
                    <div class="message bot-message">
                        Hi there! I'm your Spantik Adventure assistant. How can I help you with your trekking and tour plans in Skardu, Pakistan?
                    </div>
                </div>
                <div class="chatbot-input">
                    <input type="text" placeholder="Ask me anything..." class="chatbot-input-field">
                    <button class="chatbot-send-btn"><i class="fas fa-paper-plane"></i></button>
                </div>
                <div class="chatbot-categories-container">
                    <div class="chatbot-categories-toggle">
                        <span>Show all question categories</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="chatbot-suggestions hidden">
                        ${suggestionsHTML}
                    </div>
                </div>
            </div>
            <div class="chatbot-trigger">
                <i class="fas fa-comment-dots"></i>
            </div>
        `;
        document.body.appendChild(chatbotContainer);

        // Add event listeners
        const chatbotTrigger = document.querySelector('.chatbot-trigger');
        const chatbotBox = document.querySelector('.chatbot-box');
        const closeBtn = document.querySelector('.chatbot-close-btn');
        const inputField = document.querySelector('.chatbot-input-field');
        const sendBtn = document.querySelector('.chatbot-send-btn');
        const suggestionBtns = document.querySelectorAll('.suggestion-btn');
        const categoriesToggle = document.querySelector('.chatbot-categories-toggle');
        const suggestionsContainer = document.querySelector('.chatbot-suggestions');

        chatbotTrigger.addEventListener('click', toggleChatbot);
        closeBtn.addEventListener('click', toggleChatbot);
        sendBtn.addEventListener('click', sendMessage);
        inputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        suggestionBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                inputField.value = this.textContent;
                sendMessage();
                suggestionsContainer.classList.add('hidden');
            });
        });
        
        categoriesToggle.addEventListener('click', function() {
            suggestionsContainer.classList.toggle('hidden');
            const icon = this.querySelector('i');
            if (suggestionsContainer.classList.contains('hidden')) {
                this.querySelector('span').textContent = 'Show all question categories';
                icon.className = 'fas fa-chevron-down';
            } else {
                this.querySelector('span').textContent = 'Hide question categories';
                icon.className = 'fas fa-chevron-up';
            }
        });
    }

    function toggleChatbot() {
        const chatbotBox = document.querySelector('.chatbot-box');
        chatbotBox.classList.toggle('hidden');
        if (!chatbotBox.classList.contains('hidden')) {
            document.querySelector('.chatbot-input-field').focus();
        }
    }

    function sendMessage() {
        const inputField = document.querySelector('.chatbot-input-field');
        const userMessage = inputField.value.trim();
        
        if (userMessage === '') return;
        
        // Add user message to chat
        addMessage(userMessage, 'user');
        inputField.value = '';
        
        // Process the message and get response
        setTimeout(() => {
            const botResponse = findAnswer(userMessage);
            addMessage(botResponse, 'bot');
        }, 500);
    }

    function findAnswer(userMessage) {
        userMessage = userMessage.toLowerCase();
        
        // Find the best matching question
        let bestMatch = null;
        let highestScore = 0;
        
        faqData.forEach(faq => {
            const score = similarityScore(userMessage, faq.question.toLowerCase());
            if (score > highestScore && score > 0.3) { // Threshold for a decent match
                highestScore = score;
                bestMatch = faq;
            }
        });
        
        if (bestMatch) {
            return bestMatch.answer;
        }
        
        // Handle common greetings
        if (userMessage.match(/^(hi|hello|hey|greetings)/i)) {
            return "Hello! How can I help you with your adventure planning today?";
        }
        
        // Handle thank you messages
        if (userMessage.match(/thank you|thanks|thx/i)) {
            return "You're welcome! Is there anything else I can help you with?";
        }
        
        // Handle contact requests
        if (userMessage.match(/contact|call|phone|email|reach|talk to someone/i)) {
            return "You can reach us at: Phone: 03129880411 or 0355453027, Email: spantikadventure@yahoo.com, or visit us at AslamBakery, star market, Skardu, Pakistan.";
        }
        
        // Default response for unrecognized questions
        return "I'm not sure about that. Please try asking about our tours, booking process, or contact information. Or you can email us at spantikadventure@yahoo.com for specific questions.";
    }

    function similarityScore(str1, str2) {
        // Simple word matching algorithm
        const words1 = str1.split(/\W+/);
        const words2 = str2.split(/\W+/);
        
        let matches = 0;
        words1.forEach(word => {
            if (word.length > 2 && words2.includes(word)) { // Only count meaningful words
                matches++;
            }
        });
        
        return matches / Math.max(words1.length, words2.length);
    }

    function addMessage(message, sender) {
        const messagesContainer = document.querySelector('.chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = message;
        messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
