var tokyoAlert = function() {
    window.alert("東京")
}

var tokyoRelease = function(){
	window.alert("解除")
}

var trigger = function(){
	state = true
	tokyoAlert()
}

var end = function(){
	state = false
	tokyoRelease()
}
