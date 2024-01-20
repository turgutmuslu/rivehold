document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("sendbutton").click();
    }
  });

  function sendMessage() {
    var input = document.getElementById("userInput").value;
    if (input.trim() !== '') {
        var chatbox = document.getElementById("chatbox");
        var userDiv = document.createElement("div");
        userDiv.innerHTML = "User: " + input;
        chatbox.appendChild(userDiv);

        // Add Chatbot response logic here
        var botDiv = document.createElement("div");
        botDiv.innerHTML = "Chatbot: ..."; // Placeholder for chatbot response
        chatbox.appendChild(botDiv);

        // Clear input
        document.getElementById("userInput").value = '';
    }};