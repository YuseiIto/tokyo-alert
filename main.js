var tokyoAlert = function() {
    window.alert("東京")
}

var trigger = function(){
	state = true
	tokyoAlert()
}

var end = function(){
	state = false
}
