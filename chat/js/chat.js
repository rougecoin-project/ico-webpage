// JavaScript for handling form submission and displaying messages
const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");

form.addEventListener("submit", event => {
  // prevent the form from reloading the page
  event.preventDefault();

  // get the message from the input field
  const message = input.value;

  // clear the input field
  input.value = "";

  // add the message to the chat window
  messages.innerHTML += `<div class="message">You: ${message}</div>`;

  // send the message to the chatbot and display the response
  chatbotResponse(message).then(response => {
    messages.innerHTML += `<div class="message">Bot: ${response}</div>`;
  });
});

async function chatbotResponse(message) {
  // send the message to the chatbot and return the response
  const response = await fetch("/chatbot", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });
  const data = await response.json();
  return data.response;
}