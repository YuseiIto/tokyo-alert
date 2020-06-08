let state = false;

const tokyoAlert = function () {
  if (state) {
    window.alert("東京");
  }
};

const tokyoRelease = function () {
  window.alert("解除");
};

const trigger = function () {
  state = true;
  document.body.style.backgroundColor = "red";
  tokyoAlert();
};

const end = function () {
  state = false;
  document.body.style.backgroundColor = "white";
  tokyoRelease();
};

window.onload = function () {
  setInterval(tokyoAlert, 1500);
};
