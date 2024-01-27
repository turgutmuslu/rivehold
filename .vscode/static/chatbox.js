function addMessage(content, type) {
  const messagesContainer = document.getElementById('messages');
  const messageElement = document.createElement('li');
  messageElement.className = 'message ' + type;
  messageElement.textContent = content;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
  const userInput = document.getElementById('userInput');
  const userQuestion = userInput.value.trim();

  if (userQuestion !== '') {
    addMessage(userQuestion, 'outgoing');

    // Kullanıcının sorusunu Flask uygulamasına gönder
    fetch('http://localhost:5000/get-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userQuestion }),
    })
      .then(response => response.json())
      .then(data => {
        // Flask uygulamasından gelen cevabı göster
        addMessage(data.reply, 'incoming');
      });

    userInput.value = '';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // İlk giriş mesajlarını simüle etme
  addMessage('Merhaba! Chatbox\'a hoş geldiniz.', 'incoming');
});

// Arka plan resmini değiştirmek için JavaScript
const backgroundImages = ['image/sph3.jpg', 'image/sph1.jpg', 'image/sph2.jpg', 'image/sph4.jpg', 'image/sph5.jpg'];
let currentImageIndex = 0;

function changeBackgroundImage() {
  document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

// Sayfa yüklendiğinde ve belirli bir süre sonra arkaplan fotoğrafını değiştir
document.addEventListener('DOMContentLoaded', function () {
  setInterval(changeBackgroundImage, 5000); // 5000 milisaniye (5 saniye) aralıklarla değiştir
});
