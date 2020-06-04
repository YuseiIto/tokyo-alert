var tokyoAlert = function() {
    window.alert("東京")
}

var tokyoRelease = function(){
	window.alert("解除")
}

var trigger = function(){
	state = true
	document.bgColor = "red";
	tokyoAlert()
}

var end = function(){
	state = false
	document.bgColor = "white";
	tokyoRelease()
}
