var waypoint = new Waypoint({
  element: document.getElementById("line1"),
  handler: function (direction) {
    if (direction == "down") {
      var e = document.getElementById("line1");
      e.className = "";
      e.classList.add("animate");
      var e = document.getElementById("line2");
      e.className = "";
      e.classList.add("animate");
      var e = document.getElementById("rectangle");
      e.className = "";
      e.classList.add("animate");
    }
    if (direction == "up") {
      var e = document.getElementById("line1");
      e.className = "";
      e.classList.add("reverse");
      var e = document.getElementById("line2");
      e.className = "";
      e.classList.add("reverse");
      var e = document.getElementById("rectangle");
      e.className = "";
      e.classList.add("reverse");
    }
  },
  offset: '30%'
})

// var waypoint = new Waypoint({
//   element: document.getElementById("name"),
//   handler: function (direction) {
//     if (direction == "down") {
//       var el = document.getElementById("name");
//       var el2 = document.getElementById("name2");
//       var el3 = document.getElementById("name3");
//       var fx = new TextScramble(el);
//       var fx2 = new TextScramble(el2);
//       var fx3 = new TextScramble(el3);
//       fx.setText("KEEP");
//       fx2.setText("SCROLL-");
//       fx3.setText("ING");

//       // fx.setText("");
//       // fx2.setText("");
//       // fx3.setText("");

//     }
//     if (direction == "up") {
//       var el = document.getElementById("name");
//       var el2 = document.getElementById("name2");
//       var el3 = document.getElementById("name3");
//       var fx = new TextScramble(el);
//       var fx2 = new TextScramble(el2);
//       var fx3 = new TextScramble(el3);
//       fx.setText("JEFF-");
//       fx2.setText("REY");
//       fx3.setText("CHOU");
//     }
//   },
//   offset: '30%'
// })


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



// var waypoint = new Waypoint({
//   element: document.getElementById("languages"),
//   handler: function () {
//     var e = document.getElementById("pybar");
//     e.classList.add("animate");
//     var e = document.getElementById("javabar");
//     e.classList.add("animate");
//     var e = document.getElementById("ocamlbar");
//     e.classList.add("animate");
//     var e = document.getElementById("htmlbar");
//     e.classList.add("animate");
//     var e = document.getElementById("cssbar");
//     e.classList.add("animate");
//     var e = document.getElementById("jsbar");
//     e.classList.add("animate");
//     var e = document.getElementById("gitbar");
//     e.classList.add("animate");

//   },
//   offset: '30%'
// })



// var title = ['Hello', '你好', 'おはよう', 'Bonjour', 'Привет'];

// var i = 0;

// setInterval(function () { // setInterval makes it run repeatedly
//   document
//     .getElementById('Hello')
//     .innerHTML = title[i++]; // get the item and increment
//   if (i == title.length) i = 0; // reset to first element if you've reached the end
// }, 2000);

// var changingKeywords = document.querySelectorAll('.key');
// var keywordsToggle = setKeywordsToggle(changingKeywords);

// function setKeywordsToggle(keywords) {
//   let index = 0;
//   return setInterval(() => {
//     keywords[index].classList.remove('shown');
//     if (++index >= keywords.length)
//       index = 0;
//     keywords[index].classList.add('shown');
//   }, 2000);
// }
// var waypoint = new Waypoint({
//   element: document.getElementById("rectangle"),
//   handler: function () {
//     var e = document.getElementById("rectangle");
//     e.classList.add("animate");
//   },
//   offset: '30%'
// })'

// function toggleBar(w) {
//   // document.getElementById("profbar").className = "";
//   // console.log("lol");
//   document.getElementById("profbar").style.width = w;
// }

// // function togglePyth() {

// // }
// // }

// function offBar() {
//   // document.getElementById("profbar").className = "";
//   // reset();
//   document.getElementById("profbar").style.width = "10%";
// }

// function reset() {
//   document.getElementById("python").addEventListener('mouseover', toggleBar("100%"));
//   // document.getElementById("java").addEventListener('mouseover', toggleBar("java"));
//   // document.getElementById("ocaml").addEventListener('mouseover', toggleBar("ocaml"));
//   // document.getElementById("git").addEventListener('mouseover', toggleBar("git"));
//   // document.getElementById("html").addEventListener('mouseover', toggleBar("html"));
//   // document.getElementById("css").addEventListener('mouseover', toggleBar("css"));
//   // document.getElementById("js").addEventListener('mouseover', toggleBar("js"));

// }


// document.getElementById("python").addEventListener('mouseover', toggleBar("100%"));
// // document.getElementById("java").addEventListener('mouseover', toggleBar("java"));
// // document.getElementById("ocaml").addEventListener('mouseover', toggleBar("ocaml"));
// // document.getElementById("git").addEventListener('mouseover', toggleBar("git"));
// // document.getElementById("html").addEventListener('mouseover', toggleBar("html"));
// // document.getElementById("css").addEventListener('mouseover', toggleBar("css"));
// // document.getElementById("js").addEventListener('mouseover', toggleBar("js"));

// document.getElementById("python").addEventListener('mouseout', offBar);
// // document.getElementById("java").addEventListener('mouseout', offBar);
// // document.getElementById("ocaml").addEventListener('mouseout', offBar);
// // document.getElementById("git").addEventListener('mouseout', offBar);
// // document.getElementById("html").addEventListener('mouseout', offBar);
// // document.getElementById("css").addEventListener('mouseout', offBar);
// // document.getElementById("js").addEventListener('mouseout', offBar);

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