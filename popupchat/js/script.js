const chatBubble = document.getElementById('chat-bubble');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const collapseButton = document.getElementById('collapse-button');

chatBubble.addEventListener('mouseenter', toggleExpanded);
chatBubble.addEventListener('mouseleave', toggleCollapsed);
chatForm.addEventListener('submit', submitMessage);

async function submitMessage(event) {
    event.preventDefault();
    const message = messageInput.value;
    const response = await sendMessageToChatGPT(message);
    updateResponse(response);
    messageInput.value = '';
  }
  
  async function sendMessageToChatGPT(message) {
    try {
      const response = await fetch('https://api.chatgpt.com/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  function updateResponse(response) {
    const responseElement = document.getElementById('response');
    responseElement.innerText = response.message;
  }

function toggleExpanded() {
    chatBubble.classList.remove('collapsed');
  }

function toggleCollapsed() {
  chatBubble.classList.add('collapsed');
  console.log("toggle");
}




