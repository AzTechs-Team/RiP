
document.getElementById("iframe").style.display = "none";

function newVid() {
    var catArr = [
        'https://www.youtube.com/embed/mwENYk66q6M',
      'https://www.youtube.com/embed/7cTMbkH-08Y',
      'https://www.youtube.com/embed/EtH9Yllzjcc',
      'https://www.youtube.com/embed/DXUAyRRkI6k'
    ]
  
    document.getElementById('iframe').src = catArr[Math.floor(Math.random() * 4)];

    document.getElementById("button").onclick = function(){
      document.getElementById("iframe").style.display = "block";
    }
  }
  
  