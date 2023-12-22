const vidBg = document.getElementById("vidBg");
let player = document.getElementById("player");
player.innerHTML = "Pause";

function btnPlayer() {
  if (vidBg.paused) {
    vidBg.play();
    player.innerHTML = "Pause";
    player.innerHTML = "Pause";
  } else {
    vidBg.pause();
    player.innerHTML = "Play";
  }
}

function link(url) {
  window.open(url, "_blank");
}

document.getElementById("repo").addEventListener("click", function () {
  link("https://github.com/artikosamodra/web-game-draft");
});

document.getElementById("official").addEventListener("click", function () {
  link("https://www.crysis.com/");
});
