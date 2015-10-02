var body = $("body");

var popUp = $("#pop-up");

var yes = $("#yes");
var no = $("#no");

var noSpooky = $("#noSpooky");
var spooky = $("#spooky");

var closeAlert = function(show) {
	body.removeClass("alert");

	popUp.css("display", "none");

	show.css("display", "block");
}

no.on("click", function() {
	closeAlert(noSpooky);
})

yes.on("click", function() {
	closeAlert(spooky);
})