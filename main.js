let intervalId = null;

const tokyoAlert = function () {
        window.alert("東京");
};

const releaseTokyo = function () {
        window.alert("解除");
};

const trigger = function () {
        // document.body.style.backgroundColor = "red";
        body.classList.add('state1');
        body.classList.remove('state2');
        tokyoAlert();
        intervalId = setInterval(tokyoAlert, 1500);
};

const end = function () {
        // document.body.style.backgroundColor = "white";
        body.classList.add('state2');
        body.classList.remove('state1');
        clearInterval(intervalId);
        intervalId = null;
        releaseTokyo();
};