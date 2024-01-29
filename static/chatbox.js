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

    // Kullanıcının sorusunu askQuestionToAI fonksiyonu aracılığıyla Flask uygulamasına gönder
    askQuestionToAI(userQuestion).then(data => {
      // Flask uygulamasından gelen cevabı göster
      addMessage(data, 'incoming');
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // İlk giriş mesajlarını simüle etme
  addMessage('Merhaba afacan! Rivehold\'a hoş geldin!', 'incoming');
});

// Arka plan resmini değiştirmek için JavaScript
const backgroundImages = ['static/sph3.jpg', 'static/sph1.jpg', 'static/sph2.jpg', 'static/sph4.jpg', 'static/sph5.jpg'];
let currentImageIndex = 0;

function changeBackgroundImage() {
  document.body.style.backgroundImage = 'url(' + backgroundImages[currentImageIndex] + ')';
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}


// Sayfa yüklendiğinde ve belirli bir süre sonra arkaplan fotoğrafını değiştir
document.addEventListener('DOMContentLoaded', function () {
  setInterval(changeBackgroundImage, 2000); // 5000 milisaniye (5 saniye) aralıklarla değiştir
});

function askQuestionToAI(question) {
  return fetch('/ask_ai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question: question }),
  })
  .then(response => response.json())
  .then(data => {
    console.log("Alınan Yanıt: ", data); // Yanıtı konsola yazdır
    return data;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

const userInput = document.getElementById('userInput');
userInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    sendMessage();
    document.getElementById('userInput').value = '';
  }
});

function playAudio() {
  // Ses dosyasının yolunu belirtin
  var audioPath = 'static/rivehold1.mp3';

  // Audio öğesini oluşturun
  var audio = new Audio(audioPath);

  // Ses dosyasını çal
  audio.play();
}
window.onload = setTimeout(playAudio, 2000);