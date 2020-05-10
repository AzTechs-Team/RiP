document.getElementById("iframe").style.display = "none";

console.log("hack!");

function newVid() {
  var catArr = [
    "https://www.youtube.com/embed/mwENYk66q6M",
    "https://www.youtube.com/embed/7cTMbkH-08Y",
    "https://www.youtube.com/embed/EtH9Yllzjcc",
    "https://www.youtube.com/embed/DXUAyRRkI6k",
  ];

  document.getElementById("iframe").src = catArr[Math.floor(Math.random() * 4)];

<<<<<<< HEAD
  document.getElementById("button").onclick = function () {
    document.getElementById("iframe").style.display = "block";
  };
}
=======
      document.getElementById("iframe").style.display = "block";

  
<<<<<<< HEAD
  
=======
  
  
>>>>>>> 7864ad51cfe084234f2b479dd83a73fbd140df0f
>>>>>>> 550390585bbd9aead6c5d9ee7925098f5fb46ef9
