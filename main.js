let intervalId = null;

const tokyoAlert = function () {
  window.alert("東京");
};

const releaseTokyo = function () {
  window.alert("解除");
};

const trigger = function () {
  document.body.style.backgroundColor = "red";
  tokyoAlert();
  intervalId = setInterval(tokyoAlert, 1500);
};

const end = function () {
  document.body.style.backgroundColor = "white";
  clearInterval(intervalId);
  intervalId = null;
  releaseTokyo();
};
