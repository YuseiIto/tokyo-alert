var tokyoAlert = function () {
  if (state) {
    window.alert("東京");
  }
};

var tokyoRelease = function () {
  window.alert("解除");
};

var trigger = function () {
  state = true;
  document.body.style.backgroundColor = "red";
  tokyoAlert();
};

var end = function () {
  state = false;
  document.body.style.backgroundColor = "white";
  tokyoRelease();
};

window.onload = function () {
  setInterval(tokyoAlert, 1500);
};
