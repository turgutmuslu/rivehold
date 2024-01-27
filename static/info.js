
document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde yapılacak işlemler
  
    // Kutuların üzerine gelindiğinde
    function zoomIn(element) {
        element.style.transform = "scale(1.2)";
    }

    // Kutuların üzerinden çıkıldığında
    function zoomOut(element) {
        element.style.transform = "scale(1)";
    }

    // Kutulara tıklandığında
    function changeColor(element) {
        var randomColor = getRandomColor();
        element.style.backgroundColor = randomColor;
    }

    // Rastgele renk oluşturan fonksiyon
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    

    // Sayfadaki tüm kutulara olay dinleyicilerini ekle
    var boxes = document.querySelectorAll(".box");
    boxes.forEach(function (box) {
        box.addEventListener("mouseover", function () {
            zoomIn(this);
        });

        box.addEventListener("mouseout", function () {
            zoomOut(this);
        });

        box.addEventListener("click", function () {
            changeColor(this);
        });
    });
});