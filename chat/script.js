document.getElementById("send-btn").addEventListener("click", sendMessage);

document.getElementById("chat-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.getElementById("chat-input");
    const message = inputField.value.trim();

    if (message === "") return; // Don't send empty messages

    // Create user chat bubble
    createChatBubble(message, "user");

    // Clear input field
    inputField.value = "";

    // Simulate bot response after a short delay
    setTimeout(() => {
        botResponse(message);
    }, 500);
}

function botResponse(message) {
    // Simple bot responses based on input
    let response = "";
    
    if (message.toLowerCase().includes("hello")) {
        response = "Hello! How can I assist you today?";
    } else if (message.toLowerCase().includes("services")) {
        response = "We offer AI-powered video editing, jingles, and logo design!";
    } else {
        response = "I'm not sure how to respond to that. Can you please clarify?";
    }


    // Create bot chat bubble
    createChatBubble(response, "bot");
}

function createChatBubble(text, userType) {
    const chatWindow = document.getElementById("chat-window");

    // Create bubble element
    const bubble = document.createElement("div");
    bubble.classList.add("chat-bubble", userType);
    bubble.textContent = text;

    // Add bubble to chat window
    chatWindow.appendChild(bubble);

    // Scroll to the bottom of the chat window
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
