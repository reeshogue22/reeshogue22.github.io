const toggleBtn = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        chatContainer.classList.toggle('hidden');
    });
}

if (chatInput) {
    chatInput.addEventListener('keydown', e => {
        if (e.key === 'Enter' && chatInput.value.trim() !== '') {
            const userMsg = document.createElement('div');
            userMsg.textContent = chatInput.value;
            chatMessages.appendChild(userMsg);

            const reply = document.createElement('div');
            reply.textContent = getBotReply(chatInput.value);
            chatMessages.appendChild(reply);

            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
}

function getBotReply(msg) {
    msg = msg.toLowerCase();
    if (msg.includes('hello')) return 'Hello! How can I help you?';
    if (msg.includes('price')) return 'Timeline is $29.99, Jukebox is $9.99, and Twintune is $19.99.';
    return "Sorry, I'm a simple demo bot.";
}
