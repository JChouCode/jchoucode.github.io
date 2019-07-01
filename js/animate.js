var waypoint = new Waypoint({
  element: document.getElementById("line1"),
  handler: function (direction) {
    if (direction == "down") {
      var e = document.getElementById("line1");
      e.classList.add("animate");
      var e = document.getElementById("line2");
      e.classList.add("animate");
      var e = document.getElementById("rectangle");
      e.classList.add("animate");
    }
    if (direction == "up") {
      var e = document.getElementById("line1");
      e.className = "";
      var e = document.getElementById("line2");
      e.className = "";
      var e = document.getElementById("rectangle");
      e.className = "";
    }
  },
  offset: '30%'
})

var waypoint = new Waypoint({
  element: document.getElementById("line3"),
  handler: function (direction) {
    if (direction == "down") {
      document.getElementById("line3").classList.add("animate");
      document.getElementById("line4").classList.add("animate");
    }
    if (direction == "up") {
      document.getElementById("line3").classList.remove("animate");
      document.getElementById("line4").classList.remove("animate");

    }
  },
  offset: '30%'
})

var waypoint = new Waypoint({
  element: document.getElementById("about"),
  handler: function (direction) {
    if (direction == "down") {
      document.getElementById("intro").classList.add("animate");
    }
  },
  offset: '30%'
})

var waypoint = new Waypoint({
  element: document.getElementById("experience"),
  handler: function (direction) {
    if (direction == "down") {
      document.getElementById("ebar").classList.add("animate");
      document.getElementById("ebar2").classList.add("animate");
    }
    if (direction == "up") {
      document.getElementById("ebar").classList.remove("animate");
      document.getElementById("ebar2").classList.remove("animate");
    }
  },
  offset: '30%'
})

var waypoint = new Waypoint({
  element: document.getElementById("languages"),
  handler: function (direction) {
    if (direction == "down") {
      document.getElementById("lbar").classList.add("animate");
      document.getElementById("lbar2").classList.add("animate");
    }
    if (direction == "up") {
      document.getElementById("lbar").classList.remove("animate");
      document.getElementById("lbar2").classList.remove("animate");
    }
  },
  offset: '30%'
})

var waypoint = new Waypoint({
  element: document.getElementById("projects"),
  handler: function (direction) {
    if (direction == "down") {
      document.getElementById("pbar1").classList.add("animate");
      document.getElementById("pbar2").classList.add("animate");
    }
    if (direction == "up") {
      document.getElementById("pbar1").classList.remove("animate");
      document.getElementById("pbar2").classList.remove("animate");
    }
  },
  offset: '30%'
})

function createListener(id, width) {
  element = document.getElementById(id);
  element.addEventListener("mouseover", function () {
    document.getElementById('profbar').style.width = width;
  })
  element.addEventListener("mouseout", function () {
    document.getElementById('profbar').style.width = "5%";
  })
}

document.getElementById("name").addEventListener("mouseover", function () {
  var el = document.getElementById("name");
  var el2 = document.getElementById("name2");
  var el3 = document.getElementById("name3");
  var fx = new TextScramble(el);
  var fx2 = new TextScramble(el2);
  var fx3 = new TextScramble(el3);
  fx.setText("JEFF-");
  fx2.setText("REY");
  fx3.setText("CHOU");
})

createListener("python", "90%");
createListener("java", "85%");
createListener("ocaml", "95%");
createListener("git", "80%");
createListener("html", "78%");
createListener("css", "75%");
createListener("js", "60%");

var changingKeywords = document.querySelectorAll('.key');
var keywordsToggle = setKeywordsToggle(changingKeywords);

function setKeywordsToggle(keywords) {
  let index = 0;
  return setInterval(() => {
    keywords[index].classList.remove('shown');
    if (++index >= keywords.length)
      index = 0;
    keywords[index].classList.add('shown');
  }, 2000);
}