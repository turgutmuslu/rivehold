document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("sendbutton").click();
    }
  });