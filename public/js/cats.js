
document.getElementById("iframe").style.display = "none";

function newVid() {
    var catArr = [
      'https://www.youtube.com/embed/mwENYk66q6M',
      'https://www.youtube.com/embed/7cTMbkH-08Y',
      'https://www.youtube.com/embed/EtH9Yllzjcc',
      'https://www.youtube.com/embed/DXUAyRRkI6k',
      'https://www.youtube.com/embed/5dsGWM5XGdg',
      'https://www.youtube.com/embed/hY7m5jjJ9mM',
      'https://www.youtube.com/embed/-kv1QSmIxGc',
      'https://www.youtube.com/embed/72NfSwCzFVE',
      'https://www.youtube.com/embed/0ZTWrSl5PlE',
      'https://www.youtube.com/embed/94PLgLKcGW8'
    ]
  
    document.getElementById('iframe').src = catArr[Math.floor(Math.random() * 10)];

      document.getElementById("iframe").style.display = "block";

  }
  