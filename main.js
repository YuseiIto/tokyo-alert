var tokyoAlert = function () {
        if (state) {
                window.alert("東京")
        }
}

var tokyoRelease = function () {
        window.alert("解除")
}

var trigger = function () {
        state = true
        // document.bgColor = "red";
        body.classList.add('state1');
        body.classList.remove('state2');
        tokyoAlert()
}

var end = function () {
        state = false
        // document.bgColor = "white";
        body.classList.add('state2');
        body.classList.remove('state1');
        tokyoRelease()
}

window.onload = function () {
        setInterval(tokyoAlert, 1500)
}
